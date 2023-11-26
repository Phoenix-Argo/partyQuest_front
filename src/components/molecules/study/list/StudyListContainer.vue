<script setup>
import StudyCard from "@/components/molecules/study/list/StudyCard.vue";

const props = defineProps({
  studies: Array,
  title: String
});
</script>

<template>
  <div class="container-title">{{props.title}}</div>
  <div class="study-list-carousel">
    <div v-for="study in props.studies">
      <StudyCard :studyInfo="study"/>
    </div>
  </div>
</template>

<style scoped>
  .container-title {
    padding-top: 20px;
    font-size: 20px;
    margin-bottom: 10px;

  }
  .study-list-carousel {
    display: flex;
    overflow-x: auto;
    gap: 0px 5px;
  }
</style>