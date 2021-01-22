const checkboxes = document.querySelectorAll('.checkbox');
const checkAll = document.querySelector('.checkbox-all');
const selected = document.querySelector('.selected');
const number = document.querySelector('.number span');
const trashes = document.querySelectorAll('.trash');
const notBoxes = document.querySelector('.not-boxes');
const notBox = document.querySelectorAll('.not-box');
let boxesChecked = 0;

checkAll.addEventListener('input', () => {
    checkboxes.forEach(checkbox => {
        checkbox.checked = true;
        boxesChecked = checkboxes.length
        if (boxesChecked == checkboxes.length && checkAll.checked == false) {
            checkbox.checked = false;
            boxesChecked = 0;
        }

        ifBoxesCheckedActive()

    });
});

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('input', () => {
        if (checkbox.checked == true) {
            checkbox.checked = true;
            boxesChecked += 1;
        } else {
            checkbox.checked = false;
            boxesChecked -= 1;
        }

        if (boxesChecked == 0) {
            checkAll.checked = false;
        }

        ifBoxesCheckedActive()
    })
})


function ifBoxesCheckedActive() {
    if (boxesChecked > 0) {
        selected.classList.add('active');
        notBoxes.classList.add('active');
        number.innerHTML = boxesChecked + " éléments séléctionnés";
    } else {
        selected.classList.remove('active');
        notBoxes.classList.remove('active');
        number.innerHTML = boxesChecked + " éléments séléctionnés";
    };
};
