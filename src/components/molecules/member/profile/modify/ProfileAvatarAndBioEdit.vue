<script setup>

import ProfileImg from "@/components/atoms/member/profile/ProfileImg.vue";
import {ref} from "vue";
import ProfileFields from "@/components/atoms/member/profile/ProfileFields.vue";

let props = defineProps({
});
const AVATAR_NICKNAME=ref('')
const AVATAR_BIO=ref('')
let emit = defineEmits(['nickName', 'bio']);
emit('nickName',AVATAR_NICKNAME)
emit('bio',AVATAR_BIO)
</script>

<template>
  <div class="out-container">
    <div class="thumb-container">
      <ProfileImg/>
    </div>
    <div class="name-bio-container">
      <div class="name-div">
        <input type="text" v-model="AVATAR_NICKNAME"/>
      </div>
      <div class="bio-fluid-container">
        <textarea v-model="AVATAR_BIO" />
        <div class="bio-div">{{}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.out-container {
  display: flex;
  width: 100%;
  .thumb-container{
    border-radius: 100%;
    img{
      object-fit: fill;
      width: 8rem;
      height: 8rem;
    }
  }
  .name-bio-container{
    padding-top: .5rem;
    padding-left: .4rem;
    height:8rem;
    overflow-y:hidden;
    .name-div{
      font-size:2rem;
    }
    .bio-fluid-container{
      height: 4.5rem;
      overflow-y: scroll;
      .bio-div{
        white-space: pre;
        color:dimgray;
      }
    }
  }
}
</style>