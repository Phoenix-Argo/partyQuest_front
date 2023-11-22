<script setup>
import AccordionItem from "@/components/molecules/board/AccordionItem.vue";
import Tab from "@/components/molecules/board/Tab.vue";
import {useAuthStore} from "@/stores/authStore";
import axios from "axios";
import {ref,onMounted} from "vue";
import {getValidatedAxios} from "@/utils/globalAxios";

const BASE_URL = "/api/cs";
const { user,accessToken } = useAuthStore();
const myAxios = getValidatedAxios(accessToken);

const boards = ref([]);

onMounted(async () => {
  const cate = "notice";
  try {
    const response = await myAxios.get(`${BASE_URL}/notice/${cate}`);
    boards.value = response.data;
    console.log("StudyViewData : " + boards.value);
  } catch (err) {
    console.log(err);
  }
});

/*const getBoards = async () => {
  await axios({
    url: BASE_URL + "/api/cs/notice",
    method: "get",
    responseType: "json",
  }).then((response)=>{
    console.log(response.data())
  }).catch((err)=>{
    console.log(err)
  })
}*/

</script>
<template>
  <main class>
    <section>
      <div class="container">
        <Tab></Tab>
      <div class="accordion accordion-flush" id="accordionFlushExample" v-for = "board in boards">
        <AccordionItem headingId="1" collapseId="1" title="{{board.title}}" date="23-12-12" content="{{board.content}}"/>
        <AccordionItem headingId="flush-headingTwo" collapseId="flush-collapseTwo" title="Accordion Item #2" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingThree" collapseId="flush-collapseThree" title="Accordion Item #3" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFour" collapseId="flush-collapseFour" title="Accordion Item #4" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingFive" collapseId="flush-collapseFive" title="Accordion Item #5" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSix" collapseId="flush-collapseSix" title="Accordion Item #6" date="23-12-12" content="이것은 컨텐츠입니다"/>
        <AccordionItem headingId="flush-headingSeven" collapseId="flush-collapseSeven" title="Accordion Item #7" date="23-12-12" content="이것은 컨텐츠입니다"/>
      </div>
        <div class="page">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
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
.page{
  display: flex;
  justify-content: center;
}


</style>
