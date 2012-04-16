$(document).ready(function() {
	// hover
	
	$('footer a').hover(function(){
		$(this).stop().animate({color:'#fff'})						 
	}, function(){
		$(this).stop().animate({color:'#959595'})						 
	})
	
	$('.link1').each(function(){
		var str=$(this).text();
		$(this).append('<span></span>')
		$(this).find('span').text(str)
	})
	
	Cufon.replace('.link1', { fontFamily: 'Steiner', hover:true });
	
	$('.link1 span').css({display:'none', opacity:0})
	
	$('.link1').hover(function(){
		$(this).find('span').css({display:'block'}).stop().animate({opacity:1})					   
	}, function(){
		$(this).find('span').stop().animate({opacity:0}, function(){$(this).css({display:'none'})})					   
	})
	
	$('.services a').hover(function(){
		$(this).stop().animate({color:'#fff'})						
	}, function(){
		$(this).stop().animate({color:'#979797'})						
	})
	
	$('.list1 a').hover(function(){
		$(this).stop().animate({color:'#ed1c24'})						 
	}, function(){
		$(this).stop().animate({color:'#fff'})						 
	})
	
	$('.link2').hover(function(){
		$(this).stop().animate({color:'#fff'})						 
	}, function(){
		$(this).stop().animate({color:'#ed1c24'})						 
	})
	
	$('.submenu_1 li').hover(function(){
		$(this).find('>a').stop().animate({color:'#fff'})								
	}, function(){
		$(this).find('>a').stop().animate({color:'#b4b4b4'})								
	})
	
	
	$('ul#menu').superfish({
      delay:       600,
      animation:   {height:'show'},
      speed:       600,
      autoArrows:  false,
      dropShadows: false
    });
	
	$('#content > ul > li').each(function(num){
		$(this).data({num:num})								  
	})
	
 });
