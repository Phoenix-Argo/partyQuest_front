<template>
  <img :src="srcURL" />
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";

const props = defineProps({
  content: String,
});
const myContent = ref(props.content); // 얘를 감시해서 null 값일경우

const srcURL = import.meta.env.VITE_APP_BASE_RESOURCE_URL + myContent.value; // ref해야될거같음
//watcher
onMounted(() => {
  console.log(srcURL);
  console.log(myContent.value);
});
</script>

<style lang="scss" scoped></style>
