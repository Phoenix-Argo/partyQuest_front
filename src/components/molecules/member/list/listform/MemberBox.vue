<script setup>
import MemberLocationButton from "@/components/molecules/member/list/listform/MemberLocationButton.vue";
import IconNotice from "@/components/icons/IconNotice.vue";
</script>
<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <div class="card-info">
        <div class="card-avatar">
          <IconNotice></IconNotice>
        </div>
        <div class="card-nickName">Bella</div>
        <div class="card-role mb-2 text-body-secondary">운영자</div>
      </div>
      <div class="cate-container">
        <div class="middle-cate">1</div>
        <div class="small-cate">2</div>
      </div>
      <div class="card-mbti">ENFJ</div>
      <div class="location-container">
        <MemberLocationButton></MemberLocationButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, auto);
}
.card-avatar{
  grid-row-start: 1;
}
.card-nickName{
  grid-row-start: 2;
}
.cate-container{
  grid-row-start: 2;
}
.card-mbti{
  grid-row-start: 3;
}
.location-container{
  grid-row-start: 4;
}
.card-info{
  grid-column-start: 3;
  justify-content: end;
}
</style>
