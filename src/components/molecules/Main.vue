<script setup>
import router from "../../router";

let btnDetail = function () {
  router.push("/studyView");
};
</script>

<template>
  <main>
    <!-- Start Banner Hero -->
    <div
      id="template-mo-zay-hero-carousel"
      class="carousel slide"
      data-bs-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          class="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="/img/banner_img_01.png" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left align-self-center">
                  <h1 class="h1 text-success">
                    <b>EVENT</b>
                  </h1>
                  <h3 class="h2">삼삼오오 파티원들</h3>
                  <p>6명 이상 모이면 스터디룸 쿠폰이 쏟아진다!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="/img/banner_img_02.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">EVENT</h1>
                  <h3 class="h2">삼삼오오 파티원들이 모이면 쿠폰이 쏟아진다</h3>
                  <p>삼삼오오 파티원들이 모이면 쿠폰이 쏟아진다</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="carousel-item">
          <div class="container">
            <div class="row p-5">
              <div class="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img class="img-fluid" src="/img/banner_img_03.png" alt="" />
              </div>
              <div class="col-lg-6 mb-0 d-flex align-items-center">
                <div class="text-align-left">
                  <h1 class="h1">파티원을 구하세요!</h1>
                  <p>
                    혼자서 힘들다면 파티원을 구해서 능률을 높여보세요
                    파티퀘스트에서 프로그래밍, 외국어, 독서 등 다양한 모임을
                    찾을 수 있어요
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i class="fas fa-chevron-left"></i>
      </a>
      <a
        class="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i class="fas fa-chevron-right"></i>
      </a>
    </div>
    <!-- End Banner Hero -->

    <!-- Start Categories of The Month -->
    <section class="container py-9">
      <div class="row text-left pt-3">
        <div class="col-lg-12 m-auto">
          <p id="title1">STUDY WITH ME 📕</p>
          <p id="title2" href="#">HOT 모임 🔥 ></p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div class="card px-4 py-2">
              <div class="div1 row py-2 px-2">
                <img
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
    <section class="container py-5">
      <div class="row text-left pt-3">
        <div class="col-lg-12 m-auto">
          <p id="title2" href="#">NEW 모임 ✨ ></p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div class="card px-4 py-2">
              <div class="div1 row py-2 px-2">
                <img
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
    <section class="container py-5">
      <div class="row text-left pt-3">
        <div class="col-lg-12 m-auto">
          <p id="title1">PROJECT WITH ME 👨‍💻</p>
          <p id="title2">공모전 바로가기 🙆></p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div class="card px-4 py-2">
              <div class="div1 row py-2 px-2">
                <img
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
    <section class="container py-5">
      <div class="row text-left pt-3">
        <div class="col-lg-12 m-auto">
          <p id="title2">토이아티클 바로가기 🙆></p>
        </div>
      </div>
      <div class="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4">
          <div class="col">
            <div class="card px-4 py-2">
              <div class="div1 row py-2 px-2">
                <img
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
                  src="/img/banner_notice_1.png"
                  height="130px"
                  width="auto"
                  alt=""
                />
              </div>
              <div class="py-2">
                <p id="desc">이런 저런 백엔드 사람들 구해여</p>
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
    <!-- End Categories of The Month -->

    <!-- Start Featured Product -->
    <section class="bg-light">
      <div class="container py-5">
        <div class="row text-center py-3">
          <div class="col-lg-6 m-auto">
            <h1 class="h1">공지사항</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_1.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >스터디룸도 파티퀘스트에서!</a
                >
                <p class="card-text">
                  파티퀘스트에서 이제 스터디룸 서비스를 제공합니다
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_2.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >두근두근! 겨울방학 공모전</a
                >
                <p class="card-text">공모전 시기가 왔어요</p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-4 mb-4">
            <div class="card h-80">
              <a href="shop-single.html">
                <img
                  src="/img/banner_notice_3.png"
                  class="card-img-top"
                  alt="..."
                />
              </a>
              <div class="card-body">
                <a
                  href="shop-single.html"
                  class="h2 text-decoration-none text-dark"
                  >모임챌린지 제 1회 개최</a
                >
                <p class="card-text">모임챌린지가 시작되었습니다!</p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-8 col-md-12 text-center">
          <button
            class="btn btn-outline-secondary d-inline-flex align-items-center"
            type="button"
            style="font-weight: bold"
          >
            &nbsp; 바로가기 >
            <svg class="bi ms-1" width="5" height="20">
              <use xlink:href="#arrow-right-short"></use>
            </svg>
          </button>
        </div>
      </div>
    </section>
    <!-- End Featured Product -->
  </main>
</template>

<style scoped></style>
