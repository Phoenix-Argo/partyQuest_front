<script setup>
import AccordionItem from "@/components/molecules/board/AccordionItem.vue";
import Tab from "@/components/molecules/board/Tab.vue";
import {useAuthStore} from "@/stores/authStore";
import {ref,onMounted} from "vue";
import {getValidatedAxios} from "@/utils/globalAxios";

const BASE_URL = "/api/cs";
const { user,accessToken } = useAuthStore();
const myAxios = getValidatedAxios(accessToken);

const boardListVar = ref({
  heading: "heading",
  collapse: "collapse"
})
const boards = ref([]);
const pg = ref(1);
const size = ref(10);
const boardList = ref([]);


const fetchData = async () => {
  const cate = "notice";
  try {
    const response = await myAxios.get(`${BASE_URL}/notice`,{
      params: {
        cate: cate,
        pg : pg.value,
        size : size.value,
      },
    });

    boards.value = response.data;
    pg.value = boards.value.pg;
    size.value = boards.value.size;
    console.log('Response:', response.data);
    console.log('pg value:', boards.value.pg);
    console.log('size value:', boards.value.size);

    console.log("NoticeData : " + boards.value);
    boardList.value = boards.value.content;
    console.log("BoardList data : ", boardList.value);
  } catch (err) {
    console.log(err);
  }
};
onMounted(fetchData);
const prevPage = () => {
  if (pg.value > 1) {
    pg.value--;
    fetchData();
    console.log('Current pg.value:', pg.value);
  }
};

const nextPage = () => {
  pg.value++;
  fetchData();
  console.log('Current pg.value:', pg.value);
};

const selectPage = (pageNumber) => {
  pg.value = pageNumber;
  fetchData();
  console.log('Current pg.value:', pg.value);
};
const getPageArray = () => {
  console.log('Current pg.value:', pg.value);
  console.log('Current size.value:', size.value);

  const countInPages = Math.ceil(pg.value / size.value);
  const pageArray = Array.from({ length: countInPages }, (_, index) => index + 1);

  console.log('Page Array:', pageArray); // Log the pageArray

  return pageArray;
};

</script>
<template>
  <main class>
    <section>
      <div class="container">
        <Tab></Tab>
        <div class="accordion accordion-flush" id="accordionFlushExample" v-for="(board) in boardList">
            <AccordionItem
                :key="board.boardId"
                :headingId="boardListVar.heading+board.boardId "
                :collapseId="boardListVar.collapse+board.boardId"
                :title="board.title"
                :date="board.rdate"
                :content="board.content"
            />
          </div>
        <div class="page">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item" :class="{ 'disabled': pg === 1 }">
                <a class="page-link" href="#" aria-label="Previous" @click="prevPage">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li class="page-item" v-for="page in getPageArray()" :key="page">
                <a class="page-link" href="#" @click="selectPage(page)">{{ page }}</a>
              </li>
              <li class="page-item" :class="{ 'disabled': !next }">
                <a class="page-link" href="#" aria-label="Next" @click="nextPage">
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
