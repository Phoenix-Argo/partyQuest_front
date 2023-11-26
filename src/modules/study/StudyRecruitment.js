import { ref } from "vue";

export const useStudyRecruitment = () => {
  // 모집 방식토글(FCFS, PNP)
  let switchState = ref({ isPnp: false });

  // 토글 정보
  const handleToggleChange = (selectModifyStudy) => {
    if (selectModifyStudy.recruitOption == "PNP") {
      return (switchState = ref({ isPnp: true }));
    }
    if (selectModifyStudy.recruitOption == "FCFS") {
      return (switchState = ref({ isPnp: false }));
    }
  };
  // 파티원수
  const member = ref(1);
  const increase = () => {
    if (member.value < 30) {
      member.value++;
    }
  };
  const decrease = () => {
    if (member.value > 1) {
      member.value--;
    }
  };

  const modifyIncrease = (selectModifyStudy) => {
    if (selectModifyStudy.memberUpperLimit < 30) {
      //updateMember++;
      selectModifyStudy.memberUpperLimit++;

      console.log("count1 : ");
    }
  };
  const modifyDecrease = (selectModifyStudy) => {
    if (selectModifyStudy.memberUpperLimit > 1) {
      selectModifyStudy.memberUpperLimit--;
      console.log("count2 : ");
    }
  };

  return {
    switchState,
    handleToggleChange,
    member,
    increase,
    decrease,
    modifyIncrease,
    modifyDecrease,
  };
};
