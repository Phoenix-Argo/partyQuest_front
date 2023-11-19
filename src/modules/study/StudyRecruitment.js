import { ref } from "vue";

export const useStudyRecruitment = () => {
  // 모집 방식토글(FCFS, PNP)
  const switchState = ref({ isPnp: false });

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

  return { switchState, member, increase, decrease };
};
