import { ref } from "vue";

export const useStudyRecruitment = () => {
  // 모집 방식토글(FCFS, PNP)
  let switchState = ref({ isPnp: false });

  // 토글 정보
  const handleToggleChange = (selectModifyStudy) => {

    if (selectModifyStudy.recruitOption === "PNP") {
      console.log("toggle1:"+selectModifyStudy.recruitOption)
      return (switchState = ref({ isPnp: true }));
      // switchState.value.isPnp = true;
    }else if (selectModifyStudy.recruitOption === "FCFS") {
      console.log("toggle2:"+selectModifyStudy.recruitOption)
      return (switchState = ref({ isPnp: false }));
      // switchState.value.isPnp = false
    }
    console.log("switchState.isPnp: " + switchState.value.isPnp);
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
//
//   /* modify */
// // 서버에서 받은 초기 값
//   const initialRecruitOption = selectModifyStudy.recruitOption;
//
//   // 모집 방식 토글(FCFS, PNP)
//   let switchState = ref({ isPnp: initialRecruitOption === "PNP" });
//
//   // 초기화
//   const initializeToggle = () => {
//     // 서버에서 받은 값이 PNP이면 true, 그 외에는 false로 초기화
//     switchState.value.isPnp = initialRecruitOption === "PNP";
//   };
//
//   // 토글 정보
//   const handleToggleChange = () => {
//     // 클릭할 때마다 서버에 업데이트
//     const updatedRecruitOption = switchState.value.isPnp ? "PNP" : "FCFS";
//
//     // 여기서 서버에 updatedRecruitOption 값을 업데이트하는 로직을 추가하세요.
//     // 예를 들어, axios나 fetch 등을 사용하여 서버에 값을 보낼 수 있습니다.
//
//     console.log("Updated recruit option:", updatedRecruitOption);
//   };
//
//   // 초기화 함수 호출
//   initializeToggle();


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
