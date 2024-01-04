let slideIndex = 0;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("slide");

    for (let slide of slides) {
        slide.style.display = "none";
        slide.style.opacity = 0;
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => (slides[slideIndex - 1].style.opacity = 1), 0);

    slideTimer = setTimeout(showSlides, 2000);
}

function plusSlides(n) {
    clearTimeout(slideTimer);
    slideIndex += n;
    const slides = document.getElementsByClassName("slide");

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex < 1) {
        slideIndex = slides.length;
    }

    for (let slide of slides) {
        slide.style.display = "none";
        slide.style.opacity = 0;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => (slides[slideIndex - 1].style.opacity = 1), 0);

    slideTimer = setTimeout(showSlides, 2000);
}

document.addEventListener("DOMContentLoaded", showSlides);