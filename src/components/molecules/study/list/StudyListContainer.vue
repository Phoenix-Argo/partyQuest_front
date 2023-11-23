<script setup>
import StudyCard from "@/components/molecules/study/list/StudyCard.vue";

const props = defineProps({
  studies: Array,
  title: String
});
</script>

<template>
  <div>{{props.title}}</div>
  <div class="study-list-carousel">
    <div v-for="study in props.studies">
      <StudyCard :studyInfo="study"/>
    </div>
  </div>
</template>

<style scoped>
  .study-list-carousel{
    display: flex;
    overflow-x: auto;
  }
</style>