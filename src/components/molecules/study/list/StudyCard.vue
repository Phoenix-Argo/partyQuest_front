<script setup>
import {onMounted, ref} from "vue";
import {URLCONST} from "@/constants/APIconst";
import Img from "@/components/molecules/common/Img.vue";
import IconHeart from "@/components/icons/IconHeart.vue";
import {useRouter} from "vue-router";
import StudyCateContainer from "@/components/molecules/study/list/StudyCateContainer.vue";
import Location from "@/components/icons/Location.vue";

const props = defineProps({
  studyInfo: Object
});
const localStudyInfo = ref(props.studyInfo);
const cardBackMsg = ref(String('"'+'모집인원 '+props.studyInfo.curMemberNum + "/" + props.studyInfo.limitMemberNum+'"'))

const router = useRouter();
  const onCardClickHandler = ()=>{
    router.push('/studyView/' + localStudyInfo.value.studyId);
  }
  onMounted(()=>{
    console.log("hello child")
  })
</script>

<template>
  <div class="study-card" @click="onCardClickHandler">
    <div class="study-card-thumb">
      <Img :content="studyInfo.thumb" />
    </div>
    <div class="study-card-content">
      <div class="study-card-title">{{localStudyInfo.title}}</div>
      <div class="study-card-host">{{localStudyInfo.hostName}}</div>
      <div><Location/> {{localStudyInfo.location}}</div>
      <div>{{localStudyInfo.studyStartAt}} ~ {{localStudyInfo.studyEndAt}}</div>
      <StudyCateContainer :cate-list="localStudyInfo.middlecates" cate-kind="middle"/>
      <StudyCateContainer :cate-list="localStudyInfo.smallcates" cate-kind="small"/>
      <div><IconHeart/> {{localStudyInfo.likeCnt}}</div>
    </div>
  </div>
</template>

<style scoped>
  .study-card{
    max-width: 240px;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .study-card-thumb img{
    width: 100%;
    aspect-ratio: 3/2;
    object-fit: fill;
    display: block;
  }
  .study-card-content{
    padding-left: 2px;
    font-weight: normal;
  }
  .study-card-title{
    width:100%;
    overflow-x: auto;
    font-weight: bold;
    font-size: larger;
  }
  .study-card-host{
    width:100%;
    overflow-x: auto;
    font-weight: lighter;
    font-size: medium;
  }
  .study-card:hover::after {
    cursor: pointer;
    background-color: black;
    opacity: 0.8;
    width: 100%;
    height: 100%;
    content: v-bind(cardBackMsg);
    color: white;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>