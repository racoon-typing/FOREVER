// Слайдер с навигацией сверху
const swiper1 = new Swiper('#swiper-1', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  // initialSlide: 3,

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

  effect: 'coverflow',

  coverFlowEffect: {
    rotate: 20,
    stretch: 50,
  },

  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 1,
      spaceBetween: 35,
    },

    1440: {
      spaceBetween: 50,
    },
  }

});

// Слайдер с пагинацией снизу
const swiper2 = new Swiper('#swiper-2', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 20,

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
      spaceBetween: 35,
    },

    1440: {
      slidesPerView: 4,
      spaceBetween: 20,
    }
  }

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
      slidesPerView: 2,
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