$(window).load(function() {	
	
	// scroll
	$('.scroll').cScroll({
		duration:700,
		step:54,
		trackCl:'track',
		shuttleCl:'shuttle'
	})	
	
	
	// splash gallery 
	
	$('#splash > div > div').each(function(){
		str=$(this).find('.title').text();
		str=str.substr(0,1);
		$(this).find('.title').append('<span>'+str+'</span>');
		Cufon.replace('.title', { fontFamily: 'Steiner', hover:true });						  
	})
	
	$('#splash > div').css({display:'none'})
	$('#splash > div > div').css({opacity:0, display:'none'})
	
	var z_ind=[],
		position=[],
		gal=$('#splash'),
		li=$('#splash li'),
		amount=li.length;
	
	li.each(function(num){
		str=$(this).find('.title').text();
		str=str.substr(0,1);
		$(this).find('.title').append('<span>'+str+'</span>');
		Cufon.replace('.title', { fontFamily: 'Steiner', hover:true });
		$(this).find('.title span').css({opacity:0, display:'none'})
		$(this).data({num:num+1});
		topi=$(this).css('top');
		lefti=$(this).css('left');
		position[num+1]={top:topi, left:lefti};
		z_ind[num+1]=$(this).css('z-index');
	})
	
	function show_gal(){
		$('#splash').stop().animate({top:0, left:0}, function(){
			li.each(function(num){
				$(this).css({display:'block', zIndex:z_ind[num+1]}).stop().animate(position[num+1],800)			 
			})
			li.eq(0).addClass('active').siblings().removeClass('active').find('.img_gray').stop().animate({opacity:1}).parent().find('.title span').css({display:'block'}).stop().animate({opacity:0});
			li.eq(0).find('.img_gray').stop().animate({opacity:0})
			li.eq(0).find('.title span').css({display:'block'}).stop().animate({opacity:1})
			
			$('#splash > div > div').stop().animate({opacity:0}, function(){
				$(this).css({display:'none'})
				$('#splash > div').css({display:'none'})														  
			})
		})
	}
	
	function hide_gal(){
		li.each(function(num){
			topi=$(this).css('top');
			lefti=$(this).css('left');
			$(this).stop().animate(position[1],800, function(){
				if (!$(this).hasClass('active')) {
					$(this).css({display:'none'});
					$('#splash').stop().animate({top:-150, left:-378})
				}
			})			 
		})
	}
	
	li.eq(0).addClass('active');
	li.eq(0).find('.img_gray').stop().animate({opacity:0})
	li.eq(0).find('.title span').css({display:'block'}).stop().animate({opacity:1})
	
	li.hover(function(){
		$(this).find('.img_gray').stop().animate({opacity:0})
		$(this).find('.title span').css({display:'block'}).stop().animate({opacity:1})
	}, function(){
		if (!$(this).hasClass('active')) {
			$(this).find('.img_gray').stop().animate({opacity:1})
			$(this).find('.title span').stop().animate({opacity:0}, function(){$(this).css({display:'none'})})
		}
	})
	
	$('#splash a').click(function(){
		if (!$(this).parent().hasClass('active')) {
			left($(this).parent().data('num'))
			return false;
		}
	})
		
	function summ(a,b){
		if (a+b==amount) {return (a+b)} else return (a+b) % amount;
	}
	function left(i){
		for (var j=1; j<amount; j++) {
			li.eq(summ(i,j)-1).css('z-index',z_ind[j+1]).stop().animate(position[j+1],500,'easeOutCirc');
		}
		li.eq(i-1).addClass('active').css('z-index',z_ind[1]).stop().animate(position[1],500,'easeOutCirc').siblings().removeClass('active').find('.img_gray').stop().animate({opacity:1}).parent().find('.title span').stop().animate({opacity:0}, function(){$(this).css({display:'none'})});
		Cufon.replace('.title', { fontFamily: 'Steiner', hover:true });
	}
	
	//content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true,
		hoverIn:function(li){	
			$('> strong',li).stop().animate({opacity:1}, function(){
				if (li.hasClass('with_ul')) {
					$('> a > span',li).css({display:'block'}).stop().animate({bottom:-5})
				}
			})
		},
		hoverOut:function(li){
			if (!li.hasClass('with_ul') || !li.hasClass('sfHover')) {
				$('> strong',li).stop().animate({opacity:0})
			} 
		}				
	})	
	content.tabs({
		actFu:function(_){
			if (_.prev && _.curr) {
				_.prev.stop().animate({left:1600},800,'easeOutCirc', function(){
					_.prev.css({display:'none'})
					_.curr.css({display:'block'}).stop().animate({left:0},800,'easeOutCirc')
				})
			} else {
				if (_.curr) {
					$.when($('#splash li')).then(function(){
					$.when($('#splash')).then(function(){
						_.curr.css({display:'block'}).stop().animate({left:0},800,'easeOutCirc')
					})
					})
				}
				if (_.prev) {
					_.prev.stop().animate({left:1600},800,'easeOutCirc', function(){
						_.prev.css({display:'none'})
					})
				}
			}
		},
		preFu:function(_){						
			$('#content > ul > li').css({ position:'absolute', display:'none', left:1600})
			nav.css({display:'none'})
		}
	})
	nav.navs(function(n, _){	
		if (n=='close' || n=='#!/') {
			nav.fadeOut(400);
			show_gal();
			content.tabs(n);
		} else {
			nav.fadeIn(400);
			hide_gal();
			$('#splash > div').css({display:'block'})
			var number=$('#'+n.slice(3)).data('num')
			$('#splash > div > div').eq(number).css({display:'block'}).stop().animate({opacity:1}).siblings().stop().animate({opacity:0}, function(){$(this).css({display:'none'})})
			nav.find('li').not('.active').find(' > a span').css({display:'none', bottom:0})
			if (_.n!=-1) {
				nav.find('> ul > li').eq(_.n).find('> a span').css({display:'block'}).stop().animate({bottom:-5})
			}
			content.tabs(n);
		}
	})
	
	
	
	var m_top=0, h_cont=870;
	function centre() {
		var h=$(window).height();
		if (h>h_cont) {
			m_top=(h-h_cont)/2;
		} else {
			m_top=0
		}
		$('.center').stop().animate({paddingTop:m_top})
		
	}
	centre();
	$(window).resize(centre);
	
	
	
})