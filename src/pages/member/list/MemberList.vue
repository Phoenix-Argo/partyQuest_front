<script>
import {defineComponent} from "vue";
import IconSearch from "@/components/icons/IconSearch.vue";
import MemberBox from "@/components/molecules/member/list/listform/MemberBox.vue";

export default defineComponent({
  components: {MemberBox, IconSearch}
})
</script>
<template>
  <main class="grid-container">
    <div class="peopleSearchOption">
      <h1>
        <span class="smTxt">파티크루</span>
        <span class="bgTxt">파티원 찾기</span>
      </h1>
      <div class="peopleSearchOption">
        <div class="flex-container">
          <div class="optionWrap">
            <div class="dropdown1">drop1</div>
            <div class="dropdown2">drop2</div>
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
}
.memberGrid{
  display: grid;
  height:100vh;
  grid-template-columns: repeat(auto-fit, minmax(285px,1fr));
  grid-template-rows: repeat(4, 1fr);
  grid-column: 2 / 4;
  gap: 20px;
}
.smTxt {
  margin-top: 30px;
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
}

</style>
