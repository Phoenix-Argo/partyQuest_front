import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

import { URLCONST } from "../consts/app.const";

export const useAuthStore = defineStore("authStore", () => {
  //state
  const user = ref({
    email: null,
    nickName: null,
    accessToken: null,
    refreshToken: null,
  });

  //actions
  const setUser = (newUser) => {
    user.value.user = newUser;
  };
  const setAccessToken = (newAccessToken) => {
    user.value.accessToken = newAccessToken;
  };
  const setRefreshToken = (newRefreshToken) => {
    user.value.refreshToken = newRefreshToken;
  };

  const login = (reqUser) => {
    return axios
      .post(URLCONST.LOGIN_URL, reqUser)
      .then((res) => {
        console.log(res.data);
        console.log(
          res.headers.authorization,
          jwtDecode(res.headers.authorization)
        );
        setUser(reqUser);
      })
      .catch();
  };

  //getters
  const getUser = () => user.value.user;
  const getAccessToken = () => user.value.accessToken;
  const getRefreshToken = () => user.value.refreshToken;

  return {
    user,
    setUser,
    setAccessToken,
    setRefreshToken,
    login,
    getUser,
    getAccessToken,
    getRefreshToken,
  };
});
