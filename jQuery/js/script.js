(function($) {
    
    var styles = {
        background: '#9b59b6',
        color: '#FFF',
        borderRadius: '4px',
        padding: '16px'
    }
    
    var h1 = $('h1');
    
    var webHeight = $(window).height();
    
    
    

    $('.btn_fruitcake').click(function() {
        h1.animate({ width: 240 });
        h1.css(styles);
        h1.animate({top: webHeight}, 1000).fadeOut(100);
    });
    
    
})(jQuery);
  






