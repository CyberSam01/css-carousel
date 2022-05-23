const slides = document.getElementsByClassName("carousel-item")
let slidePosition = 0;
const totalSlides = slides.length

const btnPrev = document.getElementById("carousel-button-prev")
const btnNext = document.getElementById("carousel-button-next")

btnPrev.addEventListener("click", moveToPrevSlide)
btnNext.addEventListener("click", moveToNextSlide)


function moveToNextSlide() {
    if (slidePosition === totalSlides -1) {
        slidePosition = 0;
        element = document.querySelector(".carousel-item-visible")
        element.classList.remove("carousel-item-visible")
        slides[slidePosition].classList.add("carousel-item-visible")
    } else {
        slidePosition += 1;
        element = document.querySelector(".carousel-item-visible")
        element.classList.remove("carousel-item-visible")
        slides[slidePosition].classList.add("carousel-item-visible")
    }
}

function moveToPrevSlide() {
    if (slidePosition === 0) {
        slidePosition = 2;
        element = document.querySelector(".carousel-item-visible")
        element.classList.remove("carousel-item-visible")
        slides[slidePosition].classList.add("carousel-item-visible")
    } else {
        slidePosition -= 1;
        element = document.querySelector(".carousel-item-visible")
        element.classList.remove("carousel-item-visible")
        slides[slidePosition].classList.add("carousel-item-visible")
    }
}