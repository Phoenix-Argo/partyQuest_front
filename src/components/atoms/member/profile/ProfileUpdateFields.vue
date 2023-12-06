<script setup>
import {ref} from "vue";
import HashTagDiv from "@/components/atoms/member/profile/HashTagDiv.vue";
import IconLink from "@/components/icons/IconLink.vue";
import ProfileSelectContainer from "@/components/molecules/member/profile/modify/ProfileSelectContainer.vue";

const profileFields = ref({
  favoriteLocations: ['서울특별시','부산광역시'],
  mbtis: ['INTP','INTJ','ENTP','ENTJ'],
  favoriteFields: ['백엔드 12','프론트엔드 11'],
  favoriteTechs: ['Spring boot 1201','JPA 1202','Vue 1101']
})
</script>

<template>
  <div class="profile-fields-container">
    <div class="profile-field-container">
      <div class="field-name-div">선호지역</div>
      <div class="field-content-div">
        <select name="currentLocation" >
          <option v-for="location in profileFields.favoriteLocations" :value="location">
            {{location}}
          </option>
        </select>
      </div>
    </div>
    <div class="profile-field-container">
      <div class="field-name-div">MBTI</div>
      <div class="field-content-div">
        <select name="currentMbti">
          <option v-for="mbti in profileFields.mbtis" :value="mbti">
            {{mbti}}
          </option>
        </select>
      </div>
    </div>
    <div class="profile-field-container-tech">
      <div class="fr1">
        <div class="field-name-div">나의 관심 분야 <ProfileSelectContainer select-type="middle"/></div>
        <div class="field-content-div">
          <HashTagDiv v-for="field in profileFields.favoriteFields" :value="field" color="white" background-color="#008B8B"/>
        </div>
      </div>
    </div>
    <div class="profile-field-container-tech">
      <div class="fr1">
        <div class="field-name-div">나의 관심 기술 <ProfileSelectContainer select-type="small"/></div>
        <div class="field-content-div">
          <HashTagDiv v-for="field in profileFields.favoriteTechs" :value="field" color="white" background-color="#1CAC78"/>
        </div>
      </div>
    </div>
    <div class="profile-field-container">
      <div class="field-name-div">포트폴리오/URL</div>
      <div class="field-content-div">
        <div>
          <IconLink/>
        </div>
        <div>
          <IconLink/>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-fields-container{
  padding-top: 1rem;
  padding-left:2rem;
}
.profile-field-container-tech{
  display:flex;
  border-top: solid 1px rgba(128, 128, 128, 0.5);
  margin-bottom: 1.5rem;
  padding-top: .3rem;
}
/*.fr1{*/
/*  flex*/
/*}*/
/*.fr2{*/

/*}*/
.profile-field-container{
  border-top: solid 1px rgba(128, 128, 128, 0.5);
  margin-bottom: 1.5rem;
  padding-top: .3rem;
}
.field-name-div{
  font-weight: 600;
  font-size:1.2rem;
  margin-bottom: .8rem;
  display:flex;
  gap: 1rem;
}
</style>