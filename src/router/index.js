import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/molecules/Main.vue";
import Profile from "../components/molecules/Profile.vue";
import Register from "../components/molecules/Register.vue";
import createStudy from "../components/molecules/CreateStudy.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/index", component: Main },
    { path: "/profile", component: Profile },
    { path: "/register", component: Register },
    { path: "/createStudy", component: createStudy }, // 대문자 안됨
  ],
});
// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
