<template>
  <!-- Open Content -->
  <section class="bg-light">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-5 mt-5">
          <div class="card mb-3">
            <img
              class="card-img img-fluid"
              src="http://via.placeholder.com/800.jpg"
              alt="Card image cap"
              id="studyThumb"
            />
          </div>
        </div>

        <!-- col end -->
        <div class="col-lg-7 mt-5">
          <div class="card" id="studyBase">
            <div class="card-body">
              <h1 class="h2">Study Name</h1>

              <div class="row pb-3" id="studyHostInfo">
                <div class="col-lg-5 mt-5">
                  <img
                    src="http://via.placeholder.com/200.jpg"
                    id="hostAvatar"
                  />
                </div>
                <div class="col-lg-7 mt-5">
                  <div id="viewHostNickBio">
                    <h3>hostName</h3>
                    <h5>host bio 입니다</h5>
                  </div>
                </div>
              </div>

              <div class="row pb-3">
                <label> 요구 기술 스택</label>
                <div class="col-lg-2 d-grid">
                  <button class="btn btn-danger btn-lg">React</button>
                </div>
                <div class="col-lg-2 d-grid">
                  <button class="btn btn-danger btn-lg">JAVA</button>
                </div>
                <div class="col-lg-2 d-grid">
                  <button class="btn btn-danger btn-lg">DOCKER</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Close Content -->

  <!-- Start Detail Content-->
  <section class="py-5">
    <div class="container pb-5">
      <div class="row">
        <div class="col-lg-7 mt-5">
          <P>CONTENTSECTION</P>
          <img src="http://via.placeholder.com/800x2000" alt="" />
        </div>

        <div class="col-lg-5 mt-5">
          <DIV>
            <P>DETAIL INFFO SECTION</P>
          </DIV>
        </div>
      </div>
    </div>
  </section>

  <!-- End Detail Content-->

  <!-- Start Member Info -->
  <section class="py-5">
    <div class="container pb-5">
      <div class="row">
        <h4>파티원 소개</h4>
        <div class="col-lg-2"></div>
        <div class="col-lg-2">
          <img src="http://via.placeholder.com/150.jpg" id="memberAvatar" />
        </div>
        <div class="col-lg-5" style="border: 1px solid black">
          <h3>memberNick</h3>
          <h4>memberBioInfo</h4>
          <p>관심 기술 스택</p>
        </div>
      </div>
    </div>
  </section>

  <!-- End Member Info -->
  <!-- Start Article -->

  <section class="container py-9">
    <div class="row text-left pt-3">
      <div class="col-lg-12 m-auto">
        <p id="title1">비슷한 모임</p>
      </div>
    </div>
    <div class="container">
      <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        <div class="col">
          <div class="card px-4 py-2">
            <div class="div1 row py-2 px-2">
              <img
                src="http://via.placeholder.com/400.jpg"
                height="130px"
                width="auto"
                alt=""
              />
            </div>
            <div class="py-2">
              <p id="desc">모임 title</p>

              <div class="d-flex">
                <button
                  class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                >
                  바로가기
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- 위의 카드를 4번 복사하여 총 4개의 카드가 있는 행을 생성하세요 -->
        <div class="col">
          <div class="card px-4 py-2">
            <div class="div1 row py-2 px-2">
              <img
                src="http://via.placeholder.com/400.jpg"
                height="130px"
                width="auto"
                alt=""
              />
            </div>
            <div class="py-2">
              <p id="desc">모임 title</p>

              <div class="d-flex">
                <button
                  class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                >
                  바로가기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card px-4 py-2">
            <div class="div1 row py-2 px-2">
              <img
                src="http://via.placeholder.com/400.jpg"
                height="130px"
                width="auto"
                alt=""
              />
            </div>
            <div class="py-2">
              <p id="desc">모임 title</p>

              <div class="d-flex">
                <button
                  class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                >
                  바로가기
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card px-4 py-2">
            <div class="div1 row py-2 px-2">
              <img
                src="http://via.placeholder.com/400.jpg"
                height="130px"
                width="auto"
                alt=""
              />
            </div>
            <div class="py-2">
              <p id="desc">모임 title</p>

              <div class="d-flex">
                <button
                  class="btnArticle d-flex ml-auto px-3 font-weight-bold darkWhite"
                >
                  바로가기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- End Article -->
</template>

<script setup></script>

<style lang="scss" scoped></style>
