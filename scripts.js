function setCss() {
    if (screen.height < 769) {
        var deviceHeight = screen.height + 'px';
        $('.fix-height').css('min-height', deviceHeight);
        $('.hero').css('height', deviceHeight);
        $('body').css('background-size', '100% ' + deviceHeight);
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
