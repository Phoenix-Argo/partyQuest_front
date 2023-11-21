<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/molecules/common/Header.vue";
import Footer from "./components/molecules/common/Footer.vue";
import axios from "axios";
import { reactive } from "vue";
import { ref } from "vue";
import router from "./router";

const studyId = ref("");
const studyIdBtn = async () => {
  try {
    // const response = await axios
    //   .get(`http://localhost:8080/api/study/studyView/${studyId.value}`)
    //   .then((response) => {
    //     console.log(studyId);
    //     console.log(studyId.value);
    //     console.log(response.data);
    //     studyId.value;
    //   });
    // page(front)만 이동, 파라미터를 서버로 넘기지는 않는다. -> studyViews에서 처리 예정
    router.push(`/studyView/${studyId.value}`);
  } catch (error) {
    console.error("Error fetching study data:", error);
  }
};
</script>

<template>
  <Header />
  <router-view></router-view>
  <input type="text" v-model="studyId" />
  <button @click="studyIdBtn" style="height: 30px; width: 100px">
    studyId전송!
  </button>
  <Footer />
</template>

<style scoped></style>
