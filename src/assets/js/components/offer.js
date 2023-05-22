// ========= НАЧАЛЬНОЕ СОСОТОЯНИЕ + ПОДГРУЗКА ПРЕДЛОЖЕНИЙ =========
const offerItem = document.querySelectorAll('.offers-page__item');
const addOfferButton = document.querySelector('.offers-page__button');
const addOfferButtonWrapper = document.querySelector('.offers-page__button-wrapper');

// Добавляем по 5 предложений
const ADD_OFFER = 5;
// Начальное ко-во предложений
let START_OFFER = 3;

if (offerItem.length > START_OFFER) {
    addOfferButtonWrapper.style.display = 'flex';
}

// Скрываем предложения с индексом больше 3  
offerItem.forEach((el, index) => {
    if (index >= START_OFFER) {
        el.classList.add('offers-page__item--hidden');
    }
}); 

// Показывает предложения 
addOfferButton.addEventListener('click', () => {
    START_OFFER += ADD_OFFER;

    // Показывает дополнительные предложений +5 штук
    offerItem.forEach((el, index) => {
        if (index < START_OFFER) {
            el.classList.remove('offers-page__item--hidden');
        }
    }); 

    // Скрывает кнопку, если предложений для подгрузки больше нет
    if (START_OFFER > offerItem.length) {
        addOfferButtonWrapper.style.display = 'none';
    }
});
