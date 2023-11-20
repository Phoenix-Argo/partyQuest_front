import {defineStore} from "pinia";
import {jwtDecode} from "jwt-decode";
import {ref} from "vue";
import {AUTH_CONST} from "@/constants/authConst";

export const useAuthStore = defineStore("authStore",()=>{
        //state
        const user = ref({
            hostId:"",
            email:"",
            nickName:"",
            authorities:""
        });
        const accessToken = ref("");
        //setter
        const changeUser = (claims) => {
            user.value.hostId = claims["hostId"];
            user.value.email = claims["sub"];
            user.value.authorities = claims["authorities"];
            user.value.nickName = claims["nickname"];
        };
        //getter

        //util
        /**
         * rawAccessToken -> accessToken 처리하고
         * accessToken과 유저 정보를 영속화 한다.
         * @param accessToken : string
         */
        const accessTokenHandler = (rawAccessToken) => {
            let aJWT = rawAccessToken.slice(AUTH_CONST.AUTH_BEARER.length);
            let decode = jwtDecode(aJWT);
            changeUser(decode);
            accessToken.value = aJWT;
        };
        const invalidateUser = ()=>{
            accessToken.value = "";
            user.value = {};
        }
        return {
            user,accessToken,changeUser,accessTokenHandler,invalidateUser
        }
}
,{
        persist: true,
    }
    )