<script setup>
import { ref, defineProps } from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import MemberBox from "@/components/molecules/member/list/listform/MemberBox.vue";
import Banner from "@/components/molecules/board/Banner.vue";
import Paging from "@/components/molecules/study/list/Paging.vue";
import { useRouter } from "vue-router";

const router = useRouter();
const props = defineProps({
  middleCateId: Number,
  smallCateIds: Number,
  curMajorKeySet: String,
  curMiddleKeySet: String
});

const curKey = ref({
  major: "",
  middle: ""
});

</script>
<template>
  <Banner title="파티퀘스트에는 어떤 파티원들이 있을까요?" subTitle="다양한 파티원을 찾고, 직접 채팅까지!" />
  <main class="grid-container">
    <div class="peopleSearchOption">
      <h1>
        <span class="smTxt">파티크루</span>
        <span class="bgTxt">파티원 찾기</span>
      </h1>
      <div class="peopleSearchOption">
        <div class="flex-container">
          <div class="optionWrap">
            <select class="dropdown1">
              <option>지역</option>
              <option>온라인</option>
              <option>서울</option>
              <option>부산</option>
            </select>
            <select class="dropdown2">
              <option>관심 기술</option>
              <option>프론트</option>
              <option>백엔드</option>
            </select>
          </div>
          <div class="inputSearch">
            <input class="searchBox" type="text" placeholder="ex)닉네임, 상세 스킬명" maxlength="10">
            <button class="buttonComponents">
              <IconSearch></IconSearch>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="memberGrid">
      <MemberBox class="memberComponent"></MemberBox>
      <MemberBox class="memberComponent"></MemberBox>
      <MemberBox class="memberComponent"></MemberBox>
      <MemberBox class="memberComponent"></MemberBox>
    </div>
    <div class="paging-container">
      <div class="paging-wrapper">
        <Paging/>
      </div>
    </div>
  </main>
</template>
<style scoped>
.grid-container{
  display: grid;
  grid-gap: 20px 10px;
  grid-template-columns: repeat(4, 1fr);
}
.peopleSearchOption{
  grid-column: 2 / 3;
}
h1 span{
  display: block;
}
.flex-container{
  display: flex;
}

.optionWrap{
  text-align: center;
  display: flex;
}
.inputSearch {
  display: flex;
}
.dropdown1,
.dropdown2 {
  display: inline-block;
  margin-right: 10px;
  width: 100px;
  border: 1px solid darkgray;
}
.memberGrid{
  margin-bottom: 100px;
  display: grid;
  height:auto;
  grid-template-columns: repeat(auto-fit, minmax(285px,1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-column: 2 / 4;
  gap: 20px;
}
.smTxt {
  margin-top: 50px;
  margin-bottom: 4px;
  font-size: 18px;
  color: tomato;
}
.bgTxt{
  font-size: 32px;
}
.searchBox {
  border: 1px solid darkgray;
  border-radius: 2px;
  height: 35px;
  width: 250px;
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
</style>
