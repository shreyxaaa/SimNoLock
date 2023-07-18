$(document).ready(function() {
    $ludyTrigger = $('.ludy-trigger');
    $ludyOptions = $('.ludy-options');

    $ludyTrigger.on('click', function() {
        $(this).slideUp(300, function() {
            $ludyOptions.slideDown(300);
        });
    });
});