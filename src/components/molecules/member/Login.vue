<script setup></script>
<style scoped></style>

<template>
  <!-- Start Register -->
  <section class="section1">
    <div class="container py-5 d-flex justify-content-end" id="login">
      <div class="row py-2" id="loginDiv">
        <form class="col-md-12 m-auto" method="post" role="form">
          <section class="registerSec" id="loginSec">
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

            <hr />
            <div class="rowCreate d-flex justify-content-center">
              <div class="d-grid gap-2" id="createCharacter">
                <button class="btn btn-danger" type="button">로그인</button>
              </div>
            </div>

            <hr class="sectionLine" />

            <section id="social">
              <div class="simpleRegister d-flex justify-content-center">
                <label class="form-label"> 간편 로그인 </label>
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
