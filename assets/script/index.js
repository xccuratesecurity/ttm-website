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