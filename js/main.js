const header = document.querySelector('.header');
const burgerContainer = document.querySelector('.burger-container');
const navContainer = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');
const body = document.querySelector('body');
const burgerBars = document.querySelectorAll('.burger-container div');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    };
});

burgerContainer.addEventListener('click', () => {
    navContainer.classList.toggle('active');
    burgerContainer.classList.toggle('active');
    body.classList.toggle('active');
    timeline();
});

function timeline() {
    tl = new TimelineMax();
    if (body.classList.contains('active')) {
        tl.to(
            burgerBars,
            0.4, {
                background: 'white'
            }, "+=0.1"
        );
    } else {
        tl.to(
            burgerBars,
            0.4, {
                background: 'black'
            }, "+=0.4"
        );
    };
};

const avatar = document.querySelector('.avatar');
const dropNav = document.querySelector('.drop-nav');

avatar.addEventListener('click', () => {
    dropNav.classList.toggle('active');
})
