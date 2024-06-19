let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    slides.forEach((slide, index) => {
        slide.style.display = 'none';
    });

    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slide').length - 1;
    }
    showSlides();
}

function nextSlide() {
    showSlides();
}

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#ff69b4';
    } else {
        navbar.style.backgroundColor = '#ffb6c1';
    }
});
