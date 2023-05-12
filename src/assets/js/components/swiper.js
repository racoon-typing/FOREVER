// Слайдер с навигацией сверху
const swiper1 = new Swiper('#swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    // Буллеты
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  }

});

// Слайдер с пагинацией снизу
const swiper2 = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Буллеты
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
});


const swiper3 = new Swiper('#swiper-3', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 40
    },
  }

});


// effect: 'coverflow',

// coverFlowEffect: {
//   rotate: 20,
//   stretch: 50,
//   slidesShadows: true,
// }
