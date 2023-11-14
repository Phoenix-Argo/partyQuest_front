<script setup>
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/molecules/Header.vue";
import Footer from "./components/molecules/Footer.vue";
</script>

<template>
  <Header />
  <router-view></router-view>
  <Footer />
</template>

<style scoped></style>
