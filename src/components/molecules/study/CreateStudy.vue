<script setup>
import { ref, reactive, onMounted } from "vue";
import axios from "axios";
import SmartEditor from "./smartEditor.vue";
import IconDoubleCheck from "../../icons/IconDoubleCheck.vue";
import { useStudyCategories } from "../../../modules/study/StudyCategories";
import { useStudyRecruitment } from "../../../modules/study/StudyRecruitment";
import { useStudyLocation } from "../../../modules/study/StudyLocation";
import { useStudyPeriod } from "../../../modules/study/StudyPeriod";
import { useAuthStore } from "../../../stores/authStore";

const BASE_URL = "http://localhost:8080";
const { user } = useAuthStore();
// 카테고리
const { cates, major, middle, small, selectedMiddles, selectedSmalls } =
  useStudyCategories();

// 온/오프라인 및 지역 설정
const {
  newStudy_onOff,
  newStudy_Location,
  onOffList,
  selectedOption,
  selectedLocation,
  fetchLocations,
  isOn,
  isLocationsVisible,
  locations,
  onOffToggleHandler,
  onLocationChangeHandler,
} = useStudyLocation();

// 스터디 기간
const { getFormattedCurrentDate } = useStudyPeriod();

// 모집방식
const { switchState, member, increase, decrease } = useStudyRecruitment();

// axios에 실어 보낼 payload
const newStudy = reactive({});

