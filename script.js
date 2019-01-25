$(document).ready(function(){
    $('#checkboxmeat').on('click', function() {
        // $(this).is(":checked") ?  $('.meat').show() : $('.meat').hide();
        $('.meat').toggle('slow');
    });

    $('#checkboxvegi').on('click', function() {
        $('.vegi').toggle();
    });

    $('#checkboxfruit').on('click', function() {
        $('.fruit').toggle();
    })
});