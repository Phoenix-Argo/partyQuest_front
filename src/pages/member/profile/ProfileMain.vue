<template>
  <div class="profile-container">
    <ProfileAside/>
    <div>

    </div>
  </div>
</template>

<script setup>
import ProfileAside from "@/components/molecules/member/profile/ProfileAside.vue";
</script>

<style scoped>
.profile-container {
  max-width: 75rem;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 4fr;
}
</style>