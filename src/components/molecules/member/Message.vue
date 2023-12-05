<template>
  <div>
    <p>message</p>
  </div>
</template>

<script setup>
import {useAuthStore} from "@/stores/authStore";
import { onMounted, ref} from "vue";
import axios from "axios";
import {useMessageStore} from "@/stores/messageStore";


const BASE_URL = "http://localhost:8080";
const {user , accessToken} = useAuthStore();
const memberId = ref(user.email);
const messageList = ref([]);
const messageStore = useMessageStore();

const findMessageList = async () =>{
  const url = `${BASE_URL}/api/member/findMessageList/${memberId.value}`;
  try{
    const response = await axios.get(url);
    messageList.value = response.data;
    console.log("messageList :",messageList.value);
  }catch (error){
    console.error("error : "+JSON.stringify(error));
  }
}

onMounted(async () => {
  await findMessageList();
  await messageStore.findUnreadMessage(memberId.value);
  // 스토어에 값을 저장
  messageStore.unReadMessageSize = messageStore.unReadMessageSize;
});



</script>

<style lang="scss" scoped>

</style>