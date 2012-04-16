$(window).load(function() {
  	MSIE = ($.browser.msie) && ($.browser.version <= 8);
  	$('.page_spinner').fadeOut();
  	$('body').css({overflow:'visible'})
	$('#menu li:nth-child(odd)>a>span').css({padding:'0 28px 0 0'})
	$('#menu').find('li:nth-child(2)>a>span, li:nth-child(1)>a>span').css({top:'38%'})
	
	$('.button1,.button2').sprites({method:'gStretch', hover:true})
	$('.button1').hover(
        function(){
        	$(this).stop().animate({color:'#fff' }, 600)},
		function(){
        	$(this).stop().animate({color:'#952d0d' }, 600)})
				
	$('.button2').hover(
        function(){
        	$(this).stop().animate({color:'#fff' }, 600)},
		function(){
        	$(this).stop().animate({color:'#ad3e02' }, 600)})
	$('.up,.down').sprites({method:'simple', hover:true})
	
	$('.up').click(function(){$('.scroll').cScroll('up')
			return false})
	$('.down').click(function(){$('.scroll').cScroll('down')
			return false})
	var _logo = $('#content>h1');
	$('.bg_logo>img,.back>img').css({rotate:'45deg'});
	var _pos = 130;
	var _top = [_pos,_pos,-_pos,-_pos];
	var _left = [_pos,-_pos,_pos,-_pos];
	var time1 = 0;
	$('.img_clients li:first-child,.img_clients li:nth-child(4)').css({marginLeft:0})
	$('.img_clients .img_act').css({opacity:0});
	$('.img_clients a').hover(
        function(){
        	$(this).find('.img_act').stop().fadeTo(300,1)},
		function(){
        	$(this).find('.img_act').stop().fadeOut(300)})	
					
	$('.back_button').find('.img_act').css({top:-_pos, left:-_pos, display:'none'}),
	$('.back_button').hover(
        function(){
        	$(this).find('span').stop().animate({color:'#972e0e' }, 600)
				.css({textShadow: "#f05c38 1px 1px"})
				.parent().find('.img_act').css({display:'block'}).stop().animate({top:0,left:0}, 800, 'easeOutExpo')
        },
        function(){
            $(this).find('span').stop().animate({color:'#fff'}, 600, 'easeInExpo',function(){ $(this).css({textShadow: "#000 1px 1px 3px"})})
				.parent().find('.img_act').stop().animate({top:-_pos, left:-_pos}, 600, 'easeInExpo',function(){$(this).css({display:'none'})}) 
        }
    );
	$('#menu').superfish({
	   delay: 700,
	   animation: {
	       height: 'show'
		},
        speed: 300,
        autoArrows: false,
        dropShadows: false
    });
	
					
	
	$('#content').tabs({
		show:0,
		defHash:"#!/splash",
		preFu:function(_){
			_.li.css({display:'none'})
			for (var i = 0; i < $('#menu li').length; i++) 
				$('#menu>li').eq(i).css({top:_top[i],left:_left[i],dispay:'none'})
			$('.back>img').css({scale:[0,0]})
			$('.inner').css({opacity:0})
			
		}
		,actFu:function(_){							
			if(_.curr){		
				if (_.n==0) {
					setTimeout(function() {
					_.curr.css({'z-index':0, display:'block'})
					for (var i = 0; i < $('#menu li').length; i++) {
					_.curr.find('#menu>li').css({display:'inline-block'}).eq(i).stop().delay(i*80).animate({top:0,left:0}, 800, 'easeOutExpo')}},300)
					_logo.stop().delay(200).animate({left:0,top:287},800, 'easeInOutExpo')
					
				} else {
					if (_.pren >0){
						time1 = 400;
					} else {
						time1 = 0;
					}
					setTimeout(	
					function() {
					_logo.stop().animate({left:-403,top:-13},800, 'easeOutExpo')
					_.curr.css({'z-index':2, display:'block'}).find('.back>img').stop().delay(30).animate({ scale:[1,1]},600, 'easeOutExpo')
					_.curr.find('.inner').stop().delay(300).animate({opacity:1},500)
					setTimeout(	
					function() {_.curr.find('.select_button').css({display:'block'}).stop().animate({left:0}, 400, 'easeOutCubic')
					_.curr.find('.back_button').css({display:'block'}).stop().delay(100).animate({right:0}, 400, 'easeOutCubic')},200)
					},time1)
					
				}
			}
			if(_.prev) {
				if (_.pren==0){
					for (var i = 0; i < $('#menu li').length; i++) {
						_.prev.find('#menu>li').eq(i).stop().animate({top:_top[i],left:_left[i]}, 800, 'easeOutExpo', function(){_.prev.css({display:'none'})})
					}
				} else {
					_.prev.find('.inner').stop().delay(100).animate({opacity:0},200, 'easeInExpo',function(){_.prev.find('.back>img').stop().animate({scale:[0,0]},300, 'easeInBack',function(){_.prev.css({display:'none'})})})
					_.prev.find('.select_button').stop().animate({left:350},200, 'easeInExpo',function(){_.prev.find('.select_button,.back_button').css({display:'none'})})
					_.prev.find('.back_button').stop().animate({right:350},200, 'easeInExpo')
				}
			}
		}
	})	
	$('nav')
		.navs({
			useHash:true,
			defHash:"#!/splash",
			hover:true,
			hoverIn:function(el,_){
				el.find('>a>span').stop().animate({color:'#972e0e' }, 600)
				.css({textShadow: "#f05c38 1px 1px"})
				.parent().find('.img_act').css({display:'block'}).stop().animate({top:0,left:0}, 800, 'easeOutExpo')
			}
			,hoverOut:function(el,_){
				if (!el.hasClass('with_ul') || !el.hasClass('sfHover')) {
				el.find('>a>span').stop().animate({color:'#fff'}, 600, 'easeInExpo',function(){el.find('>a>span').css({textShadow: "#000 1px 1px 3px"})})
				.parent().find('.img_act').stop().animate({top:_top[el.index()], left:_left[el.index()]}, 600, 'easeInExpo',function(){el.find('.img_act').css({display:'none'})})
				}
			}
		})
		.navs(function(n){			
			$('#content').tabs(n)
		})
		
	var m_top=0,
	h_cont = parseInt($('body').css('min-height'));
	function centre() {
	var h=$(window).height();
	if (h>h_cont) {
	m_top=(h-h_cont)/2;
	} else {
	m_top=0
	}
	$('#content').stop().animate({'margin-top':m_top})
	}
	centre();
	$(window).resize(centre);	    
  })