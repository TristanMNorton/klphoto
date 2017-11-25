$('document').ready(function() {
    $('.thumbImage').click(function() {
        var thumbAtt = $(this).attr('src');
        $('#portOverlay').css('visibility', 'visible');
        $('#portOverlay').css('opacity', '1');
        $('#portItemDisplay').attr('src', thumbAtt);
    }); 

    $('#portOverlay').click(function() {
        $('#portOverlay').css('visibility', 'hidden');
        $('#portOverlay').css('opacity', '0');
        $('#portItemDisplay').attr('src', '');
    });
});