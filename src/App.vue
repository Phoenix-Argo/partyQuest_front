<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/molecules/Header.vue";
import Footer from "./components/molecules/Footer.vue";
import axios from "axios";
import { reactive } from "vue";
import { ref } from "vue";
import router from "./router";

const studyId = ref("");
const studyIdBtn = async () => {
  try {
    router.push(`/studyView/${studyId.value}`);
  } catch (error) {
    console.error("Error fetching study data:", error);
  }
};

const modifyStudyIdBtn = async () => {
  try {
    router.push(`/modifyStudy/${studyId.value}`);
  } catch (error) {
    console.error("error fetching modifyStudy data : ", error);
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
  <button @click="modifyStudyIdBtn" style="height: 30px; width: 100px">
    수정studyId전송!
  </button>
  <Footer />
</template>

<style scoped></style>
