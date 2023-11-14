<template>
  <footer class="bg-dark" id="tempaltemo_footer">
    <div class="container">
      <div class="row">
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            바로가기
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li><a class="text-decoration-none" href="#">스터디 모임</a></li>
            <li><a class="text-decoration-none" href="#">프로젝트 모임</a></li>
            <li><a class="text-decoration-none" href="#">커뮤니티</a></li>
            <li><a class="text-decoration-none" href="#">스터디룸</a></li>
            <li><a class="text-decoration-none" href="#">공지사항</a></li>
          </ul>
        </div>

        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            고객센터
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <a class="text-decoration-none" href="#">공지사항</a>
            </li>
            <li><a class="text-decoration-none" href="#">자주묻는질문</a></li>
          </ul>
        </div>
        <div class="col-md-4 pt-5">
          <h2 class="h2 text-light border-bottom pb-3 border-light">
            서비스약관
          </h2>
          <ul class="list-unstyled text-light footer-link-list">
            <li>
              <routerLink to="/TermsServicePolicy" class="text-decoration-none"
                >서비스 이용약관</routerLink
              >
            </li>
            <li>
              <routerLink to="/PrivacyPolicy" class="text-decoration-none"
                >개인정보취급방침</routerLink
              >
            </li>
            <li>
              <routerLink to="/PaymentPolicy" class="text-decoration-none"
                >전자금융거래약관</routerLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-100 bg-black py-3">
      <div class="container footerContainer">
        <div>
          <img class="footerLogo" src="/img/footer_logo.png" />
          <span id="footerInfo" class="text-left">
            파티퀘스트 | 사업자번호: 111-11-11111 사업자 정보 확인<br />
            개인정보보호책임자: 이현정 | 이메일 : info@partyquest.com<br />
            전화번호: 070-1111-1111 | 주소: 부산광역시 부산진구 부전동 C2호
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
