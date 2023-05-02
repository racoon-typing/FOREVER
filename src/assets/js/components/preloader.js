const persentsNode = document.querySelector('.preload__icon-number');
const preloadNode = document.querySelector('.preload')

document.addEventListener("DOMContentLoaded", () => {
    // const mediaFiles = document.querySelectorAll('img', 'video');
    // let i = 0;
    
    // Array.from(mediaFiles).forEach((file, index) => {
    //     file.onload = () => {
    //         i++;

    //         persentsNode.innerHTML = `${Math.floor((i * 100) / mediaFiles.length)}%`;

    //         if (i === mediaFiles.length) {
    //             persentsNode.classList.add('preload--none');
    //             persentsNode.innerHTML = '100%';
    //         }
    //     }
    // });

    preloadNode.classList.add('preload--none');
    console.log('Загрузилось')

});