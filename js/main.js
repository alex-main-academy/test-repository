let headerButton = document.querySelector('.header__modal-click')
let modal = document.querySelector('.modal__course')
let body = document.querySelector('body')

headerButton.addEventListener('click', () => {
    modal.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
    `
    body.style.overflow = 'hidden'
})