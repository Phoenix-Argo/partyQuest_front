<script setup>
import Banner from "@/components/molecules/board/Banner.vue";
import Img from "@/components/molecules/common/Img.vue";
import CommunityAside from "@/components/molecules/board/CommunityAside.vue";
</script>
<template>
  <main id="main">
    <Banner title="다른 파티의 파티원들과 소통 할 수 있어요!" subTitle="자유게시판, 묻고 답하기에는 여러 파티원들이 북적 북적 !" />
    <section class="community-body">
      <!--왼쪽 어사이드 시작-->
      <CommunityAside></CommunityAside>
      <!--왼쪽 어사이드 끝-->
      <!-- 상단 카테고리 시작 -->
      <div class ="community-body__content">
        <!-- 상단 카테고리 끝 -->
        <!-- Content View 시작-->
        <section class="community-list-container">
          <form>
            <div class="input-group mb-3">
              <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">게시판 선택</button>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">질문 & 답변</a></li>
                <li><a class="dropdown-item" href="#">고민있어요</a></li>
                <li><a class="dropdown-item" href="#">자유게시판</a></li>
                <li><a class="dropdown-item" href="#">블로그</a></li>
              </ul>
              <input type="text" class="form-control" aria-label="Text input with dropdown button" value="제목에 핵심 내용을 요약해보세요">
            </div>
            <div >
              <label for="exampleFormControlTextarea1" class="form-label"></label>
              <textarea class="form-control writeContent" id="exampleFormControlTextarea1" rows="3"></textarea>

              <div class="mb-3">
                <label for="formFile" class="form-label"></label>
                <input class="form-control" type="file" id="formFile">
              </div>

              <button type="submit" class="btn btn-danger" style="float:right">등록</button>
              <button type="submit" class="btn btn-outline-danger" style="float:right; margin-right:1%;">취소</button>

            </div>
          </form>
        </section>


        <!-- Content List 끝 -->
      </div>

      <!-- 오른쪽 어사이드 시작-->
      <sec></sec>
      <!-- 오른쪽 어사이드 끝-->


    </section>
  </main>
</template>
<style scoped>
* {
  font-family: "Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
  "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
  "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}
#main {
  min-height: 800px;
}
*, :after, :before {
  box-sizing: inherit;
}
main {
  display: block;
}
/*왼쪽 어사이드*/
.community-left-side {
  margin-top: 44px;
  margin-right: 40px;
  width: 168px;
}
.community-body__navigation {
  flex: 1 0 172px;
  max-width: 172px;
}
ol, ul {
  list-style: none;
}
.community-aside__group:first-of-type {
  margin-top: 0;
}
.community-aside__group-name {
  margin-bottom: 1em;
  height: 20px;
  font-size: 12px;
  font-weight: 500;
  color: #adb5bd;
}
.community-aside__menu {
  padding: 0.5em 0.75em;
}
.community-aside__menu a {
  font-size: 17px;
  color: #343a40;
  font-weight: 400;
  line-height: 1.5;
}
.community-aside__menu--selected a {
  font-weight: 700;
  color: rgba(255, 21, 21, 0.8);
}
/*content*/
.community-body {
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  padding: 0 32px;
  max-width: 1200px;
}
.community-body__content {
  padding: 32px 0 64px;
  max-width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.writeContent{
  height : 500px;
  resize : none;
}

</style>