// 카테고리 가져오기
const fetchCates = async () => {
  await axios({
    url: BASE_URL + "/api/category/allCate",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log(response.data);
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

onMounted(() => {
  fetchCates();
  fetchLocations();
});
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

const onMiddleChange = (curMiddle) => {
  middle.value.curMiddle = curMiddle;
  selectedMiddles.value.add(curMiddle);
  small.value.smalls =
    cates.value[major.value.curMajor][middle.value.curMiddle];
};
const onSmallSelected = (curSmall) => {
  small.value.curSmall = curSmall;
  selectedSmalls.value.add(curSmall);
};
// cate change handler end

const tnail = ref();
const formData = new FormData();
const onFileUploadHandler = (e) => {
  let file = e.target.files[0];
  formData.append("thumb", file);
};

/* 최종 전송 FORM  */
const submitForm = async () => {
  // TODO: 호스트 아이디 받기 (Member)
  newStudy.hostId = user.hostId;
  newStudy.recruitOption = switchState.value.isPnp ? "PNP" : "FCFS";
  newStudy.memberUpperLimit = member.value;
  newStudy.middleCateIds = Array.from(selectedMiddles.value).map((el) =>
    Number(el.split(" ")[el.split(" ").length - 1])
  );
  newStudy.smallCateIds = Array.from(selectedSmalls.value).map((el) =>
    Number(el.split(" ")[el.split(" ").length - 1])
  );
  newStudy.partyOnOff = newStudy_onOff.value;
  newStudy.locationId = newStudy_Location.value;
  console.log("newStudy.data : " + JSON.stringify(newStudy));

  if (
    !newStudy.title ||
    !newStudy.middleCateIds ||
    !newStudy.partyOnOff ||
    !newStudy.studyStartDate ||
    !newStudy.studyEndDate ||
    !newStudy.memberUpperLimit ||
    !newStudy.description ||
    !formData.get("thumb")
  ) {
    alert("입력하지 않은 항목이 있습니다. 다시 한 번 확인해주세요.");
    return;
  }
  try {
    // Make the first request to create the study
    const createResponse = await axios.post(
      BASE_URL + "/api/study/create",
      newStudy
    );

    // Extract the studyId from the response
    const createdStudyId = createResponse.data.studyId;

    console.log("Create Study Response:", createResponse.data);
    console.log("Created Study ID:", createdStudyId);

    // Update newStudy object with the received studyId
    newStudy.studyId = createdStudyId;

    // Append studyId to formData before making the file upload request
    formData.append("studyId", createdStudyId);

    // Continue with the file upload
    const uploadResponse = await axios.post(
      BASE_URL + "/api/study/uploadFile",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );

    console.log("Upload File Response:", uploadResponse.data);
    alert("모집 신청이 완료되었습니다.");
  } catch (error) {
    console.error("Error:", error);
    // Handle errors as needed
    alert("모집 신청 중 오류가 발생했습니다. 다시 시도해주세요.");
  }
};
</script>

<style scoped></style>

<template>
  <!-- Start Study Description -->
  <section class="createStudyTilte">
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-9 m-auto" id="groupHead">
          <label class="form-main">모임생성</label>
          <div id="StudyGroup" class="main-text">
            만들고 싶은 스터디 모임이 있다면 파티퀘스트와 파티원을 모집하는 것은
            어떠세요?
          </div>
        </div>

        <form @submit.prevent="submitForm" class="col-md-9 m-auto">
          <hr class="sectionLine" />
          <label>스터디명*</label>
          <div id="studyName" class="subtext">
            <IconDoubleCheck></IconDoubleCheck>
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

          <!-- 카테고리 버튼 태그 사용 => select 버튼은 범위가 큼 동적처리해주면될듯-->
          <label>카테고리*</label>
          <div class="subtext">
            <IconDoubleCheck></IconDoubleCheck>
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
                    @click="onMiddleChange(middle)"
                  >
                    {{ middle.split(" ").slice(0, -1).join(" ") }}
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
                    @click="onSmallSelected(small)"
                  >
                    {{ small.split(" ").slice(0, -1).join(" ") }}
                  </li>
                </ul>
              </div>
            </div>
            <div class="d-flex">
              <span v-if="selectedMiddles.size > 0">&#127795;</span>
              <div v-for="sMiddle in selectedMiddles">
                <span class="p-1 fw-bold">{{
                  sMiddle.split(" ").slice(0, -1).join(" ")
                }}</span>
              </div>
            </div>
            <div class="d-flex">
              <span v-if="selectedSmalls.size > 0">&#127808;</span>
              <div v-for="sSmall in selectedSmalls">
                <span class="p-1 fw-bold">{{
                  sSmall.split(" ").slice(0, -1).join(" ")
                }}</span>
              </div>
            </div>
          </section>

          <hr class="sectionLine" />

          <label class="">지역*</label>
          <div id="Location" class="subtext">
            <IconDoubleCheck></IconDoubleCheck>
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
                {{ selectedOption }}
              </button>
              <ul class="dropdown-menu">
                <li
                  v-for="on in onOffList"
                  class="dropdown-item"
                  @click="onOffToggleHandler(on)"
                >
                  {{ on }}
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
                {{ selectedLocation }}
              </button>
              <ul class="dropdown-menu">
                <li
                  v-for="location in locations"
                  class="dropdown-item"
                  @click="onLocationChangeHandler(location)"
                >
                  {{ location.locationName }}
                </li>
              </ul>
            </div>
          </div>

          <hr class="sectionLine" />
          <section>
            <label class="">스터디 기간*</label>
            <div id="studyPeriod" class="subtext">
              <IconDoubleCheck></IconDoubleCheck>
              스터디 시작일자와 종료일자를 선택해주세요
            </div>
            <!--  -->
            <div class="set-date">
              <span id="startSpan"
                >시작일<input
                  type="date"
                  name="studyStartDate"
                  v-model="newStudy.studyStartDate"
                  :min="getFormattedCurrentDate()"
              /></span>
              <span id="endSpan"
                >종료일<input
                  type="date"
                  name="studyEndDate"
                  v-model="newStudy.studyEndDate"
                  :min="newStudy.studyStartDate || getFormattedCurrentDate()"
              /></span>
            </div>
          </section>

          <hr class="sectionLine" />
          <section>
            <label class="">모집방식*</label>
            <div class="subtext">
              <IconDoubleCheck></IconDoubleCheck>
              최대 30명까지 파티원을 구해보세요. 그리고 승인제를 선택할 시
              호스트가 파티원을 심사할 수 있어요!
            </div>

            <div class="form-check form-switch">
              <div>
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
              </div>
              <div class="party-count">
                <ul class="list-inline pb-3" id="memberNum">
                  <li class="list-inline-item text-right">파티원 수</li>
                  <div
                    class="btn-toolbar"
                    role="toolbar"
                    aria-label="Toolbar with button groups"
                    id="count"
                  >
                    <div
                      class="btn-group me-2"
                      role="group"
                      aria-label="First group"
                    >
                      <button
                        type="button"
                        class="btn btn-outline-secondary btn-outline-danger"
                        @click="decrease"
                      >
                        -
                      </button>
                    </div>
                    <div class="input-group me-2">
                      <input
                        type="text"
                        class="short-input"
                        readonly
                        v-model="member"
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-outline-secondary btn-outline-danger"
                      @click="increase"
                    >
                      +
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </section>

          <hr class="sectionLine" />
          <section>
            <label for="exampleFormControlFile1">썸네일 *</label><br />
            <div class="subtext">
              <IconDoubleCheck></IconDoubleCheck>
              모임의 메인이 되는 부분이에요. 모임을 잘 소개할 수 있는 사진으로
              모임을 어필해 보세요!
              <br />
            </div>
            <input
              ref="tnail"
              type="file"
              class="form-control-file"
              id="thumb"
              name="thumb"
              @change="onFileUploadHandler"
            />
          </section>
          <hr class="sectionLine" />
          <div class="mb-3">
            <label for="inputmessage">스터디 설명 *</label>
            <div id="passwordHelpBlock" class="subtext">
              <IconDoubleCheck></IconDoubleCheck>
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
              <button class="btn btn-danger" type="submit">파티 생성</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>
  <!-- End Study Description -->
</template>
