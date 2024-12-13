
// ----- Quarto Branch: Elaine Tavares -----
// ScrollReveal().reveal('.headline')

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
