<script setup>
import { ref, reactive } from "vue";
import axios from "axios";

const BASE_URL = "http://localhost:8080";
const cates = ref([]);
const switchState = ref({
  isPnp: false,
});
const newStudy = reactive({
  data: {
    recruitOption: "",
  },
});
const btnGetCate = () => {
  axios({
    url: BASE_URL + "/api/category/allCate",
    method: "get",
    responseType: "json",
  })
    .then((response) => {
      console.log(response);
      cates.value = response.data;

      console.log(response.value);
    })
    .catch((err) => {
      console.log(err);
    });
};
const submitForm = () => {
  newStudy.data.recruitOption = switchState.value.isPnp ? "PNP" : "FCFS";
  console.log(newStudy);
  axios
    .post(BASE_URL + "/api/study/create", newStudy)
    .then((response) => {
      console.log(response);
      alert("등록!");
    })
    .catch((err) => {
      console.log(err);
    });
};
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
                    @click="btnGetCate"
                    type="button"
                    id="cate1"
                    class="btn dropdown-toggle btn-outline-danger"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    MajorCate
                  </button>
                  <ul class="dropdown-menu">
                    <li v-for="cate in cates">
                      <a class="dropdown-item" href="#">{{ cate.majorName }}</a>
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
                    <li><a class="dropdown-item" href="#">CATE2</a></li>
                    <li><a class="dropdown-item" href="#">백엔드</a></li>
                    <li><a class="dropdown-item" href="#">프론트엔드</a></li>
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
                    <li><a class="dropdown-item" href="#">CATE3</a></li>
                    <li><a class="dropdown-item" href="#">Spring</a></li>
                    <li><a class="dropdown-item" href="#">Vue.js</a></li>
                  </ul>
                </div>

                <div id="addCate">
                  <button type="button" id="addBtn" class="btn btn-danger">
                    추가
                  </button>
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
                  <li><a class="dropdown-item" href="#">온라인</a></li>
                  <li><a class="dropdown-item" href="#">오프라인</a></li>
                </ul>
              </div>

              <div class="Location">
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
                  <li><a class="dropdown-item" href="#">서울</a></li>
                  <li><a class="dropdown-item" href="#">부산</a></li>
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
                    name="start"
                    v-model="newStudy.recruitStartAt"
                /></span>
                <span id="endSpan"
                  >종료일<input
                    type="date"
                    name="end"
                    v-model="newStudy.recruitEndAt"
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
