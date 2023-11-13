import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/molecules/Main.vue";
import Profile from "../components/molecules/member/Profile.vue";
import Register from "../components/molecules/member/Register.vue";
import Login from "../components/molecules/member/Login.vue";
import WaitingList from "../components/molecules/member/WaitingList.vue";
import StudyView from "../components/molecules/study/StudyView.vue";
import createStudy from "../components/molecules/study/CreateStudy.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/index", component: Main },
    { path: "/profile", component: Profile },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/waitingList", component: WaitingList },
    { path: "/studyView", component: StudyView },
    { path: "/createStudy", component: createStudy }, // 대문자 안됨
  ],
});
// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
