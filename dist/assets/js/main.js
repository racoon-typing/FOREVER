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

// Слайдер для объектов недвижимости
document.addEventListener('DOMContentLoaded', () => {
  const width = window.innerWidth
  if (width < 1440) {
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



// const swiperMini = document.querySelectorAll('.offers-page__swiper');
// console.log(swiperMini);

// function getSwiper(swiperMini) {
//   swiperMini.forEach((element, index)=> {
//     element.classList.add(`offers-page__swiper--${index}`)
//   });
// }

// getSwiper();


const swiper4 = new Swiper('#swiper-4', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  spaceBetween: 10,
  slidesPerView: 1,

  // thumbs: {
  //   swiper: {
  //     el: '.image-mini-slider',
  //     slidesPerView: 3,
  //     spaceBetween: 10,
  //   } 
  // }
});



// effect: 'coverflow',

// coverFlowEffect: {
//   rotate: 20,
//   stretch: 50,
//   slidesShadows: true,
// }
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

// let time = 0;
// document.addEventListener("DOMContentLoaded", () => {
//     const persentsInterval = setInterval(() => {
//         if (time <= TIME_LOAD) {
//             persentsNode.innerHTML = `${Math.ceil(time / TIME_LOAD * 100)}%`;
//             time += 750;
//         } else {
//             clearInterval(persentsInterval);
//             preloadNode.classList.add('preload--none');
//             pageBodyNode.style.overflow = 'auto';
//         }
//     }, 750);
//     persentsInterval();
// });
// ========= СОРТИРОВКА =========
const filterList = document.querySelector('.offers-page-filter__list');
const ALL = 'все предложения';

filterList.addEventListener('click', (evt) => { 
    // Очистка 
    offerItem.forEach((el) => {
        el.classList.remove('offers-page__item--hidden');
    });

    // Значение района для фильтрации 
    const filterOption = evt.target.innerText.toLowerCase();

    // Если условие все предложения, то ничего не делать
    if (filterOption === ALL) {
        return;
    }

    // Список предложений 
    const arr = Array.from(offerItem);

    // Массив с индексами подходящих предложений
    let myArr = [];
    arr.forEach((el, index) => {
        const area = el.querySelector('.offers-page__subitem-number-area');
        
        let text;
        if (area) {
            text = area.innerText.toLowerCase();
        }

        if (text) {            
            if (filterOption === text) {
                myArr.push(index);
            } 
        }
    });
    console.log(`Массива с индексами совподений. Массив: ${myArr}`);

    // Скрывает элементы несовпадающие по запросу
    offerItem.forEach((el, index) => {
        el.classList.add('offers-page__item--hidden');

        myArr.forEach((elem) => {
            if (elem === index) {
                el.classList.remove('offers-page__item--hidden'); 
            }
        }) 
    }); 

    console.log(`Очистка массива совподений. Массив: ${myArr}`);
    myArr = [];
});
// ========= НАЧАЛЬНОЕ СОСОТОЯНИЕ + ПОДГРУЗКА ПРЕДЛОЖЕНИЙ =========
const offerItem = document.querySelectorAll('.offers-page__item');
const addOfferButton = document.querySelector('.offers-page__button');
const addOfferButtonWrapper = document.querySelector('.offers-page__button-wrapper');

// Добавляем по 5 предложений
const ADD_OFFER = 5;
// Начальное ко-во предложений
let startOffer = 3;

if (offerItem.length > startOffer) {
    addOfferButtonWrapper.style.display = 'flex';
}

// Скрываем предложения с индексом больше 3  
offerItem.forEach((el, index) => {
    if (index >= startOffer) {
        el.classList.add('offers-page__item--hidden');
    }
}); 

// Показывает предложения 
addOfferButton.addEventListener('click', () => {
    startOffer += ADD_OFFER;

    // Показывает дополнительные предложений +5 штук
    offerItem.forEach((el, index) => {
        if (index < startOffer) {
            el.classList.remove('offers-page__item--hidden');
        }
    }); 

    // Скрывает кнопку, если предложений для подгрузки больше нет
    if (startOffer > offerItem.length) {
        addOfferButtonWrapper.style.display = 'flex';
    }
});