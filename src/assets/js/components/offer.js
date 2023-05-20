// ========= НАЧАЛЬНОЕ СОСОТОЯНИЕ + ПОДГРУЗКА ПРЕДЛОЖЕНИЙ =========
const offerItem = document.querySelectorAll('.offers-page__item');
const addOfferButton = document.querySelector('.offers-page__button');
const addOfferButtonWrapper = document.querySelector('.offers-page__button-wrapper');

// Добавляем по 5 предложений
const ADD_OFFER = 5;
// Начальное ко-во предложений
let startOffer = 3;

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
        addOfferButtonWrapper.style.display = 'none';
    }
});


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