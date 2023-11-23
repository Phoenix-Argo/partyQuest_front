<script setup>
import {onMounted, ref} from "vue";
import {URLCONST} from "@/constants/APIconst";
import Img from "@/components/molecules/common/Img.vue";
  const localStudyInfo = ref({
  })
  const props = defineProps({
    studyInfo: Object
  })
  onMounted(()=>{
    console.log("hello child")
    localStudyInfo.value = props.studyInfo;
  })
</script>

<template>
  <div class="study-card">
    <div class="study-card-thumb">
      <Img :content="studyInfo.thumb" />
    </div>
    <div class="study-card-content">
      <div>{{localStudyInfo.title}}</div>
    </div>
  </div>
</template>

<style scoped>
  .study-card{
    max-width: 400px;
  }
  .study-card-thumb img{
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: fill;
    display: block;
  }
</style>