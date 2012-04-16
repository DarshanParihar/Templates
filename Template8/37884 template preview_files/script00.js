$(document).ready(function() {
    
    //icons
    $('#icons .img_act').css({opacity:0})
	
	$('#icons a').hover(function(){
		$(this).find('.img_act').stop().animate({opacity:1})						 
	}, function(){
		$(this).find('.img_act').stop().animate({opacity:0})						 
	})
	
	//carousel    
    jQuery(document).ready(function() {
    jQuery('#mycarousel').jcarousel();
    
    //zoomImg 
    
   	$('.zoomImg').fadeTo(500, 0)
    
	$('.zoomImg').hover(function(){

         //  $(this).stop().animate({opacity: 1}, 200, 'easeOutSine');
          $(this).stop().fadeTo(500, 0.4)
	}, function(){
          //$(this).stop().animate({opacity: 0}, 200, 'easeOutSine');
        $(this).stop().fadeTo(500, 0)
	}) 
    
    //moreImg 
    
   	$('.moreImg').fadeTo(500, 0)
    
	$('.moreImg').hover(function(){

         //  $(this).stop().animate({opacity: 1}, 200, 'easeOutSine');
           $(this).stop().fadeTo(500, 0.4)
	}, function(){
          //$(this).stop().animate({opacity: 0}, 200, 'easeOutSine');
        $(this).stop().fadeTo(500, 0)
	}) 
    
});

        // ieCheck
    var ie = false;
    var aniButtonDuration = 350;
    
    if($.browser.msie){
        aniButtonDuration = 0;
        ie = true;
    }  


    
	// hover
    $('.splash_menu a').find('img').stop().animate({opacity:0},0)
    $('.splash_menu span.bgbtns').find('img').stop().animate({opacity:1},0)
    $('.splash_menu a').find('strong').stop().animate({opacity:0},0)
    
    
	$('.splash_menu a').hover(function(){
        $(this).find('strong').stop().animate({opacity:1},aniButtonDuration)
		$(this).find('img').stop().animate({opacity:1})
        $(this).find('span.t1').stop().animate({opacity:0},aniButtonDuration)

        						 
	}, function(){
		$(this).find('img').stop().animate({opacity:0})	
        $('.splash_menu span.bgbtns').find('img').stop().animate({opacity:1})
        $(this).find('strong').stop().animate({opacity:0},aniButtonDuration)
        $(this).find('span.t1').stop().animate({opacity:1},aniButtonDuration)
					 
	})
	
	$('.prev, .next').hover(function(){
		$(this).stop().animate({opacity:0.5})							 
	}, function(){
		$(this).stop().animate({opacity:1})							 
	})
	
	
	$('ul#menu').superfish({
      delay:       400,
      animation:   {height:'show'},
      speed:       320,
      autoArrows:  false,
      dropShadows: false,
    });

	//gallery 
	$("#gallery1").jCarouselLite({
			btnNext: ".next",
		 	btnPrev: ".prev",
       		mouseWheel: true,
			visible: 4,
			speed: 600,
			easing: 'easeOutCirc'
	});
		
	var Img='.'+$(".gallery1_big_img img#active").attr('class')
	$(".gallery1_big_img img").css({opacity:0});
	$(".gallery1_big_img img#active").css({opacity:1});
	$(".caption > div").css({opacity:0, display:'none'});
	$(".caption").find(Img).css({opacity:1, display:'block'});
	$("#gallery1 a").click(function(){
  		var ImgId = '.'+$(this).attr("href").slice(1);
  		if (ImgId!=Img) {
			 $(Img).stop().animate({opacity:0}, 600, function(){$(this).css({display:'none'})})
			 $(Img).attr({id:''});
			 $(ImgId).css({display:'block'}).stop().animate({opacity:1}, 600, function(){});
			 $(ImgId).attr({id:'active'})
		}
		Img=ImgId;
  	  return false;
   })
	
 });

$(document).ready(function() {
	var h_cont=780;
	var h, new_h;
	setHeight();
	h=new_h;
	setSize();
	function setHeight(){
		new_h=$(window).height();
	}
	function setSize(){
		if (h>h_cont) {
			$('.main').stop().animate({paddingTop:~~((h-h_cont)/2)});	
		} else {
			$('.main').stop().animate({paddingTop:0});	
		}
	}
	setInterval(setNew,1);
	function setNew(){
		setHeight();
		if (h!=new_h) {
			h=new_h;
			setSize();
		}
	}
})

$(window).load(function() {	
	//form
 	   $('#form1').forms({

 	     ownerEmail:'#'

 	     })

	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:54,
		trackCl:'track',
		shuttleCl:'shuttle'
	})		
	$('.track').css({height:0})
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('> a strong',li).css({display:'block'}).stop().animate({height:'65px'},350, 'easeOutQuint');
		},
		hoverOut:function(li){
			if (!$(li).hasClass('sfHover')) {$('> a strong',li).stop().animate({height:'0px'},550, 'easeInOutQuint', function(){$(this).css({display:'none'})});}
		},
		hover:true
	})		
	nav.navs(function(n, _){
		content.cont_sw(n);
	})
    
        // ieCheck
    var ie = false;
    var aniButtonDuration = 600;
    
    if($.browser.msie){
        aniButtonDuration = 0;
        ie = true;
    }  
    
	content.cont_sw({
		showFu:function(){
			var _=this					
			$.when(_.li).then(function(){	
				_.next.css({display:'block'}).stop().animate({height:438},700,"easeOutExpo");	
			});
            if($.browser.msie){
            $('.menu').show();
            ie = true;
            }
            $('.menu').show().stop().animate({opacity:1},aniButtonDuration)
                
			$('#splash').stop().animate({height:0},450,"easeInExpo")
			$('#back').css({display:'block'}).stop().animate({opacity:1},aniButtonDuration, function(){$(this).css({opacity:'none'})})
		},
		hideFu:function(){
			var _=this
			_.li.stop().animate({height:0},400,"easeInExpo", function(){$(this).css({display:'none'})})
			$('#splash').stop().animate({height:550},1000, "easeInOutExpo")           
			$('.menu').stop().animate({opacity:0},aniButtonDuration)
            
            if($.browser.msie){
            $('.menu').hide();
            ie = true;
            }

			$('#back').stop().animate({opacity:0},aniButtonDuration, function(){$(this).css({display:'none'})})
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
			$('.menu').css({opacity:0}).hide();
			$('#back').css({opacity:0, display:'none'})
		}
	})
    
    
})