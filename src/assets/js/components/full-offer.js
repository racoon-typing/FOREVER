const offerLinks = document.querySelectorAll('.offers-page__item-link');
const offerList = document.querySelector('.offers-page');
const offerPageFilter = document.querySelector('.offers-page-filter');
const templateN = document.querySelector('.offers-page__template');
const outputArr = document.querySelector('.offers-page__template-gallery');

offerLinks.forEach(el => {
    el.addEventListener('click', (evt) => {
        const target = evt.target;

        // Предложение
        const nearestItem = target.closest('.offers-page__item');

        // Характеристики
        const itemDescription = nearestItem.querySelector('.offers-page__subitem-number--description'); // Описание
        const itemMap = nearestItem.querySelector('.offers-page__subitem-number--map'); // Местоположение
        const itemClass = nearestItem.querySelector('.offers-page__subitem-number--class'); // Класс
        const itemArea = nearestItem.querySelector('.offers-page__subitem-number--area'); // Район
        const itemMetro = nearestItem.querySelector('.offers-page__subitem-number--metro'); // Метро рядом
        const itemCertPrice = nearestItem.querySelector('.offers-page__subitem-number--certPrice'); // Средняя цена за м^2
        const itemSquare = nearestItem.querySelector('.offers-page__subitem-number--square'); // Площадь м^2
        const itemPrice = nearestItem.querySelector('.offers-page__subitem-number--price'); // Общая цена

        // Массив характеристик
        const arrMi = [itemDescription.textContent, itemMap.textContent, itemClass.textContent, itemArea.textContent, itemMetro.textContent, itemCertPrice.textContent, itemSquare.textContent, itemPrice.textContent]

        // Всталяет характеристики
        const templItems = document.querySelectorAll('.offers-page__template-subitem');
        templItems.forEach((el, index) => {
            const needFu = el.querySelector('.offers-page__template-subitem-number');
            needFu.textContent = arrMi[index];
        });


        // Фото оффера
        const itemsImg = Array.from(nearestItem.querySelectorAll('.offers-page__slider-img'));
        console.log(itemsImg);

        const waysToImg = itemsImg.map((el) => {
            return el.src;
        });


        // Создает узел IMG для фотографий 
        const fragment = document.createDocumentFragment();
        waysToImg.forEach(el => {
            console.log(el);

            const newImg = document.createElement('img');
            newImg.classList.add('offers-page__template-img');
            newImg.src = el;

            fragment.appendChild(newImg);
        });

        // Вставляет фотки в шаблон
        outputArr.appendChild(fragment);
        
        offerList.style.display = 'none';
        offerPageFilter.style.display = 'none';
        // templateN.classList.remove('offers-page__template--hidden')
        templateN.classList.add('offers-page__template--open');
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


const closeFullInfoButton = document.querySelector('.offers-page__template-cross');

closeFullInfoButton.addEventListener('click', () => {
    offerList.style.display = 'block';
    offerPageFilter.style.display = 'block';
    templateN.classList.remove('offers-page__template--open');
    // templateN.classList.add('offers-page__template--hidden');
});