// ========= СОРТИРОВКА =========
const filterList = document.querySelector('.offers-page-filter__list');
const filterItems = document.querySelectorAll('.offers-page-filter__item');
const emptyItem = document.querySelector('.offers-page__empty');
const selectText = document.querySelector('.offers-page-filter__search-input');

const ALL = 'все предложения';

filterList.addEventListener('click', (evt) => {
    addOfferButtonWrapper.style.display = 'none';

    // Очищает активный пункт фильтрации   
    filterItems.forEach(i => {
        if (i.classList.contains('offers-page-filter__item--active')) {
            i.classList.remove('offers-page-filter__item--active');
        }
    });

    // Нажатый элемент
    const filterItem = evt.target;

    // Исключает список
    if (filterItem.classList.contains('offers-page-filter__list')) {
        return;
    } else {
        // Добавляет активный пункт фильтрации   
        filterItem.classList.add('offers-page-filter__item--active');

        // Показывает все предожения 
        offerItem.forEach((el) => {
            el.classList.remove('offers-page__item--hidden');
        });


        // Текст для селекта
        const filterOptionText = evt.target.innerText;
        selectText.textContent = filterOptionText;

        // Значение района для фильтрации 
        const filterOption = evt.target.innerText.toLowerCase();

        // Если условие все предложения, то ничего не делать
        if (filterOption === ALL) {
            if (emptyItem.classList.contains('offers-page__empty--open')) {
                emptyItem.classList.remove('offers-page__empty--open');
            }

            return;
        }

        // Список предложений 
        const arr = Array.from(offerItem);

        // Массив с индексами подходящих предложений
        let myArr = [];
        arr.forEach((el, index) => {
            const area = el.querySelector('.offers-page__subitem-number--area');

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

        // Считает кол-во скрытых элементов 
        let items = 0;
        offerItem.forEach((el) => {
            const hiddenItem = el.classList.contains('offers-page__item--hidden');

            if (hiddenItem) {
                items++;
            }
        });

        // Показывает пустой оффер, если кол-во скрытых элементов = кол-ву всех элементов
        if (items === offerItem.length) {
            emptyItem.classList.add('offers-page__empty--open')
            items = 0;
        } else {
            emptyItem.classList.remove('offers-page__empty--open')
        }

        // console.log(`Очистка массива совподений. Массив: ${myArr}`);
        myArr = [];
    }

});


// ========= ПопАп: Селект =========
const selectNode = document.querySelector('.offers-page-filter__search');
const arrowDown = document.querySelector('.offers-page-filter__search-icon-wrapper');
let isOpen = false;

selectNode.addEventListener('click', () => {
    console.log('клик')


    filterList.classList.toggle('offers-page-filter__list--open');

    if (isOpen) {
        arrowDown.style.rotate = '0deg';
        isOpen = false;
    } else {
        arrowDown.style.rotate = '180deg';
        isOpen = true;
    }
});