$(document).scroll(function() {
    AOS.init();

    // full page scroll js start
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        scrollHorizontally: true,
        scrollingSpeed: 2000
    });
    // full page scroll js end
});