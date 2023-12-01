<script setup>
import {onMounted, ref,watch} from "vue";
  import {searchStudy} from "@/utils/fetch/studyFetch";
import {useRouter} from "vue-router";
import StudyCard from "@/components/molecules/study/list/card/StudyCard.vue";
import Paging from "@/components/molecules/study/list/Paging.vue";
import {useCateStore} from "@/stores/cateStore";
import SmallCateBtn from "@/components/molecules/study/list/SmallCateBtn.vue";
const router = useRouter();
  const props = defineProps({
    middleCateId : Number,
    smallCateIds : Number
  });
  const curKey = ref({
    major: "",
    middle: ""
  })
const isFirstFetched = ref(false);
const dataFetchFlag = ref(0);
  const searchCond = ref({
    middleCateId: props.middleCateId,
    smallCateIds: isNaN(props.smallCateIds) || props.smallCateIds === null? new Set([]) : new Set([props.smallCateIds]) ,
    page: null,
    title: null,
    sort: null
  })
const pageData = ref({});
const cateStore = useCateStore();
const smallCates = ref(null)

const onSearchCondUpdateHandler = async ()=>{
    pageData.value = null;
    pageData.value = await searchStudy(searchCond.value)
}
watch(dataFetchFlag,onSearchCondUpdateHandler)
const onPagingHandler = (num)=>{
  isFirstFetched.value = false;
  let tmp = JSON.parse(JSON.stringify(searchCond.value)); // 재할당
  searchCond.value = null;
  searchCond.value = tmp;
  searchCond.value.page = num;
  console.log(searchCond.value, dataFetchFlag.value,pageData.value)
}
const findMatchingKey = (targetMajor,targetMiddle) => {
  let majorKeys = Object.keys(cateStore.getCate());
  for (const majorKey of majorKeys) { // javascript Array 순회는 for ... of
    let keySet = majorKey.split(" ");
    if (keySet[keySet.length-1] === targetMajor) {
      curKey.value.major = majorKey;
      break;
    }
  }
  let middleKeys = Object.keys(cateStore.getCate()[curKey.value.major]);
  for (const middleKey of middleKeys) {
    let keySet = middleKey.split(" ");
    if (keySet[keySet.length-1] === targetMiddle) {
      curKey.value.middle = middleKey;
      break;
    }
  }
};
const extractIdFromKeySet = (smallKeySet) => {
  let keyList = smallKeySet.split(" ");
  return keyList[keyList.length - 1];
};
const toggleSmallKeyIdFromSet = (rawSmallKey) => {
  let targetSmallId = extractIdFromKeySet(rawSmallKey);
  if (searchCond.value['smallCateIds'].has(targetSmallId)) {
    searchCond.value['smallCateIds'].delete(rawSmallKey);
  }else{
    searchCond.value['smallCateIds'].add(rawSmallKey);
  }
  dataFetchFlag.value++;
  console.log(searchCond.value);
};
onMounted(async ()=>{
  console.log('내가 요청하는 params',searchCond.value)
  pageData.value = await searchStudy(searchCond.value);
  isFirstFetched.value = true;
  console.log(cateStore.globalCate)
  findMatchingKey('1',String(props.middleCateId))
  smallCates.value = cateStore.globalCate[curKey.value.major][curKey.value.middle]
})
</script>

<template>
  <div class="grid-container">
    <div class="filter-container">
      <div class="small-cate-wrapper">
        <SmallCateBtn v-for="smallKey in smallCates" :small-cate-key="smallKey"
                      @click="toggleSmallKeyIdFromSet(smallKey)"
        />
      </div>
    </div>
    <div v-if="pageData===null">로딩중...</div>
    <div v-else v-for="data in pageData.content">
      <StudyCard :study-info="data"/>
    </div>
    <div class="paging-container">
      <div class="paging-wrapper" @click="dataFetchFlag++" >
        <Paging v-for="num in pageData.totalPages" :pg="num"
        @click="onPagingHandler(num)"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .grid-container{
    display:grid;
    grid-gap: 20px 10px;
    grid-template-columns: repeat(4, minmax(220px, 250px));
    grid-auto-flow: row;
    place-content: start center;
  }
  .filter-container{
    margin-top: 30px;
    grid-column: span 4;
  }
  .paging-container {
    grid-column: span 4;
    margin: 20px 0px;
    place-items: center center;
    gap: 10px;
  }
  .paging-wrapper {
    display: flex;
    justify-content: center;
    gap: 3px;
  }
  .small-cate-wrapper{
    display: flex;
    gap: 5px;
    font-weight: lighter;
  }
</style>