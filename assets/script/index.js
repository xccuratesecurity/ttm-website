$(window).on("scroll", function () {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar")
    if (bodyScroll > 300) {
        navbar.addClass("fixed-top");
    } else {
        navbar.removeClass("fixed-top");
    }
});

$('.third-button').on('click', function () {
    $('.animated-icon3').toggleClass('open');
});

$("nav ul li a.close-menu").click(function () {
    $(".animated-icon3").click();
});

$('.nav-item .nav-link').click(function (e) {
    $('.nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
});