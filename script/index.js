$(document).ready(function () {
    $('.slider-inner img:first-child').addClass('active').css('z-index', 10);
    $('.next').on('click', function () {
        var currentImg = $('.active');
        var nextImg = currentImg.next();
        if (nextImg.length) {
            currentImg.removeClass().css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        } else {
            $('.slider-inner img').removeClass().css('z-index', -10);
            $('.slider-inner img:first-child').addClass('active').css('z-index', 10);
        }
    });
});