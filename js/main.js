window.addEventListener('load', () => {
    const burgerBtn = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger');

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('burger-btn--active');
        burgerMenu.classList.toggle('burger--hide');
    });

    const cardList = document.querySelectorAll('.card');
    cardList.forEach(card => {
        card.addEventListener('click', ()=> {
            card.classList.toggle('card_rotated');
        });
    });
});