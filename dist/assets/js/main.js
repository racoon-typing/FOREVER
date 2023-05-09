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
// const formNode = document.querySelectorAll('#form');

// Отправка данных на сервер
function send(event, php){
// console.log("Отправка запроса");
event.preventDefault ? event.preventDefault() : event.returnValue = false;
var req = new XMLHttpRequest();
req.open('POST', php, true);
req.onload = function() {
	if (req.status >= 200 && req.status < 400) {
	json = JSON.parse(this.response); // Ебанный internet explorer 11
    	// console.log(json);
        
    	// ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
    	if (json.result == "success") {
    		// Если сообщение отправлено

    		// alert("Сообщение отправлено");

			// Очистка формы
			event.target.reset();		 
    	} else {
    		// Если произошла ошибка


    		// alert("Ошибка. Сообщение не отправлено");
    	}

    // Если не удалось связаться с php файлом
    } else {
		alert("Ошибка сервера. Номер: "+req.status);}
	}; 

// Если не удалось отправить запрос. Стоит блок на хостинге
req.onerror = function() {
	alert("Ошибка отправки запроса");

	
};
req.send(new FormData(event.target));
}
const persentsNode = document.querySelector('.preload__icon-number');
const preloadNode = document.querySelector('.preload')
const pageBodyNode = document.querySelector('.page__body')
const TIME_LOAD = 3000;

let time = 0;
document.addEventListener("DOMContentLoaded", () => {
    const persentsInterval = setInterval(() => {
        if (time <= TIME_LOAD) {
            persentsNode.innerHTML = `${Math.ceil(time / TIME_LOAD * 100)}%`;
            time += 750;
        } else {
            clearInterval(persentsInterval);
            preloadNode.classList.add('preload--none');
            pageBodyNode.style.overflow = 'auto';
        }
    }, 750);
    persentsInterval();
});