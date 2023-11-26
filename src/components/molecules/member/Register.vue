<script setup>
import {useAuthStore} from "@/stores/authStore";
import {getValidatedAxios} from "@/utils/globalAxios";
import { ref } from 'vue';
import {Form, Field, ErrorMessage} from 'vee-validate';
import {useRouter} from "vue-router";
import * as yup from 'yup';

/**
 * 유효성 검증에 사용된 라이브러리 : Vee-validate 4.0.0 & Yup
 * @type {Router}
 */
const router = useRouter();
const BASE_URL = "/api/member";
const { accessToken } = useAuthStore();
const myAxios = getValidatedAxios(accessToken);

const registerInfo = ref({
  name:"",
  email: "",
  password: "",
  phone:"",
})
const passwordConfirmation = ref('');
//////////////// 유효성 검증////////////////
const schema = yup.object({
  name: yup.string().required("이름을 입력해주십시오.").min(2, "이름은 최소 2자 이상이어야 합니다."),
  email: yup.string().required("이메일을 입력해주십시오.").email("올바른 이메일 형식이 아닙니다."),
  password: yup.string().required("비밀번호를 입력해주십시오.").matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, '비밀번호는 영문,숫자 혼합 최소 8자 이상이어야 합니다.'),
  passwordConfirmation: yup.string().required('비밀번호 확인은 필수 항목입니다.').oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.'),
  phone: yup.string().required('휴대폰 번호는 필수 항목입니다.').matches(/^\d{3}-\d{3,4}-\d{4}$/, '올바른 휴대폰 번호 형식이 아닙니다.'),
});

////////////////최종 전송 폼////////////////
const handlerSignUp = async () => {

  // TODO: 유효성 검증 통과 못하면 submit 못하도록 해야 하는데 그게 안된다...
  // TODO: 약관 체크할 시에 DB에 저장되는 컬럼도 있어야 할듯(광고동의 o/x)
  try {
    const response = await myAxios.post(BASE_URL+"/sign-up", registerInfo.value);
    if (response.status === 200) {
      alert("성공적으로 회원가입이 되었습니다.");
      router.push('/profile');
    } else {
      console.error('회원가입 실패', response.statusText);
    }
  } catch (error) {
    alert("유효하지 않은 정보입니다. 다시 확인 하십시오.");
    console.error('회원가입 중 에러가 생겼다', error);
  }
};

</script>
<template>
  <!-- Start Register -->
  <section class="section1">
    <div class="container py-5 d-flex justify-content-end" id="register" >
      <div class="row py-5" id="registerDiv">
        <Form class="col-md-9 m-auto" method="post" :validation-schema="schema">
          <section class="registerSec" id="registerSec">
            <label class="form-label">이름</label>
            <div id="txtBoxDiv">
              <Field
                  name="name"
                  type="text"
                  id="regiNameBox"
                  class="form-control"
                  v-model="registerInfo.name"
              />
              <ErrorMessage class="error-message" name="name"/>
            </div>
            <label class="form-label">이메일</label>
            <div id="txtBoxDiv">
              <Field
                  name="email"
                  type="text"
                  id="regiEmailBox"
                  class="form-control"
                  v-model="registerInfo.email"
              />
              <ErrorMessage class="error-message" name="email"/>
            </div>

            <label class="form-label">비밀번호</label>
            <div id="txtBoxDiv">
              <Field
                  name="password"
                  type="password"
                id="regiPassBox"
                class="form-control"
                v-model="registerInfo.password"
              />
              <ErrorMessage class="error-message" name="password"/>
            </div>
            <label class="form-label">비밀번호 확인</label>
            <div id="txtBoxDiv">
              <Field
                  name="passwordConfirmation"
                  type="password"
                  id="regiPassBox2"
                  class="form-control"
                  v-model="passwordConfirmation"
              />
              <ErrorMessage class="error-message" name="passwordConfirmation"/>
            </div>
            <label class="form-label">휴대폰 번호</label>
            <div id="txtBoxDiv">
              <Field
                  name="phone"
                  type="text"
                  id="regiPhoneBox"
                  class="form-control"
                  v-model="registerInfo.phone"
                  placeholder="- 를 포함하여 입력하십시오"
              />
              <ErrorMessage class="error-message" name="phone"/>
            </div>

            <hr />
            <div class="rowCreate d-flex justify-content-center">
              <div class="d-grid gap-2" id="createCharacter">
                <button class="btn btn-danger" type="button" @click="handlerSignUp">
                  캐릭터 생성
                </button>
              </div>
            </div>
            <section id="terms">
              <label class="form-label" id="registerTerm">
                가입 시, 통합 계정으로 파티퀘스트가 제공하는 서비스를 모두
                이용하실 수 있습니다.<br />
                <a>통합 계정</a> 및
                <routerLink to="/TermsServicePolicy" class="terms">서비스 이용약관</routerLink
                >,
                <routerLink to="PrivacyPolicy"  class="terms">개인정보처리방침</routerLink>에
                동의합니다.<br />
              </label>
              <div id="termsSpan" class="form-text">
                <input type="checkbox" /> 파티 퀘스트의 혜택 및 유용한 소식을
                받아볼래요.
              </div>
            </section>
            <hr class="sectionLine" />
            <section id="social">
              <div class="simpleRegister d-flex justify-content-center">
                <label class="form-label"> 간편 회원가입 </label>
              </div>
              <div class="d-flex justify-content-center">
                <a href="#"
                  ><img class="google" src="/img/Google_logo.png" alt="#"
                /></a>
                <a href="#"
                  ><img class="kakao" src="/img/kakaotalk_logo.png" alt="#"
                /></a>
              </div>
            </section>
          </section>
        </Form>
      </div>
      <hr class="sectionLine" />
    </div>
  </section>
  <!-- End register -->
</template>
<style scoped>
.terms {
  text-decoration: underline ;
  margin-right: -0.1px;
  margin-left: -2px;
}
.error-message {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}

</style>
