const burgerMenu = document.querySelector('.header__burger');
const navNode = document.querySelector('.header__menu');
const pageBody = document.querySelector('.page__body');

function toggleMenu() {
    navNode.classList.toggle('header__menu-open');
    burgerMenu.classList.toggle('header__burger--open');

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
    burgerMenu.classList.remove('header__burger--open');
    navNode.classList.remove('nav__open');
    navList.classList.remove('nav__list-open');
    pageBody.style.overflow = 'auto'
}
