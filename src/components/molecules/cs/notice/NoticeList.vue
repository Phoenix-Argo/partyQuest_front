<script setup></script>
<template>
  <main>
    <section class="community-header">
      <div class="community-header__content">
        <h2 class="community-header__title">인프런의 새로운 소식들!</h2>
        <p class="community-header__sub-title">
          신규 콘텐츠, 이벤트, 기능 추가 등의 새로운 인프런의 이야기를
          들어주세요.
        </p>
      </div>
    </section>
    <section class="community-body">
      <table>
        <tr>
          <td>헤더<a></a></td>
          <td>내용</td>
        </tr>
      </table>
      <nav
        class="pagination is-centered is-small"
        role="navagation"
        aria-label="pagination"
      >
        <a class="pagination-next" href="?page=2">다음 페이지</a>
        <ul class="pagination-list">
          <li>
            <a
              class="pagination-link is-current"
              href="?page=1"
              aria-label="1 페이지로 이동"
              >1</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              href="?page=2"
              aria-label="2 페이지로 이동"
              >2</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              href="?page=3"
              aria-label="3 페이지로 이동"
              >3</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              href="?page=4"
              aria-label="4 페이지로 이동"
              >4</a
            >
          </li>
          <li>
            <a
              class="pagination-link"
              href="?page=5"
              aria-label="5 페이지로 이동"
              >5</a
            >
          </li>
        </ul>
      </nav>
    </section>
  </main>
</template>
