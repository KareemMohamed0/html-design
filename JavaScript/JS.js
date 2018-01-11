$(document).ready(function(){
    
    	  'use strict';

    $("html").niceScroll({
		
		cursorcolor :'#E57373',
		cursorwidth :"8px",
		cursorborderradius :0,
		cursorborder:'none',
        
	});
    
$('.header .OverLay').height($(window).height());    
        $(window).resize(function(){
            $('.header .OverLay').height($(window).height()); 
                                        console.log($('.header').height());

    });
                            console.log($('.header').height());
        
         $(window).scroll(function (event) {
       var scroll = $(window).scrollTop();
             
              if(scroll>50)
            {
                $('.navbar-default').css({
                    backgroundColor:'#616161'
                });
                
            }
             else{
                  $('.navbar-default').css({
                    backgroundColor:'transParent'
                });
             }
    });

        $(".navbar-default .navbar-nav>li").click(function(){
                        $(this).addClass('active').siblings().removeClass('active');
        $('html,body').animate({
            scrollTop:$('#'+$(this).data('value')).offset().top
        },1000);   
    });
  
    $('.down i').click(function(){
        
        $('html,body').animate({
            scrollTop:$('#about0').offset().top
        },1000); 
        
    });
    
    $(window).load(function(){
        $('.spinner').fadeOut(500,function(){
          $(this).parent().fadeOut(500);  
        });
    });
    
});
