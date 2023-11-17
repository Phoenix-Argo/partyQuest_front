<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import SmartEditor from "./smartEditor.vue";
import {getLocations} from "@/utils/fetch/studyFetch";

const BASE_URL = "http://localhost:8080";
const cates = ref({});

//cate 상태 (major, middle , small) SELECT LIST
const major = ref({
  curMajor: "",
  majors: [],
});
const middle = ref({
  curMiddle: "",
  middles: [],
});
const small = ref({
  curSmall: "",
  smalls: [],
});
// 현재 스터디의 주제로 선택된 middle cates, small cates
const selectedMiddles = ref(new Set([]));
const selectedSmalls = ref(new Set([]));

// 모집 방식토글(FCFS, PNP)
const switchState = ref({
  isPnp: false,
});
// 온라인 스터디, 오프라인 스터디, 위치
const newStudy_onOff = ref("");
const newStudy_Location = ref("");

// axios에 실어 보낼 payload
const newStudy = reactive({
  data: {},
});

const fetchCates = async () => {
  await axios({
    url: BASE_URL + "/api/category/allCate",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      response.data.forEach((element) => {
        const majorKey = element["majorName"];
        const tempObj = {};
        element["middleCates"].forEach((mid) => {
          const middleKey = mid["middleName"];
          const smallCates = mid["smallCates"];
          const tempList = [];

          smallCates.forEach((sm) => {
            tempList.push(sm["smallName"] + " " + sm["id"]);
          });
          tempObj[middleKey] = tempList;
        });
        cates.value[majorKey] = tempObj;
        // cates의 key(major cate)들을 먼저 등록 해준다.
        major.value.majors = Object.keys(cates.value);
      });
      console.log("my cate objs", cates.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
const fetchLocations = async () => {
  await getLocations()
      .then(res=>{
        locations.value = res;
      })
}
onMounted(() => {
  fetchCates();
  fetchLocations();
});

const submitForm = async () => {
  // 승인제
  newStudy.recruitOption = switchState.value.isPnp ? "PNP" : "FCFS";

  console.log("newStudy.data : " + JSON.stringify(newStudy));

  axios
    .post(BASE_URL + "/api/study/create", newStudy)
    .then((response) => {
      console.log(JSON.stringify(response));
      alert("등록!");
    })
    .catch((err) => {
      console.log(err);
    });
};
// cate change handler start

/**
 * Major 카테에 해당하는 Middle 카테들을 리스트에 등록시킨다.
 * @param {} e
 */
const onMajorChange = (e) => {
  const selectedMajor = e.target.innerText.trim();
  major.value.curMajor = selectedMajor;
  middle.value.middles = Object.keys(cates.value[selectedMajor]);
};

const onMiddleChange = (e) => {
  const selectedMiddle = e.target.innerText.trim();
  middle.value.curMiddle = selectedMiddle;
  selectedMiddles.value.add(selectedMiddle);
  small.value.smalls =
    cates.value[major.value.curMajor][middle.value.curMiddle];
};
const onSmallSelected = (e) => {
  const selectedSmall = e.target.innerText.trim();
  small.value.curSmall = selectedSmall;
  selectedSmalls.value.add(selectedSmall);
};

// cate change handler end

// on off 선택 시작
const onOffList = ref(["온라인+오프라인","온라인","오프라인"])
const isOn = ref(false); // 온라인만 진행하는 경우:true, 오프라인을 포함하는 경우:false
const onOffToggleHandler = async (onOff)=>{
  if (onOff.includes("오프라인")) {
    isOn.value = false;
    isLocationsVisible.value = true;
  }
  else{
    isOn.value = true;
    isLocationsVisible.value = false;
    newStudy_Location.value = "온라인" // 온라인 모집인 경우 위치는 무조건 온라인
  }
  newStudy_onOff.value = onOff; // api에 실을 데이터 할당
}
// on off 선택 end

// locations 선택
const isLocationsVisible = ref(true); // 온라인인 경우 location을 선택 할 수 없다.=>이 경우 location == '온라인'
const locations = ref([]);
const onLocationChangeHandler = (curLocation)=>{
  newStudy_Location.value = curLocation;
}
// locations 선택 끝
</script>

<style scoped></style>

<template>
  <!-- Start Study Description -->
  <section class="createStudyTilte">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-9 m-auto" id="groupHead">
          <label class="form-label">모임생성</label>
          <div id="StudyGroup" class="form-text">
            만들고 싶은 스터디 모임이 있다면 파티퀘스트와 파티원을 모집하는 것은
            어떠세요?
          </div>
        </div>

        <form @submit.prevent="submitForm" class="col-md-9 m-auto">
          <hr class="sectionLine" />
          <label class="form-label">스터디명*</label>
          <div id="studyName" class="form-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-check-all"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
              />
            </svg>
            직관적인 스터디모임명을 사용하시면 클릭률이 올라갑니다!
          </div>
          <input
            type="text"
            id="title"
            class="form-control"
            aria-describedby="studyName"
            v-model="newStudy.title"
          />

          <hr class="sectionLine" />

          <section>
            <!-- 카테고리 버튼 태그 사용 => select 버튼은 범위가 큼 동적처리해주면될듯-->
            <label class="form-label">카테고리*</label>
            <div class="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
                />
              </svg>
              하고자하는 스터디의 키워드를 선택해 주세요
            </div>
            <section>
              <div class="btn-group">
                <div id="majorCate">
                  <button
                    type="button"
                    id="cate1"
                    class="btn dropdown-toggle btn-outline-danger"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MajorCate
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      v-for="cateKey in Object.keys(cates)"
                      class="dropdown-item"
                      @click="onMajorChange"
                    >
                      {{ cateKey }}
                    </li>
                  </ul>
                </div>

                <div id="middleCate">
                  <button
                    type="button"
                    id="cate2"
                    class="btn dropdown-toggle btn-outline-danger"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MiddleCate
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      v-for="middle in middle.middles"
                      class="dropdown-item"
                      @click="onMiddleChange"
                    >
                      {{ middle }}
                    </li>
                  </ul>
                </div>

                <div id="SmallCate">
                  <button
                    type="button"
                    id="cate3"
                    class="btn dropdown-toggle btn-outline-danger"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SmallCate
                  </button>
                  <ul class="dropdown-menu">
                    <li
                      v-for="small in small.smalls"
                      class="dropdown-item"
                      @click="onSmallSelected"
                    >
                      {{ small }}
                    </li>
                  </ul>
                </div>

                <div id="addCate">
                  <button type="button" id="addBtn" class="btn btn-danger">
                    추가
                  </button>
                </div>
              </div>
              <div class="d-flex">
                <span v-if="selectedMiddles.size > 0">&#127795;</span>
                <div v-for="sMiddle in selectedMiddles">
                  <span class="p-1 fw-bold">{{ sMiddle }}</span>
                </div>
              </div>
              <div class="d-flex">
                <span v-if="selectedSmalls.size > 0">&#127808;</span>
                <div v-for="sSmall in selectedSmalls">
                  <span class="p-1 fw-bold">{{ sSmall }}</span>
                </div>
              </div>
            </section>

            <hr class="sectionLine" />

            <label class="form-label">지역*</label>
            <div id="Location" class="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
                />
              </svg>
              온/오프라인 여부와 장소를 선택해주세요
            </div>
            <!--  -->
            <div class="btn-group">
              <div id="on/off">
                <button
                  type="button"
                  id="groupLocation1"
                  class="btn dropdown-toggle btn-outline-danger"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  온/오프라인 모두 가능
                </button>
                <ul class="dropdown-menu">
                  <li v-for="on in onOffList" class="dropdown-item"
                  @click="onOffToggleHandler(on)">
                    {{on}}
                  </li>
                </ul>
              </div>

              <div v-if="isLocationsVisible" class="Location">
                <button
                  type="button"
                  id="groupLocation2"
                  class="btn dropdown-toggle btn-outline-danger"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  상관없음
                </button>
                <ul class="dropdown-menu">
                  <li v-for="location in locations" class="dropdown-item"
                  @click="onLocationChangeHandler(location.locationName)">
                    {{location.locationName}}
                  </li>
                </ul>
              </div>
            </div>

            <hr class="sectionLine" />
            <section>
              <label class="form-label">스터디 기간*</label>
              <div id="studyPeriod" class="form-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-all"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
                  />
                </svg>
                스터디 시작일자와 종료일자를 선택해주세요
              </div>
              <!--  -->
              <div class="set-date">
                <span id="startSpan"
                  >시작일<input
                    type="date"
                    name="recruitStartAt"
                    v-model="newStudy.data.recruitStartAt"
                /></span>
                <span id="endSpan"
                  >종료일<input
                    type="date"
                    name="recruitEndAt"
                    v-model="newStudy.data.recruitEndAt"
                /></span>
              </div>
            </section>

            <hr class="sectionLine" />
            <section>
              <label class="form-label">모집방식*</label>
              <div class="form-text">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-check-all"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
                  />
                </svg>
                주로 3~5명을 추천합니다. 승인제를 선택할 시 호스트가 파티원을
                심사할 수 있어요!
              </div>

              <div class="form-check form-switch">
                <label
                  id="verification"
                  class="form-check-label"
                  for="flexSwitchCheckChecked"
                  >승인제</label
                >
                <input
                  id="verificationSwitch"
                  class="form-check-input"
                  style="width: 70px; height: 30px"
                  type="checkbox"
                  role="switch"
                  v-model="switchState.isPnp"
                  @change="handleToggleChange"
                />
                <ul class="list-inline pb-3" id="memberNum">
                  <li class="list-inline-item text-right">
                    파티원 수
                    <input
                      type="hidden"
                      name="product-quanity"
                      id="product-quanity"
                      value="1"
                    />
                  </li>
                  <li class="list-inline-item">
                    <span class="btn btn-outline-danger" id="btn-minus">-</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="badge bg-secondary" id="var-value">1</span>
                  </li>
                  <li class="list-inline-item">
                    <span class="btn btn-outline-danger" id="btn-plus">+</span>
                  </li>
                </ul>
              </div>
            </section>
          </section>
          <hr class="sectionLine" />
          <div class="form-group" style="padding-bottom: 10px">
            <label for="exampleFormControlFile1">썸네일* </label><br />

            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
            />
          </div>
          <hr class="sectionLine" />
          <div class="mb-3">
            <label for="inputmessage">스터디 설명 *</label>
            <div id="passwordHelpBlock" class="form-text">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-check-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L2.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093L8.95 4.992a.252.252 0 0 1 .02-.022zm-.92 5.14.92.92a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 1 0-1.091-1.028L9.477 9.417l-.485-.486-.943 1.179z"
                />
              </svg>
              설명이 풍부한 스터디 모임은, 아닌 스터디 모임에 비해 지원률이 50%
              높습니다.
            </div>
          </div>

          <!--뷰 에디터 컴포넌트 자리-->
          <SmartEditor
            id="input-content"
            v-model="newStudy.description"
          ></SmartEditor>
          <hr class="sectionLine" />

          <div class="row">
            <div class="d-grid gap-2">
              <button class="btn btn-danger" type="submit">파티신청</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- End Study Description -->
</template>
