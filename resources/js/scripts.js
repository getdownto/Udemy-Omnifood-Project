$(document).ready(function() {
    $('.js--section-features').waypoint(function(direction){
        if (direction == "down") {
            $('nav').addClass('sticky')
        }
        else {
            $('nav').removeClass('sticky')
        }
        
    }, {
        offset: '60px;'
    })
    
    $('.js--scroll-to-plans').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-plan').offset().top}, 1000);
    })
    
        $('.js--scroll-to-start').click(function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    })
    
    $('.js--nav-icon').click(function(){
        var nav = $('.js--main-nav')
        var icon = $('.js--nav-icon i')
        
        nav.slideToggle(200)
        
        if (icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close')
            icon.removeClass('ion-ios-menu')
        }
        else{
            icon.addClass('ion-ios-menu')
            icon.removeClass('ion-ios-close')
        }
    })
})