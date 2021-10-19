/* (function($) {
    
    var list = $('.portfolio');

	list.find('.portfolioItemRightBig').slideUp();
    
    
    
    list.find('.portfolioItemRight').on('click', function(event) {
            $(this)
                .hide()    
                .next().slideToggle()
			     .siblings('.portfolioItemRightBig').slideUp();

		event.preventDefault();
        
    });
        
    
    
      
      list.find('.portfolioItemLeft:nth-of-type(1)').on('click', function() {
        
         
         
        $('.portfolioItemRight').slideUp(2000); 
        
        
    }); 
    
    


})(jQuery);*/

(function($) {

var list = $('.portfolio');

list.find('.portfolioItemRightBig').slideUp();

list.find('.portfolioItemRight').on('click', function(event) {
  
  var small = $(this),
      big = $(this).next();

  small.hide();
  big.slideToggle();
  
  list.find('.portfolioItemRightBig').not(big).slideUp();
  list.find('.portfolioItemRight').not(small).show();

  event.preventDefault();

});
  
})(jQuery);
  