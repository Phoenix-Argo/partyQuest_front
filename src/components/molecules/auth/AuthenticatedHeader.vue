<template>
  <div class="d-flex dropdown">
    <div
      class="dropdown-toggle"
      id="head"
      data-bs-toggle="dropdown"
      aria-expanded="false"
    >
      <MemberAvatar :height="25" :width="25"/>
    </div>
    <ul class="dropdown-menu" aria-labelledby="head">
      <li class="member-greeting"><span class="member-nickName">{{member.nickName}}</span>님 안녕하세요</li>
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
import MemberAvatar from "@/components/icons/MemberAvatar.vue";

defineProps({
  member: Object,
});
let authStore = useAuthStore();
const authMenu = ref(["마이페이지", "마이스터디", "좋아요"]);
const router = useRouter();
const onClickHandler = async () => {
  await logout(authStore.accessToken)
      .catch(err => {
        if (err.response) {
          console.log(err.response);
        }
      });
  authStore.invalidateUser();
  router.forward("/index");
};

//authMenu 클릭시 이동하게 만드는 경로
const navigateToPage = (menu) => {
  // 각 메뉴에 대한 라우팅 경로를 설정
  let routePath = "/";
  switch (menu) {
    case "마이페이지":
      routePath = "/profile";
      break;
    case "마이스터디":
      routePath = "/myStudyPage";
      break;
    case "좋아요":
      routePath = "/likes";
      break;
  }

  // 페이지 이동
  router.push(routePath);
};
</script>

<style scoped>
.member-greeting{
  font-weight: lighter;
  padding-left: 3px;
}
.member-nickName {
  font-weight: bold;
  font-size: large;
  padding-left: 3px;
  margin-right: 2px;
}
</style>
