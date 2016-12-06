$(document).ready(function() {
    $('.directions-map').on('click', function () {
        $('.directions-map iframe').css('pointer-events', 'auto');
    });

    $('.directions-map').on('mouseleave', function() {
        $('.directions-map iframe').css('pointer-events', 'none');
    });

    $('.mobile-top-menu-icon').on('click', openMenu);

    $('.mobile-top-menu a.close-menu-icon').on('click', closeMenu);
});

function openMenu() {
    $('.mobile-top-menu').addClass('open');
}

function closeMenu() {
    $('.mobile-top-menu').removeClass('open');
}
