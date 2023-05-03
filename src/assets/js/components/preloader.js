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