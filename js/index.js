function scrollNav() {
    $(".menu a").click(function(){
        $(".active").removeClass("active");
        $(this).addClass("active");
    
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 300);
    return false;
    });
}
scrollNav();