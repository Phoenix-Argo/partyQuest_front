<script setup>
import axios from "axios";
import { onBeforeMount } from "vue";
import { onMounted } from "vue";
import { reactive } from "vue";
import { ref } from "vue";
import { useRoute } from "vue-router";

const BASE_URL = "http://localhost:8080/api/study";

// 라우터 인스턴스 가져오기
const route = useRoute();

// 서버 데이터
const studyView = ref([]);

//before mount 서버에 해당 id studyView json 요청
onBeforeMount(async () => {
  // 라우터 파라미터 수신
  const { studyId } = route.params;
  console.log("studyId : " + studyId);
  try {
    const response = await axios.get(BASE_URL + "/studyView/" + studyId);
    studyView.value = response.data;
    console.log("StudyViewData : " + studyView.value);
  } catch (err) {
    console.log(err);
  }
});
onMounted(onBeforeMount);
</script>
<template>
  <body>
    <div class="container py-5">
      <div class="row py-5">
        <div class="viewTitle">
          <div class="titleThumb" id="titleThumb">
            <!--{{ studyView.thumb }}-->
            <img src="http://placehold.it/400X300" alt="#" />
          </div>
          <div class="col-md-9 m-auto" id="hostProfile">
            <div id="hostPicture">
              {{ "hostThumb : " + studyView.avatar }}
              <img src="http://placehold.it/150X150" alt="#" id="myPicture" />

              <div id="hostNick" class="form-text">
                {{ studyView.hostNickName }}
              </div>
            </div>
            <div id="viewInfo">
              <label class="form-label" id="viewTitle">{{
                studyView.title
              }}</label>
              <a href="#">
                <path
                  d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                />
              </a>
            </div>
          </div>
          <div id="wantSkill" class="form-text">요구 기술 스택</div>
        </div>
        <!-- information -->
        <div class="infomation">
          <div class="contents">
            <p>{{ studyView.description }}</p>
            <img src="http://placehold.it/800X1000" alt="#" />
          </div>
          <div class="side-nav">
            <div class="description">
              <h6>상세정보</h6>
              <ul class="list-unstyled pb-3" id="studyInfo">
                <li>
                  참여인원 :
                  <ol>
                    <!--현재인원 / 총원-->
                    {{
                      studyView.curMembersSize
                    }}
                    /
                    {{
                      studyView.memberUpperLimit
                    }}
                  </ol>
                </li>
                <li>승인제 or 선착순</li>
                <ol v-if="studyView.recruitOption === 'PNP'">
                  승인제
                </ol>
                <ol v-else>
                  선착순
                </ol>
                <li>모임 기간</li>
                <ol>
                  {{
                    studyView.studyStartDate
                  }}~
                  {{
                    studyView.studyEndDate
                  }}
                </ol>
                <li>모임 장소</li>
                <ol>
                  부산광역시
                </ol>
              </ul>
              <div>
                <a href="#">✉</a>
                <a href="#">❤</a>
                <a href="#">🚨</a>
              </div>
              <button class="btn-accept">참가하기</button>
            </div>
          </div>
        </div>
        <!-- Start viewMemberProfile -->
        <hr class="sectionLine" />
        <section>
          <div class="row py-5">
            <label class="partyMemberIntroduce"> 파티원 소개 </label>
            <div class="col-md-9 m-auto" id="partyMemberMain">
              <div id="partyMemberPicture">
                <img src="http://placehold.it/150X150" alt="#" />
              </div>
              <div id="partyMemberProfileName">
                <label class="form-label" id="nickName">벨라리</label>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                    />
                  </svg>
                </a>
              </div>
              <div id="partyMemberProfileDetail" class="form-text">
                저는 백엔드 엔지니어를 꿈꾸고 있는 열정 넘치는 주니어
                개발자입니다
              </div>
            </div>
            <div class="col-md-9 m-auto" id="partyMemberMain">
              <div id="partyMemberPicture">
                <img src="http://placehold.it/150X150" alt="#" />
              </div>
              <div id="partyMemberProfileName">
                <label class="form-label" id="nickName">벨라리</label>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                    />
                  </svg>
                </a>
              </div>
              <div id="partyMemberProfileDetail" class="form-text">
                저는 백엔드 엔지니어를 꿈꾸고 있는 열정 넘치는 주니어
                개발자입니다
              </div>
            </div>
            <div class="col-md-9 m-auto" id="partyMemberMain">
              <div id="partyMemberPicture">
                <img src="http://placehold.it/150X150" alt="#" />
              </div>
              <div id="partyMemberProfileName">
                <label class="form-label" id="nickName">벨라리</label>
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-pencil-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"
                    />
                  </svg>
                </a>
              </div>
              <div id="partyMemberProfileDetail" class="form-text">
                저는 백엔드 엔지니어를 꿈꾸고 있는 열정 넘치는 주니어
                개발자입니다
              </div>
            </div>
          </div>
          <button type="button" id="moreViewBtn" class="btn btn-danger">
            더보기
          </button>
        </section>
        <!-- End viewMemberProfile Description -->
        <hr class="sectionLine" />
        <!-- 관련모임 -->
        <div class="container">
          <p>관련모임</p>
          <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
            <div class="col">
              <div class="card px-4 py-2">
                <div class="div1 row py-2 px-2">
                  <img src="http://placehold.it/400X300" alt="#" />
                </div>
                <div class="py-2">
                  <p id="desc">모임</p>
                  <div class="d-flex">
                    <button
                      class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                    >
                      바로가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- 위의 카드를 4번 복사하여 총 4개의 카드가 있는 행을 생성하세요 -->
            <div class="col">
              <div class="card px-4 py-2">
                <div class="div1 row py-2 px-2">
                  <img src="http://placehold.it/400X300" alt="#" />
                </div>
                <div class="py-2">
                  <p id="desc">모임</p>
                  <div class="d-flex">
                    <button
                      class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                    >
                      바로가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-4 py-2">
                <div class="div1 row py-2 px-2">
                  <img src="http://placehold.it/400X300" alt="#" />
                </div>
                <div class="py-2">
                  <p id="desc">모임</p>
                  <div class="d-flex">
                    <button
                      class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                    >
                      바로가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div class="card px-4 py-2">
                <div class="div1 row py-2 px-2">
                  <img src="http://placehold.it/400X300" alt="#" />
                </div>
                <div class="py-2">
                  <p id="desc">모임</p>
                  <div class="d-flex">
                    <button
                      class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                    >
                      바로가기
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style scoped></style>
