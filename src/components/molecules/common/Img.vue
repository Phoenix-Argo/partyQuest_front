<template>
  <img :src="srcURL" />
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  content: String,
});
const myContent = ref(props.content); // 얘를 감시해서 null 값일경우
const defaultImagePath = "/img/baseImg.png";

const srcURL =
  myContent.value == undefined
    ? defaultImagePath
    : import.meta.env.VITE_APP_BASE_RESOURCE_URL + myContent.value; // ref해야될거같음

//watcher 이용 !
onMounted(() => {
  console.log(srcURL);
  console.log(myContent.value);
});
</script>

<style lang="scss" scoped></style>
