<script setup>
import AccordionItem from "@/components/molecules/cs/notice/AccordionItem.vue";
</script>
<template>
  <main class>
    <section class="community-header">
      <div class="community-header_content">
        <h2 class="community-header__title">파티퀘스트의 새로운 소식들!</h2>
        <p class="community-header__sub-title">
          신규 콘텐츠, 이벤트, 기능 추가 등의 새로운 파티퀘스트의 이야기를
          들어주세요.
        </p>
      </div>
    </section>
    <section>
      <div class="container">
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <AccordionItem headingId="headingOne" collapseId="s" title="Accordion Item #1" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingTwo" collapseId="flush-collapseTwo" title="Accordion Item #2" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingThree" collapseId="flush-collapseThree" title="Accordion Item #3" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFour" collapseId="flush-collapseFour" title="Accordion Item #4" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFive" collapseId="flush-collapseFive" title="Accordion Item #5" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSix" collapseId="flush-collapseSix" title="Accordion Item #6" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSeven" collapseId="flush-collapseSeven" title="Accordion Item #7" date="23-12-12" content="이것은 컨텐츠입니다"/>
      </div>
      </div>
    </section>
  </main>
</template>
<style scoped>
h1, h2, td, th, i, div, p{
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
.community-header{
  width: 100%;
  background-color: rgb(223, 80, 80, 0.4);
  padding: 0;

}
.community-header_content{
  margin: 0 auto;
  padding: 24px 32px;
  max-width: 1200px;
}
.community-header__title{
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  color: #fff;

}
.community-header__sub-title{
  margin-top: 4px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #fff;
}
.container {
  padding-top: 40px;
  padding-bottom: 40px;
}




</style>
