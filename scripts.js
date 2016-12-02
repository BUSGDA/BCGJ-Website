$(document).ready(function() {
    $('.directions-map').on('click', function () {
        $('.directions-map iframe').css('pointer-events', 'auto');
    });

    $('.directions-map').on('mouseleave', function() {
        $('.directions-map iframe').css('pointer-events', 'none');
    });
});
