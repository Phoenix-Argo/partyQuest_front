<script setup></script>
<style scoped></style>

<template>
  <!-- Start Register -->
  <section class="section1">
    <div class="container py-5 d-flex justify-content-end" id="register">
      <div class="row py-5" id="registerDiv">
        <form class="col-md-9 m-auto" method="post" role="form">
          <section class="registerSec" id="registerSec">
            <label class="form-label">이름</label>
            <div id="txtBoxDiv">
              <input
                type="txt"
                id="regiNameBox"
                class="form-control"
                aria-describedby="selfIntr"
              />
            </div>
            <label class="form-label">이메일</label>
            <div id="txtBoxDiv">
              <input
                type="txt"
                id="regiEmailBox"
                class="form-control"
                aria-describedby="selfIntr"
              />
            </div>
            <label class="form-label">비밀번호</label>
            <div id="txtBoxDiv">
              <input
                type="password"
                id="regiPassBox"
                class="form-control"
                aria-describedby="selfIntr"
              />
            </div>
            <label class="form-label">비밀번호 확인</label>
            <div id="txtBoxDiv">
              <input
                type="txt"
                id="regiPassBox2"
                class="form-control"
                aria-describedby="selfIntr"
              />
            </div>
            <label class="form-label">휴대폰 번호</label>
            <div id="txtBoxDiv">
              <input
                type="txt"
                id="regiPhoneBox"
                class="form-control"
                aria-describedby="selfIntr"
              />
            </div>

            <hr />
            <div class="rowCreate d-flex justify-content-center">
              <div class="d-grid gap-2" id="createCharacter">
                <button class="btn btn-danger" type="button">
                  캐릭터 생성
                </button>
              </div>
            </div>

            <section id="terms">
              <label class="form-label">
                가입 시, 통합 계정으로 파티퀘스트가 제공하는 서비스를 모두
                이용하실 수 있습니다.<br />
                <a>통합 계정</a> 및 <a>서비스 이용약관</a>,
                <a>개인정보처리방침</a>에 동의합니다.<br />
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
        </form>
      </div>
      <hr class="sectionLine" />
    </div>
  </section>
  <!-- End register -->
</template>
