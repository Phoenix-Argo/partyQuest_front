<script setup>
import {fetchCates} from "@/utils/fetch/cateFetch";
import {onMounted, ref} from "vue";

let props = defineProps({
  selectType: String,
  memberMiddles : Array,
  memberSmalls : Array
});
const cates = ref({});
const major = ref({curMajor: 'none', majors: []});
const middle = ref({ curMiddle: "none", middles: [] });
const small = ref({ curSmall: "", smalls: [] });
//밑에 두개의 필드는 유저 프로필로 부터 받아와야한다.
const selectedMiddles = ref(new Set(props.memberMiddles)); // props 전달되지 않으면 undefined로 온다.
const selectedSmalls = ref(new Set([props.memberSmalls]));

const onMajorChange = (e) => {
  const selectedMajor = e.target.value.trim();
  major.value.curMajor = selectedMajor;
  middle.value.middles = Object.keys(cates.value[selectedMajor]);
  console.log(middle.value)
};

const onMiddleChange = (e) => {
  const curMiddle = e.target.value.trim();
  middle.value.curMiddle = curMiddle;
  selectedMiddles.value.add(curMiddle);
  small.value.smalls =
      cates.value[major.value.curMajor][middle.value.curMiddle];
  console.log('cur small',small.value.smalls)
};
const onSmallSelected = (curSmall) => {
  small.value.curSmall = curSmall;
  selectedSmalls.value.add(curSmall);
};

onMounted(async ()=>{
  let {fetchedCates,fetchedMajor} = await fetchCates();
  cates.value = fetchedCates;
  major.value = fetchedMajor;
  console.log(cates.value)
})
</script>

<template>
<div class="select-container">
  <select @change="onMajorChange">
    <option value="none">=== 선택 ===</option>
    <option v-for="cateKey in Object.keys(cates)" :value="cateKey">
      {{cateKey}}
    </option>
  </select>
  <select v-if="major.curMajor!=='none'" @change="onMiddleChange">
    <option value="none">=== 선택 ===</option>
    <option v-for="middle in middle.middles" :value="middle">
      {{middle}}
    </option>
  </select>
  <select v-if="props.selectType === 'small' && major.curMajor !=='none' && middle.curMiddle!=='none'" @change="onSmallSelected">
    <option v-for="small in small.smalls" :value="small">
      {{small}}
    </option>
  </select>
</div>
</template>

<style scoped>
.select-container{
  display:flex;
}
</style>