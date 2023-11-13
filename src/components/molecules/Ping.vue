<template>
  <button class="btn btn-outline-primary" @click="ping">ping</button>
</template>

<script setup>
import axios from "axios";

const ping = () => {
  const BASE_URL = "http://localhost:8080";
  axios.get(BASE_URL + "/api/ping").then((res) => console.log(res));
};
</script>

<style lang="scss" scoped></style>
