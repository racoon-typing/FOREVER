// ========= СОРТИРОВКА =========
const filterList = document.querySelector('.offers-page-filter__list');
const filterItems = document.querySelectorAll('.offers-page-filter__item');

const ALL = 'все предложения';

filterList.addEventListener('click', (evt) => {
    addOfferButtonWrapper.style.display = 'none';

    // Очищает активный пункт фильтрации   
    filterItems.forEach(i => {
        if (i.classList.contains('offers-page-filter__item--active')) {
            console.log(i);
            i.classList.remove('offers-page-filter__item--active');
        }
    });

    // Добавляет активный пункт фильтрации   
    const filterItem = evt.target;
    filterItem.classList.add('offers-page-filter__item--active');


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
    // console.log(`Массива с индексами совподений. Массив: ${myArr}`);

    // Скрывает элементы несовпадающие по запросу
    offerItem.forEach((el, index) => {
        el.classList.add('offers-page__item--hidden');

        myArr.forEach((elem) => {
            if (elem === index) {
                el.classList.remove('offers-page__item--hidden');
            }
        })
    });

    // console.log(`Очистка массива совподений. Массив: ${myArr}`);
    myArr = [];
});