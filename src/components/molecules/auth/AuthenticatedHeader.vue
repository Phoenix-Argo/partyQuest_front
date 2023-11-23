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
      <li v-for="menu in authMenu" :key="menu" class="dropdown-item">
        <button class="dropdown-item" @click="navigateToPage(menu)">
          {{ menu }}
        </button>
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
const authMenu = ref(["마이페이지", "마이스터디", "좋아요"]);
const router = useRouter();
const onClickHandler = async () => {
  await logout(authStore.accessToken);
  authStore.invalidateUser();
  router.forward("/index");
};

//authMenu 클릭시 이동하게 만드는 경로
const navigateToPage = (menu) => {
  // 각 메뉴에 대한 라우팅 경로를 설정
  let routePath = "/";
  switch (menu) {
    case "마이페이지":
      routePath = "/mypage";
      alert("마이페이지 클릭" + routePath);
      break;
    case "마이스터디":
      routePath = "/myStudyPage";
      alert("마이스터디 클릭" + routePath);
      break;
    case "좋아요":
      routePath = "/likes";
      alert("좋아요 클릭" + routePath);
      break;
  }

  // 페이지 이동
  router.push(routePath);
};
</script>

<style scoped></style>
