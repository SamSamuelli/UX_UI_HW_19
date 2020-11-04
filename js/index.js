function scrollNav() {
    console.log("here")
    $(".menu a").click(function(){
        $(this).addClass("active");        
        $(this).siblings().removeClass("active");
    
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 300);
    return false;
    });
}
scrollNav();