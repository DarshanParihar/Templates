include('js/jquery.easing.1.3.js');
include('js/jquery-ui-1.8.11.custom.min.js');
include('js/jquery.transform-0.9.3.min.js');
include('js/jquery.animate-colors-min.js');
include('js/mathUtils.js');
include('js/superfish.js');
include('js/switcher.js');
include('js/jquery.mousewheel.js');
include('js/sprites.js');
include('js/forms.js');
include('js/hoverSprite.js');
include('js/googleMap.js');

//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
}
//--------global-------------
var isSplash = true;
//------DocReady-------------
$(document).ready(function(){ 
    if(location.hash.length == 0){
        location.hash="!/"+$('#content > ul > li:first-child').attr('id');
    }
    
     $('ul#menu').superfish({
          delay:       800,
          animation:   {height:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false,
         	onInit: function(){
  				$("#menu > li > a").each(function(index){
  				//	var conText = $(this).find('.mText').text();
                   
 					//$(this).append("<div class='overHolder'><span class='menuTextOver'>"+conText+"</span></div>")	
  				})
  	 		}
        });
});
  
 //------WinLoad-------------  
$(window).load(function(){  


$(".linksHolder > ul > li >a").hoverSprite({onLoadWebSite: true});
$('.button').sprites({method:'gStretch',hover:true});

    $('.zoomSp').fadeTo(500, 0)
    $('.zoomSp').hover(function(){ $(this).stop().fadeTo(500, 0.5)}, function(){$(this).stop().fadeTo(500, 0)})
    
    $('.list1>li').hover(
        function(){ 
            $(this).find('a').stop().animate({left:'10px', color:'#914f50'},300, 'easeOutSine');
       	},
        function(){
            $(this).find('a').stop().animate({left:'0px', color:'#332b2d'},300, 'easeOutSine');
            }
    )
        
        $('.banner').find('.bOver').fadeTo(0, 0);
      $('.banner').hover(
        function(){ 
            $(this).find('.bOver').stop().animate({opacity:1},300, 'easeOutSine');
            $(this).find('.image1').stop().animate({left:'-62px', top:'-40px'},300, 'easeOutSine');
       	},
        function(){
            $(this).find('.bOver').stop().animate({opacity:0},300, 'easeOutSine');
           $(this).find('.image1').stop().animate({left:'-72px',top:'-30px'},300, 'easeOutSine');
            }
    )
    
    
       
var menuItems = $('#menu >li'); 
  
navInit();
function navInit(){ 
    menuItems.each( function(index){
            _delay = (index*100)+500;
                // menuItems.eq(index).stop().delay(_delay).animate({left:"0px"}, 1000, 'easeOutExpo');
            } );

}

///////////////////////////////////////////////
    var navItems = $('.menu > ul >li');

   // $('.menu > ul >li').eq(0).css({'display':'none'});
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({left:"-1700px",'display':'none'});
		}
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({'display':'block', left:'-1700px'}).stop().delay(400).animate({left:"0px"},800,'easeOutCubic');
				_.curr.find('.containerContent').stop().delay(600).animate({"margin-right":"30px"},800,'easeOutCubic');

                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}

                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); }
            }
        
			if(_.prev){
			     _.prev.stop().animate({left:"1700px"},800,'easeInCubic',function(){_.prev.css({'display':'none'});}  );
                 _.prev.find('.containerContent').stop().delay(100).animate({"margin-right":"300px"},800,'easeInCubic');
             }
   
		}
	})
    

    function splashMode(){
        isSplash = true;
               $(".headerHolder").stop(true).animate({left:'380px'},900 ,'easeInOutCubic'); 
               $(".shadow1").stop(true).animate({opacity:1},500); 
    }
    
    function contentMode(){  
        isSplash = false;
         $(".headerHolder").stop(true).animate({left:'30px'},900 ,'easeInOutCubic'); 
            $(".shadow1").stop(true).animate({opacity:1},500); 
     
    }		
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
                $(".overPlane", li).stop(true).animate({opacity:1},500,'easeOutExpo');
               
                 /*   if(($.browser.msie) && ($.browser.version <= 8)){}else{
                        $(".pic", li).stop(true).animate({scale:1.1},300,'easeOutSine').animate({top:"0px"},400,'easeOutExpo');
                    }*/
             },
                hoverOut:function(li){
                    if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".overPlane", li).stop(true).animate({opacity:0},500,'easeOutExpo'); 
                       
                    } 
                } 
		})
        
        
		.navs(function(n){			
			$('#content').tabs(n);
		})

    

//////////////////////////////////////////
   	var h_cont=970;
	function centrRepos() {
		var h=$(window).height();
		if (h>(h_cont+40)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=20;
			h_new=h_cont+40;
		}
		$('.center').stop().animate({paddingTop:m_top},800,'easeOutExpo');

	}
	centrRepos();
    ///////////Window resize///////
	$(window).resize(function(){
        centrRepos()
        }
    );

    } //window function
) //window load