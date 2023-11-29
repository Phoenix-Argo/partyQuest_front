<script setup>
import router from "../router";
import Carousel from "@/components/molecules/common/Carousel.vue";
import StudyListContainer from "@/components/molecules/study/list/card/StudyListContainer.vue";
import {getStudies} from "@/utils/fetch/studyFetch";
import {onMounted, ref} from "vue";

let btnDetail = function () {
  router.push("/studyView");
};
const studyLists = ref({
  'createdAt' : [],
  'likeCnt': []
})
let getStudyList = async (sort) => {
  return await getStudies(sort);
};

onMounted( async ()=>{
  studyLists.value.createdAt = await getStudies("createdAt");
  studyLists.value.likeCnt = await getStudies("likeCnt");
})
</script>

<template>
  <main>
    <Carousel/>

    <section class="container py-9">
      <p id="title1">STUDY WITH ME 📕</p>
      <StudyListContainer :studies="studyLists.likeCnt" title="HOT 모임 🔥"/>
      <StudyListContainer :studies="studyLists.createdAt" title="NEW 모임 ✨"/>
    </section>
    <!-- End Categories of The Month -->

    <!-- Start Featured Product -->
    <section class="bg-light">
      <div class="container py-5">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">공지사항</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >스터디룸도 파티퀘스트에서!</a
                >
                <p class="card-text">
                  파티퀘스트에서 이제 스터디룸 서비스를 제공합니다
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_2.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >두근두근! 겨울방학 공모전</a
                >
                <p class="card-text">공모전 시기가 왔어요</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_3.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >모임챌린지 제 1회 개최</a
                >
                <p class="card-text">모임챌린지가 시작되었습니다!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8 col-md-12 text-center">
          <button
            class="btn btn-outline-secondary d-inline-flex align-items-center"
            type="button"
            style="font-weight: bold"
          >
            &nbsp; 바로가기 >
            <svg class="bi ms-1" width="5" height="20">
              <use xlink:href="#arrow-right-short"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <!-- End Featured Product -->
  </main>
</template>

<style scoped></style>
