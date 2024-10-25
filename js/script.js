let burger = document.querySelector('#burger');
let headerContent = document.querySelector('.header__content');
let overlay = document.querySelector('.overlay');



burger.addEventListener('click', function () {
    console.log('Клик по бургеру');
    headerContent.classList.toggle('menu-mobile');
})
