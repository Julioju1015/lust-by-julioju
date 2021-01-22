const sendBox = document.querySelector('.send-box');
const userName = document.querySelector('.user');

sendBox.addEventListener('focus', () => {
    userName.classList.add('focus');
})

sendBox.addEventListener('focusout', () => {
    userName.classList.remove('focus');
})