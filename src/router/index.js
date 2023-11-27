import { createRouter, createWebHistory } from "vue-router";
import Main from "@/pages/Main.vue";
import Profile from "@/components/molecules/member/Profile.vue";
import Register from "@/components/molecules/member/Register.vue";
import Login from "@/components/molecules/member/Login.vue";
import WaitingList from "@/components/molecules/member/WaitingList.vue";
import StudyView from "@/components/molecules/study/StudyView.vue";
import createStudy from "@/components/molecules/study/CreateStudy.vue";
import ModifyStudy from "@/components/molecules/study/ModifyStudy.vue";
import TermsServicePolicy from "@/components/molecules/member/terms/TermsServicePolicy.vue";
import PrivacyPolicy from "@/components/molecules/member/terms/PrivacyPolicy.vue";
import PaymentPolicy from "@/components/molecules/member/terms/PaymentPolicy.vue";
import DongHanPlayGround from "@/pages/sandbox/DongHanPlayGround.vue";
import NoticeList from "@/components/molecules/board/NoticeList.vue";
import FaqList from "@/components/molecules/board/FaqList.vue";
import CommunityList from "@/components/molecules/board/CommunityList.vue";
import CommunityWrite from "@/components/molecules/board/CommunityWrite.vue";
import CommunityView from "@/components/molecules/board/CommunityView.vue";
import MyStudyPage from "@/components/molecules/member/MyStudyPage.vue";
import MyStudyMember from "@/components/molecules/member/MyStudyMember.vue";
import QnAList from "@/components/molecules/board/QnAList.vue";
import Aside from "@/components/molecules/admin/Aside.vue";

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
    { path: "/createStudy", component: createStudy },
    { path: "/modifyStudy/:studyId", component: ModifyStudy },
    { path: "/termsServicePolicy",name:'termsServicePolicy', component: TermsServicePolicy },
    { path: "/privacyPolicy", name:'privacyPolicy', component: PrivacyPolicy },
    { path: "/paymentPolicy", name:'paymentPolicy', component: PaymentPolicy },
    { path: "/sandbox/donghan", component: DongHanPlayGround },
    { path: "/noticeList", name:'noticeList', component: NoticeList },
    { path: "/test-bed", component: DongHanPlayGround },
    { path: "/faqList", name:'faqList', component: FaqList },
    { path: "/communityList", component: CommunityList },
    { path: "/communityView", component: CommunityView },
    { path: "/communityWrite", component: CommunityWrite},
    { path: "/qnAList", component: QnAList},
    { path: "/myStudyPage", component: MyStudyPage },
    { path: "/aside", component: Aside },
    { path: "/myStudyMember", component: MyStudyMember },
  ],
});
// router 인스턴스 내보내기 -> main.js 에서 등록
export default router;
