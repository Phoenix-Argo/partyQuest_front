<script setup>

import ProfileAvatarAndBio from "@/components/molecules/member/profile/ProfileAvatarAndBio.vue";
import ProfileFields from "@/components/atoms/member/profile/ProfileFields.vue";
</script>

<template>
  <div class="profile-main-container">
    <ProfileAvatarAndBio/>
    <ProfileFields/>
  </div>
</template>

<style scoped>
.profile-main-container{
  padding-left: 2rem;
}
</style>