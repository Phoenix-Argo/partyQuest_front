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
const isFirstFetched = ref(false);
const dataFetchFlag = ref(0);
  const searchCond = ref({
    middleCateId: props.middleCateId,
    smallCateIds: isNaN(props.smallCateIds)? null : props.smallCateIds ,
    page: null,
    title: null,
    sort: null
  })
const pageData = ref({});
const cateStore = useCateStore();
const smallCates = ref(null)
  onMounted(async ()=>{
    console.log('내가 요청하는 params',searchCond.value)
    pageData.value = await searchStudy(searchCond.value);
    isFirstFetched.value = true;
    console.log(cateStore.globalCate)
    smallCates.value = cateStore.globalCate['프로그래밍 1'][`${props.middleCateId === 11 ? '프론트엔드 11' : '백엔드 12'}`]
  })
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
</script>

<template>
  <div class="grid-container">
    <div class="filter-container">
      <div class="small-cate-wrapper">
        <SmallCateBtn v-for="smallKey in smallCates" :small-cate-key="smallKey"
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