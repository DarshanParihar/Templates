$(window).load(function(){
    
    // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
    
    if($.browser.msie && $.browser.version<9)
    {
        aniButtonDuration = 0;
        ie = true;
    }
    //resize
   	var mainDIV = $('.main');

    $(window).resize(function()
    {
       resizeContent(500); 
    });
    
    function resizeContent(_animationSpeed)
    {
        var window_H = $(window).height() - 110;
        var mainDIV_H = 730;
         
        if (window_H > mainDIV_H && window_H > 730 ) {
			mainDIV.stop().animate({paddingTop:~~((window_H - mainDIV_H)/2)}, _animationSpeed, 'easeOutCubic');	
		} else {
			mainDIV.stop().animate({paddingTop:0}, _animationSpeed, 'easeOutCubic');	
		}
    }
    
    resizeContent(0);
    
    
	$('#bgStretch')
		.bgStretch({
			align:'rightBottom',
			navigs:$('.bgNav').navigs()
		}).sImg({
			spinner:$('.gall_spinner').hide()
		})
        
    $('.privacy span a').bind('click',function(){
         $('html,body').stop().animate({scrollTop:'0'}, 500, 'easeInOutCubic');
    });
     
     $('.menu > a').find('b').stop().animate({opacity:0}, 0,'easeOutCubic')
     
     $('.menu > a').hover(function()
     {
         $(this).find('b').stop().animate({opacity:1}, aniButtonDuration,'easeOutCubic')					   
     }, function(){
         $(this).find('b').stop().animate({opacity:0}, aniButtonDuration,'easeOutCubic')						   
     })
         
  
     
    /////////////////////////////////////////////////////////////////////////// 
    //                           content switch                              //
    ///////////////////////////////////////////////////////////////////////////
    
    $('ul#menu').superfish({
      delay:       700,
      animation:   {height:'show'},
      speed:       700,
      autoArrows:  false,
      dropShadows: false
    });
    
    var content=$('#content'),
	    footerNav=$('.footer_menu');
	    nav=$('.menu');
     
    var footerMenuSelector = $('#footer_block .menu_selector'); 
    var menuSelector = $('.menu .menu_selector'); 
    var backW = 0;
    var backX = 0;
    var footerBackW = 0;
    var footerBackX = 0;
    var disappear = true;
    
    
    content.tabs({
		preFu:function(_)
        {
	        $('header').css({paddingTop:'100px'});
            content.css({display:'none', top:'350px'});	  
			_.li.css({display:'none'});			
		}
		,actFu:function(_)
        {
            if(_.n != 0 && _.pren > 0){
                aniDelay = 830;
            }else{
                 aniDelay = 10;
            }
            
			if(_.curr){
				_.curr
                    .css({display:'block', top:'-480px'})
					.stop()
					.delay(aniDelay).animate({top:'0px'}, 800,'easeOutBack');
            }
			if(_.prev){
				_.prev
					.stop()
					.animate({top:'-480px'}, 800,'easeInBack', function(){
					     $(this).css({display:'none'});
					})
            }
            if(_.n > 0){
		          $('header').stop().animate({paddingTop:'0px'}, 600, 'easeOutCubic');
                  $('#menu').css({display:'block'});
                  content.stop().css({display:'block'}).animate({top:'0px'}, 800, 'easeOutBack');
		    } 
            if(_.n == 0){
                  _.curr.css({display:'none'});
		          $('header').stop().delay(450).animate({paddingTop:'100px'}, 800, 'easeOutCubic');
                  $('#menu').delay(700).fadeOut(100);
                  content.stop().animate({top:'400px'}, 800, 'easeInBack', function(){
                      $(this).css({display:'none', top:'350px'});
                  });
		    }
		}
	})
    
   
   // MAIN MENU     
   menuSelector.css({left:'0px', width:'0px'});
   if(disappear)
       menuSelector.css({visibility:'hidden'})
       
   nav.navs({
		useHash:true,
        defHash:'#!/page_home',
		hoverIn:function(li){
            menuSelector.css({visibility:'visible'}).stop().animate({left:li.position().left, width:li.width()}, 300, 'easeOutCubic');
		},
		hoverOut:function(li){
			menuSelector.stop().animate({left:backX, width:backW}, 300, 'easeOutCubic', function(){
			     if(disappear)
			        $(this).css({visibility:'hidden'})
			});
		}				
    })	
        
   nav.navs(function(n, _){
		content.tabs(n);
        
        if(_.n > -1){
            disappear = false;
            backX = _.li.eq(_.n).position().left;
            backW = _.li.eq(_.n).width();
            menuSelector.css({visibility:'visible'}).stop().animate({left:backX, width:backW}, 300, 'easeOutCubic');
        } else {
            disappear = true;
            backX = 0;
            backW = 0;
            menuSelector.stop().animate({left:backX, width:backW}, 300, 'easeOutCubic', function(){
			     if(disappear)
			         $(this).css({visibility:'hidden'})
			});
        }
        
	})	     
    
   // FOOTER MENU
   footerMenuSelector.css({left:'0px', width:'0px'});
   if(disappear)
       footerMenuSelector.css({visibility:'hidden'}) 
    
   footerNav.navs({
		useHash:true,
        defHash:'#!/page_home',
		hoverIn:function(li){
            footerMenuSelector.css({visibility:'visible'}).stop().animate({left:li.position().left, width:li.width()}, 300, 'easeOutCubic');
		},
		hoverOut:function(li){
			footerMenuSelector.stop().animate({left:footerBackX, width:footerBackW}, 300, 'easeOutCubic', function(){
			     if(disappear)
			        $(this).css({visibility:'hidden'})
			});
		}				
	})
    
    
    footerNav.navs(function(n, _){
		content.tabs(n);
        
        if(_.n > -1){
            disappear = false;
            footerBackX = _.li.eq(_.n).position().left;
            footerBackW = _.li.eq(_.n).width();
            footerMenuSelector.css({visibility:'visible'}).stop().animate({left:footerBackX, width:footerBackW}, 300, 'easeOutCubic');
        } else {
            disappear = true;
            footerBackX = 0;
            footerBackW = 0;
            footerMenuSelector.stop().animate({left:footerBackX, width:footerBackW}, 300, 'easeOutCubic', function(){
			     if(disappear)
			         $(this).css({visibility:'hidden'})
			});
        }
        
	})
    

 
})