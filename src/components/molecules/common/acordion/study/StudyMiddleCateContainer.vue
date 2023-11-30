<template>
  <div class="middle-container">
    <div v-for="middleCate in Object.keys(middleCates)">
      <div class="accordion-menu" @click="onMiddleClickHandler(middleCate)" @mouseenter="curMiddle=middleCate">{{middleCate.split(" ").slice(0,-1).join(" ")}}</div>
    </div>
  </div>
  <StudySmallCateContainer v-if="curMiddle.length>0" :small-cates="middleCates[curMiddle]" :cur-middle-cate-id="getMiddleCateId(curMiddle)"/>
</template>

<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import StudySmallCateContainer from "@/components/molecules/common/acordion/study/StudySmallCateContainer.vue";

const router = useRouter();
const props = defineProps({
  middleCates : Object
});
const curMiddle = ref("")
const emit = defineEmits(['middle']);
emit('middle', curMiddle);

const onMiddleClickHandler = (middleCateKey) => {
  const STUDY_LIST_URL = "/studies/search"
  const splitted = middleCateKey.split(' ');
  const middleCateId = splitted[splitted.length - 1];

  router.push({path: STUDY_LIST_URL, query:{middleCateId : Number(middleCateId)}}).then(res=>router.go())
};
const getMiddleCateId = (middleCateKey) => {
  const splitted = middleCateKey.split(" ");
  return splitted[splitted.length - 1];
};
</script>

<style scoped>
.middle-container {
  position: relative;
  margin-top: 11px;
  width: 140px;
  height: 100%;
  background-color: white;
  border-width: 1px 1px 1px 0px;
  border-style: solid;
  border-color: lightgray;
  font-weight: lighter;
  font-size: small;
  padding-top: 15px;
  padding-left: 15px;
}
.accordion-menu:hover {
  color: #ce0f38;
}
</style>