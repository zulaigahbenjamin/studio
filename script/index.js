$(document).ready(function () {
    let currentSlide = 0;
    const slides = $('.slide');
    let dotsContainer = $('.dots-container');

    function showSlide(index) {
        currentSlide = (index + slides.length) % slides.length;
        slides.css('transform', `translateX(${-100 * currentSlide}%)`);
        dots.removeClass('active');
        dots.eq(currentSlide).addClass('active');
    }

    function changeSlide(offset) {
        showSlide(currentSlide + offset);
    }

    $('.next.arrow').on('click', function () {
        changeSlide(1);
    });

    for (let i = 0; i < slides.length; i++) {
        dotsContainer.append('<div class="dot"></div>');
    }

    let dots = $('.dots-container .dot');

    dotsContainer.on('click', '.dot', function () {
        const dotIndex = $(this).index();
        showSlide(dotIndex);
    });

    showSlide(currentSlide);
});
