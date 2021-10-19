(function($) {


    
/* STICKY navi */
    
$('nav').removeClass('sticky');

$('.sticky_trigger').waypoint(function(direction) {
    if (direction == "down") {
        $('nav').addClass('sticky');
    } else {
        $('nav').removeClass('sticky');
    }
}, {
   offset: '4%' 
});  
    
    
    
    
/* MOBILE NAV */ 
    
    
    
    
  $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(200);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
});
    
    
    
  
})(jQuery);
  





