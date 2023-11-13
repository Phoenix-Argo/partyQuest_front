<script>
import { ref } from "vue";
import axios from "axios";

const hostId = ref("");
const title = ref("");
const description = ref("");
const partyOnOff = ref("");
const locationId = ref("");
const recruitOption = ref("");
const memberUpperLimit = ref("");
const middleCateIds = ref("");
const smallCateIds = ref("");
const recruitStartAt = ref("");
const recruitEndAt = ref("");
const studyStartDate = ref("");
const studyEndDate = ref("");

export default {
  name: "createStudyForm",
  data() {
    return {
      form: {
        hostId: 1,
        title: "",
        description: "",
        partyOnOff: "",
        locationId: "",
        recruitOption: [],
        memberUpperLimit: "",
        middleCateIds: "5",
        smallCateIds: [],
        recruitStartAt: "",
        recruitEndAt: "",
        studyStartDate: "",
        studyEndDate: "",
      },
    };
  },
  methods: {
    submitForm() {
      axios
        .post("/contact", this.form)
        .then((res) => {
          //Perform Success Action
        })
        .catch((error) => {
          // error.response.status Check status code
        })
        .finally(() => {
          //Perform action in always
        });
    },
  },
};
const create = () => {
  const BASE_URL = "http://localhost:8080";
  axios
    .post(BASE_URL + "/api/study/create", {
      hostId: 1,
      title: "타이틀",
      partyOnOff: "ON",
      recruitOption: "FCFS",
    })
    .then((res) => {
      console.log(res);
    });
};
</script>
<style scoped></style>

<template>
  <!-- Start Study Description -->
  <section>
    <div class="container py-5">
      <div class="row py-5">
        <div class="col-md-9 m-auto" id="groupHead">
          <label class="form-label">모임생성</label>
          <div id="StudyGroup" class="form-text">
            만들고 싶은 스터디 모임이 있다면 파티퀘스트와 파티원을 모집하는 것은
            어떠세요?
          </div>
        </div>

        <form
          class="col-md-9 m-auto"
          method="post"
          role="form"
          v-on:submit.prevent="submitForm"
        >
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
            type="txt"
            id="title"
            class="form-control"
            aria-describedby="studyName"
            v-model="title"
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
                class="bi bi-check2-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                />
                <path
                  d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                />
              </svg>
              하고자하는 스터디의 키워드를 선택해 주세요
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
                      <li><a class="dropdown-item" href="#">CATE1</a></li>
                      <li><a class="dropdown-item" href="#">IT 개발</a></li>
                      <li><a class="dropdown-item" href="#">등등등</a></li>
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
              <section>
                <label class="form-label">지역*</label>
                <div id="Location" class="form-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
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
              </section>

              <hr class="sectionLine" />
              <section>
                <label class="form-label">스터디 기간*</label>
                <div id="studyPeriod" class="form-text">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                    />
                  </svg>
                  스터디 시작일자와 종료일자를 선택해주세요
                </div>
                <!--  -->
                <div class="set-date">
                  <span id="startSpan"
                    >시작일<input type="date" name="start"
                  /></span>
                  <span id="endSpan"
                    >종료일<input type="date" name="end"
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
                    class="bi bi-check2-all"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                    />
                    <path
                      d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
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
                    checked
                  />
                  <ul class="list-inline pb-3" id="memberNum">
                    <li class="list-inline-item text-right">
                      파티원 수
                      <input
                        type="hidden"
                        name="product-quanity"
                        id="product-quanity"
                        value="1"
                        v-model="memberUpperLimit"
                      />
                    </li>
                    <li class="list-inline-item">
                      <span class="btn btn-outline-danger" id="btn-minus"
                        >-</span
                      >
                    </li>
                    <li class="list-inline-item">
                      <span class="badge bg-secondary" id="var-value">1</span>
                    </li>
                    <li class="list-inline-item">
                      <span class="btn btn-outline-danger" id="btn-plus"
                        >+</span
                      >
                    </li>
                  </ul>
                </div>
              </section>
            </div>
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
                class="bi bi-check2-all"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z"
                />
                <path
                  d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z"
                />
              </svg>
              설명이 풍부한 스터디 모임은, 아닌 스터디 모임에 비해 지원률이 50%
              높습니다.
            </div>
            <textarea
              class="form-control mt-1"
              id="message"
              name="message"
              placeholder="Message"
              rows="8"
              v-model="description"
            ></textarea>
          </div>
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
