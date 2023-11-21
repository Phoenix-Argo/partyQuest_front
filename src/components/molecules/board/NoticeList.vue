<script setup>
import AccordionItem from "@/components/molecules/board/AccordionItem.vue";
import Banner from "@/components/molecules/board/Banner.vue";
import Tab from "@/components/molecules/board/Tab.vue";
</script>
<template>
  <main class>
    <section>
      <div class="container">
        <Tab></Tab>
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

.container {
  padding-top: 100px;
  padding-bottom: 100px;
}
.accordion{
  padding-top:30px;
}

</style>
