<script setup>

import ProfileAvatarAndBio from "@/components/molecules/member/profile/view/ProfileAvatarAndBio.vue";
import ProfileFields from "@/components/atoms/member/profile/ProfileFields.vue";
import ProfileAvatarAndBioEdit from "@/components/molecules/member/profile/modify/ProfileAvatarAndBioEdit.vue";
import {useRouter} from "vue-router";
import {ref} from "vue";

const router = useRouter();
const props = defineProps({
  state: String
});
const updateRequest = ref({
  nickName: '',
  bio: '',
})

const onModifyBtnClick = ()=>{
  router.push('/profile/update');
}
</script>

<template>
  <div v-if="props.state === 'modify'" class="profile-main-container">
    <ProfileAvatarAndBioEdit
    @nick-name="nick=> updateRequest.nickName=nick"
    @bio = "bio=>updateRequest.bio=bio"
    />
    <ProfileFields/>
  </div>
  <div v-else class="profile-main-container">
    <ProfileAvatarAndBio/>
    <ProfileFields/>
    <div class="route-to-modify" @click="onModifyBtnClick">프로필 수정하기</div>
  </div>
</template>

<style scoped>
.profile-main-container{
  padding-left: 2rem;
}
.route-to-modify{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0.2rem 0.5rem;
  background: #3c4142;
  color: white;
  border-radius: 0.4rem;
  font-size: 1.2rem;
  margin-left: 2rem;
}
.route-to-modify:hover{
  cursor:pointer;
  background: dimgrey;
}
</style>