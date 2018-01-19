$('document').ready(function() {
    var curURL = window.location.href.split('/');
    var lastPath = curURL[curURL.length - 1];
    
    if (lastPath === 'contact') {
        window.scrollTo(0,document.body.scrollHeight);
    };
    //portfolio functionality 
    $('.thumbImage').click(function() {
        var thumbAtt = $(this).attr('src');
        $('#portOverlay').css('visibility', 'visible');
        $('#portOverlay').css('opacity', '1');
        $('#portItemDisplay').attr('src', thumbAtt);
    }); 

    $('#portItemDisplay').click(function() {
        $('#portOverlay').css('visibility', 'hidden');
        $('#portOverlay').css('opacity', '0');
        $('#portItemDisplay').attr('src', '');
    });

    // Bouncing Arrow Fade
    $(window).scroll(function(){
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
        $("#scroll").css("opacity", 1 - $(window).scrollTop() / 250); 
      //250 is fade pixels
      });

    //Contact Form
      $("#contactLink, .buttonBurgandy").click(function() {
        $('html, body').animate({
            scrollTop: $("form").offset().top
        }, 500);
    });


});