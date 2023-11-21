<script setup>
import UnAuthenticatedHeader from "@/components/molecules/auth/UnAuthenticatedHeader.vue";
import AuthenticatedHeader from "@/components/molecules/auth/AuthenticatedHeader.vue";
import {useAuthStore} from "@/stores/authStore";

const auth = useAuthStore();

</script>
<template>
  <nav
    class="navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"
    id="templatemo_nav_top"
  >
    <div class="container text-light">
      <div class="w-100 d-flex justify-content-between">
        <div>
          <i class="fa fa-envelope mx-2"></i>
          <a
            class="navbar-sm-brand text-light text-decoration-none"
            href="mailto:info@company.com"
            >info@partyquest.com</a
          >
          <i class="fa fa-phone mx-2"></i>
          <a
            class="navbar-sm-brand text-light text-decoration-none"
            href="tel:010-020-0340"
            >010-000-0000</a
          >
        </div>
        <div>
          <a
            class="text-light"
            href="https://fb.com/templatemo"
            target="_blank"
            rel="sponsored"
            ><i class="fab fa-facebook-f fa-sm fa-fw me-2"></i
          ></a>
          <a
            class="text-light"
            href="https://www.instagram.com/"
            target="_blank"
            ><i class="fab fa-instagram fa-sm fa-fw me-2"></i
          ></a>
          <a class="text-light" href="https://twitter.com/" target="_blank"
            ><i class="fab fa-twitter fa-sm fa-fw me-2"></i
          ></a>
          <a class="text-light" href="https://www.linkedin.com/" target="_blank"
            ><i class="fab fa-linkedin fa-sm fa-fw"></i
          ></a>
        </div>
      </div>
    </div>
  </nav>
  <!-- Close Top Nav -->

  <!-- Header -->
  <nav class="navbar navbar-expand-lg navbar-light shadow">
    <div class="container d-flex justify-content-between align-items-center">
      <a href="/index"><img class="logo" src="/img/logo_with_name3.png" /></a>

      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#templatemo_main_nav"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="align-self-center collapse navbar-collapse flex-fill d-lg-flex justify-content-lg-between"
        id="templatemo_main_nav"
      >
        <div class="flex-fill">
          <ul class="nav navbar-nav d-flex justify-content-between mx-lg-auto">
            <li class="nav-item">
              <a class="nav-link" href="/createStudy">스터디 모임</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about.html">프로젝트 모임</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="shop.html">커뮤니티</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact.html">스터디룸</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/noticeList">공지사항</a>
            </li>
          </ul>
        </div>
<!--        LEARN: 바인딩 처리 해주려면 이렇게 직접 참조 하도록 한다.-->
        <div v-if="auth.accessToken.length >0" class="flex-fill">
          <AuthenticatedHeader :member="auth.user"/>
        </div>
        <div v-else>
          <UnAuthenticatedHeader/>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped></style>
