<script setup>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";

const BASE_URL = "http://localhost:8080";
const hostId = ref("duki0105@gmail.com");
const pg = ref(0);

console.log(pg.value);
console.log(typeof pg.value);
const studyList = ref([]);

const size = ref(0);
console.log("size : " + size.value);

const findStudyMadeByMe = async () => {
  console.log("findStudyMadeByMe called. pg:", pg.value);
  const url = `${BASE_URL}/api/study/findStudyMadeByMe`;
  const StudyMyPageRequest = {
    hostId: hostId.value,
    pg: pg.value,
  };
  try {
    const response = await axios.post(url, StudyMyPageRequest, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    studyList.value = response.data;
    size.value = response.data.length;

    console.log(studyList.value);
    console.log("studyListSize : " + size);
    console.log("studyListSize.value : " + size.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};
onMounted(() => {
  console.log("Mounted. pg:", pg.value);
  findStudyMadeByMe();
});

const BtnNext = () => {
  alert("click");
  pg.value = pg.value + 3;
  console.log(pg.value);
  findStudyMadeByMe();
};
const BtnPrev = () => {
  alert("이전 버튼 클릭");
  // 이전 버튼 클릭 시 pg 값을 3 감소시키고 데이터를 새로고침
  pg.value = pg.value - 3;
  console.log(pg.value);
  findStudyMadeByMe();
};
</script>

<template>
  <h4>MyPage</h4>
  <div>
    <div v-for="study in studyList" :key="study.studyId">
      <table class="table table-bordered">
        <thead>
          <tr>
            <th>스터디Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ study.studyId }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <button v-if="pg !== 0" @click="BtnPrev">이전</button>
    <button v-if="size === 3" @click="BtnNext">다음</button>
  </div>
</template>
<style></style>
