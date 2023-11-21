<template>
  <div class="d-flex dropdown">
    <div
      class="dropdown-toggle"
      id="head"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      {{ member.nickName }}
    </div>
    <ul class="dropdown-menu" aria-labelledby="head">
      <li v-for="menu in authMenu" class="dropdown-item">
        {{ menu }}
      </li>
      <li class="dropdown-divider"><hr /></li>
      <li>
        <button class="dropdown-item" @click="onClickHandler">로그아웃</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/authStore";
import { logout } from "@/utils/fetch/auth";
import { useRouter } from "vue-router";
import { axiValid } from "../../../utils/globalAxios";

defineProps({
  member: Object,
});
let authStore = useAuthStore();
const authMenu = ref(["마이페이지", "좋아요"]);
const router = useRouter();
const onClickHandler = async () => {
  await logout(authStore.accessToken);
  authStore.invalidateUser();
  router.forward("/index");
};
</script>

<style scoped></style>
