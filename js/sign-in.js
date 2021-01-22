const signInFields = document.querySelectorAll('.fields input');
const emailHr = document.querySelector('.email-hr');
const passwordHr = document.querySelector('.password-hr');

signInFields.forEach(field => {
    field.addEventListener('focus', () => {
        if (field.placeholder == "Email") {
            emailHr.classList.add('focus');
        } else if (field.placeholder == "Mot de passe") {
            passwordHr.classList.add('focus');
        }
    });

    field.addEventListener('focusout', () => {
        emailHr.classList.remove('focus');
        passwordHr.classList.remove('focus');
    })
});