<script setup>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import {useAuthStore} from "@/stores/authStore";
import {useRoute, useRouter} from "vue-router";
import Img from "@/components/molecules/common/Img.vue";
import {getValidatedAxios} from "@/utils/globalAxios";

const BASE_URL = "http://localhost:8080";
const {user , accessToken} = useAuthStore();
const myAxios = getValidatedAxios(accessToken);
const hostId = ref(user.email);
const router = useRouter();
//내가 만든 스터디 script 모음

const myPg = ref(0);
console.log(myPg.value);
console.log(typeof myPg.value);
const myStudyList = ref([]);
const mySize = ref(0);
console.log("mySize : " + mySize.value);
const fetchedStudyId = ref(null);

const findStudyMadeByMe = async () => {
  console.log("findStudyMadeByMe called. mySize:", mySize.value);
  const url = `${BASE_URL}/api/study/findStudyMadeByMe`;
  const StudyMyPageRequest = {
    hostId: hostId.value,
    pg: myPg.value,
  };
  try {
    const response = await axios.post(url, StudyMyPageRequest, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    myStudyList.value = response.data;
    mySize.value = response.data.length;

    console.log(myStudyList.value);
    console.log("myStudyListSize : " + mySize);
    console.log("myStudyListSize.value : " + mySize.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};

const BtnNextMyStudy = () => {
  myPg.value = myPg.value + 3;
  console.log(myPg.value);
  findStudyMadeByMe();
};
const BtnPrevMyStudy = () => {
  // 이전 버튼 클릭 시 pg 값을 3 감소시키고 데이터를 새로고침
  myPg.value = myPg.value - 3;
  console.log(myPg.value);
  findStudyMadeByMe();
};

//내가 참여한 스터디 script모음
const attendPg = ref(0);
const studyIAttend = ref([]);
const attendSize = ref(0);

const findStudyIAttended = async () => {
  console.log("findStudyMadeByMe called. attendPg:", attendPg.value);
  const url = `${BASE_URL}/api/study/findStudyIAttended`;
  const StudyMyPageRequest = {
    hostId: hostId.value,
    pg: attendPg.value,
  };
  try {
    const response = await axios.post(url, StudyMyPageRequest, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    studyIAttend.value = response.data;
    attendSize.value = response.data.length;

    console.log(studyIAttend.value);
    console.log("attendSize : " + attendSize);
    console.log("attendSize.value : " + attendSize.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};

const BtnNextAttend = () => {
  attendPg.value = attendPg.value + 3;
  console.log(attendPg.value);
  findStudyIAttended();
};
const BtnPrevAttend = () => {
  // 이전 버튼 클릭 시 pg 값을 3 감소시키고 데이터를 새로고침
  attendPg.value = mattendPg.value - 3;
  console.log(attendPg.value);
  findStudyIAttended();
};

//내가 좋아요한 스터디 script모음
const likePg = ref(0);
const studyIlike = ref([]);
const likeSize = ref(0);
const findLikeStudy = async () => {
  console.log("findStudyMadeByMe called. likePg:", likePg.value);
  const url = `${BASE_URL}/api/study/findLikeList`;
  const StudyMyPageRequest = {
    hostId: hostId.value,
    pg: likePg.value,
  };
  try {
    const response = await axios.post(url, StudyMyPageRequest, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    studyIlike.value = response.data;
    likeSize.value = response.data.length;

    console.log(studyIAttend.value);
    console.log("likeSize : " + likeSize);
    console.log("likeSize.value : " + likeSize.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};

const BtnNextILike = () => {
  likePg.value = likePg.value + 3;
  console.log(likePg.value);
  findLikeStudy();
};
const BtnPrevILike = () => {
  // 이전 버튼 클릭 시 pg 값을 3 감소시키고 데이터를 새로고침
  likePg.value = likePg.value - 3;
  console.log(likePg.value);
  findLikeStudy();
};

/////
onMounted(() => {
  console.log("Mounted. mySize:", mySize.value);
  findStudyMadeByMe();
  findStudyIAttended();
  findLikeStudy();
});
//참가자 명단 보기
const BtnMemberList =  (studyId) => {
  router.push(`studyMember/${studyId}`);


};
//글수정 삭제 하기
const BtnmodifyStudy= (studyId) =>{
  router.push(`/modifyStudy/${studyId}`);
}
const BtnDeleteStudy= async (studyId) =>{
  console.log("BtnDeleteStudy 인식1")
  const requestData = {
    hostId : user.hostId,
    studyId : studyId,
  }
console.log("BtnDeleteStudy 인식2")
console.log("requestData" + requestData)
  try {
    const response = await myAxios.delete(BASE_URL+"/api/study/deleteStudy/"+studyId,{data:requestData});

    console.log("delete!!! : ", response);
  } catch (err){
    console.error("error : " + err);
  }
}


//page script
(function ($) {
  "use strict";
  $(function () {
    //Event carousel
    $("#events").owlCarousel({
      loop: true,
      margin: 0,
      autoPlay: 3000,
      responsive: {
        0: {
          items: 1,
        },
        768: {
          items: 2,
        },
        979: {
          items: 3,
        },
      },
      singleItem: false,
      dots: false,
      nav: true,
      navText: ["", ""],
    });
  });
});
</script>

<template>
  <body>
    <!-- <script
      src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"
      integrity="sha256-pTxD+DSzIwmwhOqTFN+DB+nHjO4iAsbgfyFq5K5bcE0="
      crossorigin="anonymous"
    ></script> -->
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
      integrity="sha256-UhQQ4fxEeABh4JrcmAJ1+16id/1dnlOEVCFOxDef9Lw="
      crossorigin="anonymous"
    />
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- 내가 만든 스터디 -->
          <div id="events" class="event-list owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <p>내가 만든 스터디</p>
              <div class="owl-stage">
                <div v-if="myStudyList.length == 0">
                  <p>생성한 스터디가 없습니다.</p>
                </div>
                <div v-else>
                  <div
                    class="owl-item"
                    style="width: 33.3%"
                    v-for="study in myStudyList"
                    :key="study.studyId"
                  >
                    <div class="event-item">
                      <Img :content="study.thumb"
                          class="img-fluid border"
                      />
                      <p class="event-title">
                        {{ study.title }}
                      </p>
                      <p class="event-content">
                        {{ study.onOff === "ON_OFF" ? "[온라인]" : "" }}[{{
                          study.location
                        }}]({{ study.curMembersSize }}/{{
                          study.memberUpperLimit
                        }})({{ study.studyStartDate }}~{{ study.studyEndDate }})
                      </p>
                      <div>
                        <button @click="() => BtnMemberList(study.studyId)">
                          참여자현황
                        </button>
                        <button @click="()=>BtnmodifyStudy(study.studyId)">수정</button>
                        <button @click="()=>BtnDeleteStudy(study.studyId)">삭제</button>
                      </div>
                    </div>
                    <!-- <div class="event-item">
                    <a href="#" class="event-title">{{ study.title }}</a>
                    <p class="event-content">
                      ERP system conference in Canada team
                    </p>
                    <ul class="event-participants">
                      <li
                        class="event-user"
                        data-toggle="tooltip"
                        data-placement="top"
                        data-skin-class="tooltip-base"
                        data-html="true"
                        title=""
                        data-original-title="<b>Saun K</b>"
                      >
                        <img
                          class="event-user-pic"
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt="Profile Pic"
                        />
                      </li>
                    </ul>
                  </div> -->
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  class="owl-prev"
                  v-if="myPg !== 0"
                  @click="BtnPrevMyStudy"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-left text-primary"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  role="presentation"
                  class="owl-next"
                  v-if="mySize === 3"
                  @click="BtnNextMyStudy"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-right text-primary"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <!-- 내가 참여하는 스터디 -->
          <div id="events" class="event-list owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <p>내가 참여한 스터디</p>
              <div class="owl-stage">
                <div v-if="studyIAttend.length == 0">
                  <p>참여하는 스터디가 없습니다.</p>
                </div>
                <div v-else>
                  <div
                    class="owl-item"
                    style="width: 33.3%"
                    v-for="study in studyIAttend"
                    :key="study.studyId"
                  >
                    <div class="event-item">
                      <Img :content="study.thumb"
                           class="img-fluid border"
                      />
                      <p class="event-title">
                        {{ study.title }}
                      </p>
                      <p class="event-content">
                        {{ study.onOff === "ON_OFF" ? "[온라인]" : "" }}[{{
                          study.location
                        }}]({{ study.curMembersSize }}/{{
                          study.memberUpperLimit
                        }})({{ study.studyStartDate }}~{{ study.studyEndDate }})
                      </p>
                      <div>
                        <button @click="() => BtnMemberList(study.studyId)">
                          참여자현황
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  class="owl-prev"
                  v-if="attendPg !== 0"
                  @click="BtnPrev"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-left text-primary"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  role="presentation"
                  class="owl-next"
                  v-if="attendSize === 3"
                  @click="BtnNext"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-right text-primary"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <!-- 내가 좋아요한 스터디 -->
          <div id="events" class="event-list owl-carousel owl-loaded owl-drag">
            <div class="owl-stage-outer">
              <p>내가 좋아요한 스터디</p>
              <div class="owl-stage">
                <div v-if="studyIlike.length == 0">
                  <p>좋아요한 스터디가 없습니다.</p>
                </div>
                <div v-else>
                  <div
                    class="owl-item"
                    style="width: 33.3%"
                    v-for="study in studyIlike"
                    :key="study.studyId"
                  >
                    <div class="event-item">
                      <Img :content="study.thumb"
                           class="img-fluid border"
                      />
                      <p class="event-title">
                        {{ study.title }}
                      </p>
                      <p class="event-content">
                        {{ study.onOff === "ON_OFF" ? "[온라인]" : "" }}[{{
                          study.location
                        }}]({{ study.curMembersSize }}/{{
                          study.memberUpperLimit
                        }})({{ study.studyStartDate }}~{{ study.studyEndDate }})
                      </p>
                      <div>
                        <button @click="() => BtnMemberList(study.studyId)">
                          참여자현황
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="owl-nav">
                <button
                  type="button"
                  role="presentation"
                  class="owl-prev"
                  v-if="likePg !== 0"
                  @click="BtnPrevILike"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-left text-primary"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </div>
                </button>
                <button
                  type="button"
                  role="presentation"
                  class="owl-next"
                  v-if="likeSize === 3"
                  @click="BtnNextILike"
                >
                  <div class="owl-nav-wrapper bg-soft-primary">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="feather feather-chevron-right text-primary"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style></style>
