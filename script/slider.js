let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Calculate the new index and ensure it wraps around properly
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
    const totalSlides = document.querySelectorAll('.slide').length;
    currentSlide = (currentSlide + step + totalSlides) % totalSlides; // Ajuste o índice currentSlide para garantir que ele "cicla" adequadamente
    showSlide(currentSlide);
}

// Mostrar o primeiro slide ao carregar a página
window.onload = function () {
    showSlide(currentSlide);
};
