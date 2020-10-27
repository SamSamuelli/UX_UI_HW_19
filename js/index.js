function scrollNav() {
    console.log("here")
    $(".menu a").click(function(){
        $(".active").addClass("active");
        $(this).siblings().removeClass("active");
    
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 160
    }, 300);
    return false;
    });
}
scrollNav();