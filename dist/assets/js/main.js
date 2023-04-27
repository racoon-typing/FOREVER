const burgerMenu = document.querySelector('.header__burger');
const navNode = document.querySelector('.header__menu');
const pageBody = document.querySelector('.page__body');

function toggleMenu() {
    console.log(burgerMenu);
    navNode.classList.toggle('header__menu-open');
    burgerMenu.classList.toggle('header__menu-burger-open');

    // Флаг на открытие меню
    const isOpen = navNode.className.includes('header__menu-open');
    if (isOpen) {
        pageBody.style.overflow = 'hidden'
    } else {
        pageBody.style.overflow = 'auto'
    }
}

burgerMenu.addEventListener('click', toggleMenu)


// Закрыть меню
function closeMenu() {
    burgerMenu.classList.remove('header__menu-burger-open');
    navNode.classList.remove('nav__open');
    navList.classList.remove('nav__list-open');
    pageBody.style.overflow = 'auto'
}

// Прокрутка
// function scrollToTopik(evt) {
//     const itemId = evt.target.id;

//     switch (itemId) {
//         // 1
//         case 'about':
//             closeMenu();
//             break;
//         // 2
//         case 'we':
//             closeMenu();
//             break;
//         // 3
//         case 'events':
//             closeMenu();
//             break;
//         // 4
//         case 'partner':
//             closeMenu();
//             break;
//         case 'member':
//             closeMenu();
//             break;
//     }
// }

// navList.addEventListener('click', scrollToTopik)
const swiper = new Swiper('#swiper-2', {

    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        // when window width is >= 768px
        768: {
          slidesPerView: 3,
          spaceBetween: 30
        },
    }

    // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
});