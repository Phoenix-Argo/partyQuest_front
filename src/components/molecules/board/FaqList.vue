<script setup>
import AccordionItem from "@/components/molecules/board/AccordionItem.vue";
import IconQuestion from "@/components/icons/IconQuestion.vue";
import Tab from "@/components/molecules/board/Tab.vue";
</script>
<template>
  <main class>
    <section>
      <div class="container">
        <Tab></Tab>
        <p class="faq_heading">궁금한 점이 있으신가요? <br>먼저 아래의 자주 묻는 질문 FAQ 리스트를 확인 해주세요!</p>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <AccordionItem headingId="headingOne" collapseId="s" title="[로그인]  중복해서 가입되나요?" content="[로그인]  중복해서 가입되나요?"/>
        <AccordionItem headingId="flush-headingTwo" collapseId="flush-collapseTwo" title="[회원가입]  중복해서 가입되나요?" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingThree" collapseId="flush-collapseThree" title="[서비스]  중복해서 가입되나요?" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFour" collapseId="flush-collapseFour" title="[서비스]  중복해서 가입되나요?"  content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFive" collapseId="flush-collapseFive" title="[로그인]  중복해서 가입되나요?"  content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSix" collapseId="flush-collapseSix" title="[탈퇴]  중복해서 가입되나요?" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSeven" collapseId="flush-collapseSeven" title="[서비스]  중복해서 가입되나요?" content="이것은 컨텐츠입니다"/>
      </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
h1, h2, td, th, i, div, p, span{
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
.container {
  padding-top: 100px;
  padding-bottom: 200px;
}
.faq_heading{
  font-size: 1.2rem;
  padding: 2rem;
  display: block;
  text-align: center;
  font-weight: 500;
  margin-top: 10px;
  background-color: #fff;
}


</style>
