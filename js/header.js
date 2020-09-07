(function($){

    $('.depth1 > li').hover(
        function(){
            $(this).find('.depth2').stop().slideDown(500)
        },
        function(){
            $(this).find('.depth2').stop().slideUp(300)
        }
    )





})(jQuery)