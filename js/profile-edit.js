const socialList = document.querySelector('.social-list');
const addSocialButton = document.querySelector('.add-social');
const inputValueBox = document.querySelector('.input-value-box');
const socialIcons = document.querySelectorAll('.social-list li');

addSocialButton.addEventListener('click', () => {
    socialList.classList.toggle('active');
    addSocialButton.classList.toggle('active');
    inputValueBox.classList.remove('active')
})

socialIcons.forEach(socialIcon => {
    socialIcon.addEventListener('click', () => {
        inputValueBox.classList.add('active');
    })
})

console.log(socialIcons);


