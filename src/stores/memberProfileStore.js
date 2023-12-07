import {defineStore} from "pinia";
import {ref} from "vue";

export const useProfileStore = defineStore('profileStore',()=>{
    const profileInfo =ref({
        thumb:'',
        newThumb:'',
        nickName:'',
        bio:'',
        preferredLocation: '부산특별시',
        mbti: 'INTJ',
        favoriteFields: new Set([]),
        favoriteTechs: new Set([]),
        links: {link1:'',link2:''},
    })
    const getProfileInfo = ()=>{
        return profileInfo;
    }
    const addField = (field)=>{
        profileInfo.value.favoriteFields.add(field);
    }
    const addTech = (tech)=>{
        profileInfo.value.favoriteTechs.add(tech);
    }
    const fetchProfile = async () => {

    };
    return {
        addField,addTech,getProfileInfo
    }
})