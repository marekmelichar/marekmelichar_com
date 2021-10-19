(function($) {

var list = $('.portfolio_body');

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
  