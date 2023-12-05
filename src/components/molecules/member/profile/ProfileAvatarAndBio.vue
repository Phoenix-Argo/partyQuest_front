<script setup>

import ProfileImg from "@/components/atoms/member/profile/ProfileImg.vue";
import {ref} from "vue";
import ProfileFields from "@/components/atoms/member/profile/ProfileFields.vue";
const bio = ref("안녕하세요 선생님\n안녕 친구야")
</script>

<template>
  <div class="out-container">
    <div class="thumb-container">
      <ProfileImg/>
    </div>
    <div class="name-bio-container">
      <div class="name-div">닉네임</div>
      <div class="bio-div">{{bio}}</div>
    </div>
  </div>
</template>

<style scoped>
.out-container {
  display: flex;
  width: 100%;
}
.thumb-container {
  border-radius: 100%;
}
.thumb-container img{
  object-fit: fill;
  width: 8rem;
  height: 8rem;
}
.name-bio-container{
  padding-top: .5rem;
  padding-left: .4rem;
  height:8rem;
}
.name-div{
  font-size:2rem;
}
.bio-div{
  white-space: pre;
  color:dimgray;
}
</style>