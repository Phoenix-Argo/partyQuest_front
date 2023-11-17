<script setup>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";

const BASE_URL = "http://localhost:8080";

const hostIdRequest = ref({ hostId: 52 });
const studyWaitingList = ref([]);
const findWaitingList = async () => {
  try {
    const response = await axios.post(
      BASE_URL + `/api/study/studyWaitingListMadeByMe`,
      hostIdRequest.value
    );
    studyWaitingList.value = response.data;
    console.log("responseData : ", studyWaitingList.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};
onMounted(findWaitingList);
</script>
<template>
  <section class="container py-9" style="min-height: 1050px">
    <div class="row text-left pt-3">
      <div class="container mt-5">
        <p id="title1">참여자 대기명단</p>
        <div v-for="waitingList in studyWaitingList" :key="waitingList.studyId">
          <p>
            [{{ waitingList.title }}][{{ waitingList.location }}]({{
              waitingList.curMembersSize
            }}/{{ memberUpperLimit }})
          </p>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr class="text-center">
              <th>선택</th>
              <th>참가자</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center" v-for="member in waitingList">
              <td><input type="checkbox" /></td>
              <td>{{ member.memberName }}</td>
              <td>
                <a href="#">승낙</a>
                <a href="#">거절</a>
              </td>
            </tr>
            <tr class="text-center">
              <td><input type="checkbox" /></td>
              <td>보리</td>
              <td>
                <a href="#">승낙</a>
              </td>
            </tr>
            <tr class="text-center">
              <td><input type="checkbox" /></td>
              <td>동일</td>
              <td>
                <a href="#">거절</a>
              </td>
            </tr>
          </tbody>
        </table>
        <button>선택 거절</button>
        <button>선택 승낙</button>
        <div>
          <p>[모임2][모임장소](현재인원/최대정원)</p>
        </div>
        <table class="table table-bordered">
          <thead>
            <tr class="text-center">
              <th>선택</th>
              <th>참가자</th>
              <th>상태</th>
            </tr>
          </thead>
          <tbody>
            <tr class="text-center">
              <td><input type="checkbox" /></td>
              <td>비아</td>
              <td>
                <a href="#">승낙</a>
                <a href="#">거절</a>
              </td>
            </tr>
            <tr class="text-center">
              <td><input type="checkbox" /></td>
              <td>보리</td>
              <td>
                <a href="#">승낙</a>
              </td>
            </tr>
            <tr class="text-center">
              <td><input type="checkbox" /></td>
              <td>동일</td>
              <td>
                <a href="#">거절</a>
              </td>
            </tr>
          </tbody>
        </table>
        <button>선택 거절</button>
        <button>선택 승낙</button>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
