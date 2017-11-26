$('document').ready(function() {

    //portfolio functionality 
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

    // Bouncing Arrow Fade
    $(window).scroll(function(){
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250); 
      //250 is fade pixels
      });

    //Contact Form
      $("#contactLink").click(function() {
        $('html, body').animate({
            scrollTop: $("form").offset().top
        }, 500);
    });
});