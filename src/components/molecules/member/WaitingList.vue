<script setup>
import { ref } from "vue";
import axios from "axios";
import { onMounted } from "vue";
import { reactive } from "vue";

const BASE_URL = "http://localhost:8080";

const hostId = ref(1);
const studyWaitingList = ref([]);
const findWaitingList = async () => {
  try {
    const response = await axios.get(
      BASE_URL + `/api/study/studyWaitingListMadeByMe/${hostId.value}`
    );
    studyWaitingList.value = response.data;
    console.log("responseData : ", studyWaitingList.value);
  } catch (error) {
    console.log("error : " + JSON.stringify(error));
  }
};
onMounted(findWaitingList);

const Btnapprove = async (hostId, memberId, studyId) => {
  alert("accepted");
  const url = BASE_URL+ "api/study/changeApplicationStatus";

  // StudyChangeApplicantStatusRequest에 데이터를 담음
  const StudyChangeApplicantStatusRequest = new FormData();
  StudyChangeApplicantStatusRequest.append("hostId", hostId);
  StudyChangeApplicantStatusRequest.append("applicantId", memberId);
  StudyChangeApplicantStatusRequest.append("studyId", studyId);
  StudyChangeApplicantStatusRequest.append("status", "ACCEPTED");

  try{
    const 
  }
};//BTN Approve END

const Btnreject = async () => {
  alert("Btnreject");
};
</script>
<template>
  <section class="container py-9" style="min-height: 1050px">
    <div class="row text-left pt-3">
      <div class="container mt-5">
        <div v-for="study in studyWaitingList" :key="study.studyId">
          <p id="title1">참여자 대기명단</p>
          <div>
            <p>
              [{{ study.title }}] [{{ study.location }}] ({{
                study.curMembersSize
              }}/{{ study.memberUpperLimit }})
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
            <tbody v-for="list in study.waitingList" :key="list.memberId">
              <tr class="text-center">
                <td><input type="checkbox" /></td>
                <td>{{ list.memberNickName }}</td>
                <td v-if="list.applicationStatus == 'PENDING'">
                  <button
                    @click="
                      Btnapprove(
                        list.memberId,
                        study.hostId,
                        study.studyId,
                        ACCEPTED
                      )
                    "
                    id="Btnapprove"
                  >
                    승인
                  </button>
                  <button
                    @click="
                      Btnreject(list.memberId, list.memberStudyId, REJECTED)
                    "
                    id="Btnreject"
                  >
                    거절
                  </button>
                </td>
                <td v-else-if="list.applicationStatus === 'ACCEPTED'">
                  <div id="approveStudy">승인</div>
                </td>
                <td v-else id="rejectStudy">
                  <div id="rejectStudy">거절</div>
                </td>
              </tr>
            </tbody>
          </table>
          <button>선택 거절</button>
          <button>선택 승낙</button>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
#Btnapprove {
  background-color: blue;
  color: white;
}
#Btnreject {
  background-color: red;
  color: black;
}
#approveStudy {
  color: blue;
}
#rejectStudy {
  color: red;
}
</style>
