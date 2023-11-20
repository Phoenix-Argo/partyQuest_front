import { createRouter, createWebHistory } from "vue-router";
import Main from "../components/molecules/Main.vue";
import Profile from "../components/molecules/member/Profile.vue";
import Register from "../components/molecules/member/Register.vue";
import Login from "../components/molecules/member/Login.vue";
import WaitingList from "../components/molecules/member/WaitingList.vue";
import StudyView from "../components/molecules/study/StudyView.vue";
import createStudy from "../components/molecules/study/CreateStudy.vue";
import TermsServicePolicy from "../components/molecules/member/terms/TermsServicePolicy.vue";
import PrivacyPolicy from "../components/molecules/member/terms/PrivacyPolicy.vue";
import PaymentPolicy from "../components/molecules/member/terms/PaymentPolicy.vue";
import DongHanPlayGround from "../pages/sandbox/DongHanPlayGround.vue";
import NoticeList from "../components/molecules/cs/notice/NoticeList.vue";

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
    { path: "/studyView/:studyId", component: StudyView },
    { path: "/createStudy", component: createStudy }, // 대문자 안됨
    { path: "/termsServicePolicy", component: TermsServicePolicy },
    { path: "/privacyPolicy", component: PrivacyPolicy },
    { path: "/paymentPolicy", component: PaymentPolicy },
    { path: "/sandbox/donghan", component: DongHanPlayGround },
    { path: "/noticeList", component: NoticeList },
  ],
});
// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
