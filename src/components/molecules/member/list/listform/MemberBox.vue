<script setup>
import MemberLocationButton from "@/components/molecules/member/list/listform/MemberLocationButton.vue";
import IconNotice from "@/components/icons/IconNotice.vue";
</script>
<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <div class="card-avatar">
        <img class= "avatar-img" src="img/profile_simple.png">
      </div>
      <div class="card-info dropdown">
        <div class="card-nickName dropbtn">Bella
          <div class="dropdown-content">
            <a>프로필 상세</a>
            <a>채팅 하기</a>
          </div>
        </div>
        <div class="card-role mb-2 text-body-secondary">운영자</div>
      </div>
      <div class="cate-container">
        <div class="middle-cate">1</div>
        <div class="small-cate">2</div>
      </div>
      <div class="card-mbti">ENFJ</div>
      <div class="location-container">
        <MemberLocationButton></MemberLocationButton>
      </div>
    </div>
  </div>
</template>
<style scoped>
.card-body {
  display: grid;
  grid-template-columns: auto repeat(2, 1fr);
  grid-template-rows: repeat(3, auto);
  grid-template-areas:
      "avatar avatar header"
      "cate cate cate"
      "mbti mbti mbti"
      "location location location";
  overflow: auto;
}
.card-avatar {
  grid-area: avatar;
}
.card-info {
  margin-top:8px;
  margin-right:8px;
  grid-area: header;
  text-align: right;
  position: relative;
}
.cate-container {
  grid-area: cate;
}
.card-mbti {
  grid-area: mbti;
}
.location-container {
  grid-area: location;
}
.avatar-img{
  width: 70px;
  margin-bottom:20px;
}

.dropbtn {
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.dropdown {
  display: inline-block;
}
.dropdown-content {
  display: none;
  background-color: #f9f9f9;
  min-width: 80px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  position: absolute;
  top: 100%;
  right: 0;
  text-align:center;
}

.dropdown-content a {
  color: black;
  padding:5px;
  text-decoration: none;
  display: block;
}
.dropdown-content a:hover {background-color: #f1f1f1}
.dropdown:hover .dropdown-content {
  display: block;
}
</style>
