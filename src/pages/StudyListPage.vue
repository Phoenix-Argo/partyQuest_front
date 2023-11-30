<script setup>
import {onMounted, ref} from "vue";
  import {searchStudy} from "@/utils/fetch/studyFetch";
import {useRouter} from "vue-router";

const router = useRouter();
  const props = defineProps({
    middleCateId : Number,
    smallCateIds : Number
  });
  const middleId = ref(props.middleCateId);
  const smallIds = ref(props.smallCateIds);
  onMounted(async ()=>{
    let params = {};
    if (isNaN(smallIds.value) || props.smallCateIds === null) {
      params = {middleCateId: middleId.value}
    }else{
      params = {middleCateId: middleId.value, smallCateIds: smallIds.value};
    }
    console.log('내가 요청하는 params',params)
    await searchStudy(params);
  })
</script>

<template>
  <h1>Study list page</h1>
</template>

<style scoped>

</style>