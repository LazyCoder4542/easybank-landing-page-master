$(document).ready(function() {
    $('#open-menu, #close-menu').click(function() {
        $('.menu ul').toggle('0');
        $('#close-menu').toggle();
        $('#open-menu').toggle();
        //$('body').toggleClass('scroll-paused')
    });
});