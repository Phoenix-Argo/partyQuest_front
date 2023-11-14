<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/molecules/Header.vue";
import Footer from "./components/molecules/Footer.vue";
</script>

<template>
  <Header />
  <router-link to="/index"></router-link>
  <router-link to="/profile"></router-link>
  <router-link to="/register"></router-link>
  <router-link to="/login"></router-link>
  <router-link to="/waitingList"></router-link>
  <router-link to="/studyView"></router-link>
  <router-link to="/createStudy"></router-link>
  <router-link to="/termsServicePolicy"></router-link>
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
