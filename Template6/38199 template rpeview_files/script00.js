$(document).ready(function() {
	// hover
	
	$('#logo').hover(function(){
		$(this).find('span img').css({left:-60, top:-60, width:60, height:60, right:'auto', bottom:'auto'}).stop().animate({width:'140%', height:'140%'},150, 'easeOutCirc', function(){
			$(this).css({left:'auto', bottom:-60, right:-60, top:'auto'}).animate({width:60, height:60},150, 'easeInCirc')																																	 
		})
	}, function(){})
	
	$('#caption a').hover(function(){
		$(this).find('img').stop().animate({paddingLeft:10}, 500, 'easeOutBack') 
	}, function(){
		$(this).find('img').stop().animate({paddingLeft:0}, 500, 'easeInBack') 
	})
	
	$('footer a').hover(function(){
		$(this).stop().animate({color:'#fff'})						 
	}, function(){
		$(this).stop().animate({color:'#242120'})						 
	})
	
	$('.list1 a').hover(function(){
		$(this).stop().animate({color:'#f0af00'})						 
	}, function(){
		$(this).stop().animate({color:'#26251e'})						 
	})
	
	if  ($.browser.webkit) {
	
	$('.button1').hover(function(){
		$(this).find('.left_mask').stop().animate({left:'0%'},600, 'easeInSine')
		$(this).find('.right_mask').stop().animate({right:'0%'},600, 'easeInSine')						 
	}, function(){
		$(this).find('.left_mask').stop().animate({left:'-100%'},600, 'easeOutSine')
		$(this).find('.right_mask').stop().animate({right:'-100%'},600, 'easeOutSine')						 
	})
		
	} else {
	
	$('.button1').hover(function(){
		$(this).find('.left_mask').stop().animate({left:0},600, 'easeInSine')
		$(this).find('.right_mask').stop().animate({right:0},600, 'easeInSine')						 
	}, function(){
		$(this).find('.left_mask').stop().animate({left:'-100%'},600, 'easeOutSine')
		$(this).find('.right_mask').stop().animate({right:'-100%'},600, 'easeOutSine')						 
	})
	
	}
	
	$('.link1').hover(function(){
		$(this).stop().animate({color:'#000'})					   
	}, function(){
		$(this).stop().animate({color:'#9a9a9a'})					   
	})
	
	$('.submenu_1 span').css({opacity:0})
	
	$('.submenu_1 li').hover(function(){
		$(this).find('> span').stop().animate({opacity:1})
	}, function(){
		if (!$(this).hasClass('sfHover')) {
			$(this).find('> span').stop().animate({opacity:0})
		}
	})
	
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	$('#content > ul > li').each(function(){
		$(this).data({height:$(this).height()})								  
	})
	
	$('.close span').css({opacity:0})
	
	$('.close').hover(function(){
		$(this).find('span').stop().animate({opacity:1})					   
	}, function(){
		$(this).find('span').stop().animate({opacity:0})					   
	})
	
 });
$(window).load(function() {	
	/*
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:63,
		trackCl:'track',
		shuttleCl:'shuttle'
	})	
	*/
	
	$('#bg_pagination a').each(function(e){
		$(this).data({num:e})							 
	})
	
	$('#caption li').css({left:-1200})
	$('#caption .active').css({left:0})
	
	$('#bg_pagination a').click(function(){
		var num=$(this).data('num');
		if (!$(this).parent().hasClass('active')) {
			$('#caption .active').removeClass('active').stop().animate({left:-1200},600, 'easeOutCirc', function(){
				$('#caption li').eq(num).addClass('active').stop().animate({left:0},600,'easeInCirc')	
			});
		}
	})
	
	$('#bgStretch').bgStretch({
			align:'rightTop',
			navs:$('#bg_pagination').navs({
				hoverIn:function(li){
					$('img',li).stop().animate({opacity:1})
					$('.act_box',li).stop().animate({opacity:1})
					$('.caption',li).css({}).stop().animate({top:0})
				},
				hoverOut:function(li){
					$('img',li).stop().animate({opacity:0.3})
					$('.act_box',li).stop().animate({opacity:0})
					$('.caption',li).css({}).stop().animate({top:10})
				}	
			})
	}).sImg({
			spinner:$('.spinner').css({opacity:.7}).hide()
	})
	
	
	
	$('#bg_pagination').navs(0)
	
	
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){
			$('> a > .left_mask',li).stop().animate({left:'0%'},600, 'easeInSine')
			$('> a > .right_mask',li).stop().animate({right:'0%'},600, 'easeInSine')
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> a > .left_mask',li).stop().animate({left:'-100%'},600, 'easeOutSine')
				$('> a > .right_mask',li).stop().animate({right:'-100%'},600, 'easeOutSine')
			}
		}				
	})	
	content.tabs({
		actFu:function(_){
			if (_.prev) {
				_.prev.stop().animate({ height:0},600,'easeOutCirc', function(){
					_.prev.css({display:'none'})
					if (_.curr) {
						$('#content').stop().animate({height:_.curr.data('height')})
						_.curr.css({display:'block'}).stop().animate({ height:_.curr.data('height')},600,'easeOutCirc');
					}
				})
			} else {
				if (_.curr) {
					$('#content').stop().animate({height:_.curr.data('height')})
					_.curr.css({display:'block'}).stop().animate({ height:_.curr.data('height')},600,'easeOutCirc');
				} 
			}
		},
		preFu:function(_){						
			_.li.css({position:'absolute', height:0, display:'none'});
			$('#content').css({height:674})
		}
	})
	nav.navs(function(n, _){
		if (n=='close' || n=='#!/') {
			content.tabs(n);
			$.when($('> ul > li', content)).then(function(){
				$('#splash').stop().animate({height:674}, function(){$(this).css({overflow:'visible'})})
				$('#content').stop().animate({height:674})
			})
			
		} else {
			$('#splash').stop().animate({height:0})
			$.when($('#splash')).then(function(){
				content.tabs(n);										  
			})
		}
	})
	
	/*
	var m_top=0
	function centre() {
		var h=$(window).height();
		if (h>h_cont+425) {
			m_top=(h-h_cont-425)/2;
		} else {
			m_top=0
		}
		$('.container_16').stop().animate({paddingTop:m_top})
		
	}
	centre();
	$(window).resize(centre);
	*/
})