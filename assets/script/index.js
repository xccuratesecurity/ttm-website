$(window).on("scroll", function () {
    var bodyScroll = $(window).scrollTop(),
        navbar = $(".navbar")
    if (bodyScroll > 300) {
        navbar.addClass("fixed-top");
    } else {
        navbar.removeClass("fixed-top");
    }
});

$("#navbarNavDropdown").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarNavDropdown").collapse('hide');
    });
});

$('.nav-item .nav-link').click(function (e) {
    $('.nav-item .nav-link').removeClass('active');
    $(this).addClass('active');
});

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop:true,
    stagePadding: 50,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:4
        },
        1000:{
            items:7
        }
    }
})