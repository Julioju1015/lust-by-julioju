const signInFields = document.querySelectorAll('.fields input');
const pseudoHr = document.querySelector('.pseudo-hr');
const emailHr = document.querySelector('.email-hr');
const passwordHr = document.querySelector('.password-hr');
const confirmHr = document.querySelector('.confirm-hr');

signInFields.forEach(field => {
    field.addEventListener('focus', () => {
        if (field.placeholder == "Email") {
            emailHr.classList.add('focus');
        } else if (field.placeholder == "Pseudo") {
            pseudoHr.classList.add('focus');
        } else if (field.placeholder == "Mot de passe") {
            passwordHr.classList.add('focus');
        } else if (field.placeholder == "Confirmer le mot de passe") {
            confirmHr.classList.add('focus');
        };
    });

    field.addEventListener('focusout', () => {
        emailHr.classList.remove('focus');
        passwordHr.classList.remove('focus');
        confirmHr.classList.remove('focus');
        pseudoHr.classList.remove('focus');
    });
});