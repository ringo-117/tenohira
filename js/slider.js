// スライダー（事業紹介）
const reviewSwiper = new Swiper(".review-swiper", {
  slidesPerView: 1.3,
  centeredSlides: true,
  // loop: true,
  spaceBetween: 10,
  grabCursor: true,
  effect: 'slide',
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // 画面幅によって設定を変える
  breakpoints: {
    // 0px以上（スマホなど）
    0: {
      spaceBetween: 20,
    },
    // 640px以上（タブレットなど）
    640: {
      slidesPerView: 2.1,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // 1024px以上（PC）
    1024: {
      slidesPerView: 4,
      spaceBetween: 0,

      /* PCでは動かさない */
      allowTouchMove: false,
      loop: false,
      centeredSlides: false,
    }
  }
});

// ヒーロースライダー
const heroSwiper = new Swiper(".hero-swiper", {
  effect: "fade",       // フェード切り替え
  loop: true,           // ループ
  autoplay: {
    delay: 3400,        // 3秒ごとに切り替え
    disableOnInteraction: false,
  },
  speed: 2500,          // フェードの速さ（1秒）

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});