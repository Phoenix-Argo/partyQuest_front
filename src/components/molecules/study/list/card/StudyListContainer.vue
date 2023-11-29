<script setup>
import StudyCard from "@/components/molecules/study/list/card/StudyCard.vue";

const props = defineProps({
  studies: Array,
  title: String
});
</script>

<template>
  <div class="my-container">
    <div class="container-title">{{props.title}}</div>
    <div class="study-list-carousel">
      <div v-for="study in props.studies" class="study-iter">
        <StudyCard :studyInfo="study"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-container {
  width: 90vw;
}
  .container-title {
    padding-top: 20px;
    font-size: 20px;
    margin-bottom: 10px;

  }
  .study-list-carousel {
    max-width: 100%;
    display: inline-flex;
    justify-content: flex-start;
    overflow-x: scroll;
    gap: 0px 5px;
  }
  .study-iter {
    flex: 1 1 0;
  }
</style>