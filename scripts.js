function setCss() {
    var deviceHeight = screen.height;
    if (deviceHeight < 769) {
        $('.fix-height').css('min-height', deviceHeight + 'px');
        $('.hero').css('height', deviceHeight + 'px');
    }
}

$(document).ready(function() {
    $('.directions-map').on('click', function () {
        $('.directions-map iframe').css('pointer-events', 'auto');
    });

    $('.directions-map').on('mouseleave', function() {
        $('.directions-map iframe').css('pointer-events', 'none');
    });

    $('.mobile-top-menu-icon').on('click', openMenu);

    $('.mobile-top-menu a.close-menu-icon').on('click', closeMenu);

    // find device height for css properties
    // scroll gets jumpy if I use vh
    setCss();
});

function openMenu() {
    $('.mobile-top-menu').addClass('open');
}

function closeMenu() {
    $('.mobile-top-menu').removeClass('open');
}
