/*global console, $*/

$(window).scroll(function () {
    
    'use strict';
   
    var wScroll = $(this).scrollTop();
    
    if (wScroll > $('.ourwork .item').offset().top - ($(window).height() / 1.4)) {
       
        $('.ourwork .item').each(function (i) {
        
            setTimeout(function () {
                
                $('.ourwork .item').eq(i).addClass('is-showing');
                
            }, 150 * (i + 1));
        
        });
       
    }
    
});
