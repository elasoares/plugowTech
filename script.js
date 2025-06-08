//----- Menu Hamburguer -----
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

// Alternar visibilidade ao clicar no hambúrguer
hamburger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
});

// Ocultar o menu ao tirar o mouse
nav.addEventListener('mouseleave', () => {
    nav.classList.remove('nav-active');
});


//----- Experiências -----

const left = ScrollReveal({
    origin: "left",
    distance: "80px",
    duration: 1100,
    reset: true,
})

left.reveal(".headline")

const right = ScrollReveal({
    origin: "right",
    distance: "80px",
    duration: 1100,
    reset: true,
})

right.reveal(".right")

const bottom = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 1100,
    reset: true,
})

bottom.reveal(".bottom")

//----- Initialize Swiper -----
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", 
        prevEl: ".swiper-button-prev", 
    },
});