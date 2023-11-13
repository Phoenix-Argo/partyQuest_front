import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/molecules/Main.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "", name: "Main", component: { default: Main } },
    { path: "/index", name: "Main", component: Main },
  ],
});

// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
