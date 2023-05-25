const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.custom-prev-button');
const nextButton = document.querySelector('.custom-next-button');
const currentSlideNumber = document.querySelector('.current-slide');
const totalSlidesNumber = document.querySelector('.total-slides');
let activeSlide = 0;

function showSlide(index) {
    const slides = carousel.querySelectorAll('.slide');
    slides.forEach((slide) => {
        slide.style.display = 'none';
    });

    slides[index].style.display = 'block';
    currentSlideNumber.textContent = index + 1;
}

prevButton.addEventListener('click', () => {
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = carousel.querySelectorAll('.slide').length - 1;
    }
    showSlide(activeSlide);
});

nextButton.addEventListener('click', () => {
    activeSlide++;
    if (activeSlide >= carousel.querySelectorAll('.slide').length) {
        activeSlide = 0;
    }
    showSlide(activeSlide);
});

totalSlidesNumber.textContent = carousel.querySelectorAll('.slide').length;

showSlide(activeSlide);