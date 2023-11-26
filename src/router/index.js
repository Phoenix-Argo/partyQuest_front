import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Profile from "@/components/molecules/member/Profile.vue";
import Register from "@/components/molecules/member/Register.vue";
import Login from "@/components/molecules/member/Login.vue";
import WaitingList from "@/components/molecules/member/WaitingList.vue";
import StudyView from "@/components/molecules/study/StudyView.vue";
import StudyView2 from "@/components/molecules/study/StudyView2.vue";
import createStudy from "@/components/molecules/study/CreateStudy.vue";
import ModifyStudy from "@/components/molecules/study/ModifyStudy.vue";
import TermsServicePolicy from "@/components/molecules/member/terms/TermsServicePolicy.vue";
import PrivacyPolicy from "@/components/molecules/member/terms/PrivacyPolicy.vue";
import PaymentPolicy from "@/components/molecules/member/terms/PaymentPolicy.vue";
import DongHanPlayGround from "@/pages/sandbox/DongHanPlayGround.vue";
import NoticeList from "@/components/molecules/board/NoticeList.vue";
import FaqList from "@/components/molecules/board/FaqList.vue";
import CommunityList from "@/components/molecules/board/CommunityList.vue";
import MyStudyPage from "@/components/molecules/member/MyStudyPage.vue";

// router 인스턴스 생성
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Main },
    { path: "/index", component: Main },
    { path: "/profile", component: Profile },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/waitingList/:hostId", component: WaitingList },
    { path: "/studyView/:studyId", component: StudyView },
    { path: "/studyView2", component: StudyView2 },
    { path: "/createStudy", component: createStudy }, // 대문자 안됨
    { path: "/modifyStudy/:studyId", component: ModifyStudy },
    { path: "/termsServicePolicy", component: TermsServicePolicy },
    { path: "/privacyPolicy", component: PrivacyPolicy },
    { path: "/paymentPolicy", component: PaymentPolicy },
    { path: "/sandbox/donghan", component: DongHanPlayGround },
    { path: "/noticeList", component: NoticeList },
    { path: "/test-bed", component: DongHanPlayGround },
    { path: "/faqList", component: FaqList },
    { path: "/communityList", component: CommunityList },
    { path: "/myStudyPage", component: MyStudyPage },
  ],
});
// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
