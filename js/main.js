//modal 1
let headerButton = document.querySelectorAll('.header__modal-click')
let modal = document.querySelector('.modal__course')
let body = document.querySelector('body')
let modalClose = document.querySelector('.modal__close-icon')


let toggle = false;

headerButton.forEach((elem) => {
    elem.addEventListener('click', () => {
        toggle = !toggle;
    
        if (toggle) {
            modal.style = `
            transition-duration: 500ms;
            opacity: 1;
            visibility: visible;
            `
            body.style.overflow = 'hidden'
        }
    })
})

modalClose.addEventListener('click', () => {
    toggle = !toggle;
    
    if (toggle) {
        modal.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modal.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})


//modal2
let modalGift = document.querySelector('.modal__gift')
let modalGiftClose = document.querySelector('.modal__gift-close')
let modalGiftButton = document.querySelector('.modal__gift-button')

let toggle2 = false;
modalGiftButton.addEventListener('click', () => {
    toggle = !toggle;

    if (toggle) {
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})

modalGiftClose.addEventListener('click', () => {
    toggle = !toggle;
    
    if (toggle) {
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }else{
        modalGift.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})



//modal2
let teamBlock = document.querySelectorAll('.team__block')
let modalTeam1 = document.querySelector('.modal__team-1')
let modalTeam2 = document.querySelector('.modal__team-2')
let modalTeam3 = document.querySelector('.modal__team-3')
let modalTeam4 = document.querySelector('.modal__team-4')
let modalTeamClose = document.querySelectorAll('.modal__team-close')

let toggle3 = false;
teamBlock[0].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[1].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam2.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[2].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam3.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
teamBlock[3].addEventListener('click', () => {
    toggle3 = !toggle3;

    if (toggle3) {
        modalTeam4.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})

//modal team close
modalTeamClose[0].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[1].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[2].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalTeamClose[3].addEventListener('click', () => {
    toggle3 = false;
    
    if (!toggle3) {
        modalTeam4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})



//modal 4
let modalVideoInvite = document.querySelector('.modal__video-invite')
let modalVideoButton = document.querySelector('.invit__link div img')

let toggle4 = false;
modalVideoButton.addEventListener('click', () => {
    toggle4 = !toggle4;

    if (toggle4) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
modalVideoInvite.addEventListener('click', () => {
    toggle4 = false;
    toggle6 = false;

    if (!toggle4) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})


//modal5
let modalContentButton = document.querySelector('.content__button')

let toggle5 = false;
modalContentButton.addEventListener('click', () => {
    toggle5 = !toggle4;

    if (toggle5) {
        modalVideoInvite.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})


//modal 6
let modalVideoReview1 = document.querySelector('.modal__video-review-1')
let modalVideoReview2 = document.querySelector('.modal__video-review-2')
let modalVideoReview3 = document.querySelector('.modal__video-review-3')
let modalVideoReview4 = document.querySelector('.modal__video-review-4')
let reviewBlock = document.querySelectorAll('.review__block')

let toggle6 = false;
reviewBlock[0].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[1].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[2].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[3].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
modalVideoReview1.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview2.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview3.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalVideoReview4.addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalVideoReview4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})

//modal7
let modalAbout1 = document.querySelector('.modal__about-1')
let modalAbout2 = document.querySelector('.modal__about-2')
let modalAbout3 = document.querySelector('.modal__about-3')
let modalAbout4 = document.querySelector('.modal__about-4')
let modalAboutClose = document.querySelectorAll('.modal__about-close')

reviewBlock[4].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout1.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[5].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout2.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[6].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout3.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})
reviewBlock[7].addEventListener('click', () => {
    toggle6 = !toggle6;

    if (toggle6) {
        modalAbout4.style = `
        transition-duration: 500ms;
        opacity: 1;
        visibility: visible;
        `
        body.style.overflow = 'hidden'
    }
})


modalAboutClose[0].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout1.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[1].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout2.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[2].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout3.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})
modalAboutClose[3].addEventListener('click', () => {
    toggle6 = false;

    if (!toggle6) {
        modalAbout4.style = `
        transition-duration: 500ms;
        opacity: 0;
        visibility: hidden;
        `
        body.style.overflow = 'visible'
    }
})