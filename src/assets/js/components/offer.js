const offerItem = document.querySelectorAll('.offers-page__item');
const addOfferButton = document.querySelector('.offers-page__button');
const addOfferButtonWrapper = document.querySelector('.offers-page__button-wrapper');

// Добавляем по 5 предложений
const ADD_OFFER = 5;

let startOffer = 3;
offerItem.forEach((el, index) => {
    if (index >= startOffer) {
        el.classList.add('offers-page__item--hidden');
    }
}); 

// Показывает предложения 
addOfferButton.addEventListener('click', () => {
    startOffer += ADD_OFFER;

    offerItem.forEach((el, index) => {
        if (index < startOffer) {
            el.classList.remove('offers-page__item--hidden');
        }
    }); 

    if (startOffer > offerItem.length) {
        addOfferButtonWrapper.style.display = 'none';
    }
});



const filterList = document.querySelector('.offers-page-filter__list');

filterList.addEventListener('click', (evt) => {
    // console.log(evt.target);
    
    const filterOption = evt.target.innerText;
    // console.log(filterOption);

    let area;

    for(let elem of offerItem) {
        if (elem.querySelector('.offers-page__subitem-number-area')) {
            area = elem.querySelector('.offers-page__subitem-number-area');
        }
    }

    console.log(area.innerText);


    // const arr = offerItem.filter((el) => {
    //     const area = el.querySelector('.offers-page__subitem-number-area');
    //     console.log(area);
    // })
});