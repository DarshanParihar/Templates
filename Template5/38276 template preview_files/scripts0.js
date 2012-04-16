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
          animation:   {opacity:'show'},
          speed:       600,
          autoArrows:  false,
         dropShadows: false
        });

});
  
 //------WinLoad-------------  
$(window).load(function(){  
     $('.scroll1').cScroll({
		duration:700,
		step:100,
		trackCl:'track',
		shuttleCl:'shuttle'
	})


$(".homebutton > a").hoverSprite({onLoadWebSite: true});



////////////////////////////////////////////////////////////////
$('.linkHover').hover(
    function(){
        $(this).stop(true).animate({color:"#66c6e5"},300, 'easeOutSine');
    },
    function(){
         $(this).stop(true).animate({color:"#fff"},300, 'easeOutSine');
    }
)

$('.splashLogo').hover(
    function(){
        $(this).stop(true).animate({color:"#66c6e5"},200, 'easeOutSine');
    },
    function(){
        $(this).stop(true).animate({color:"#fff"},200, 'easeOutSine');
    }
)

$('.picOver').fadeTo(0, 0);
$('.picOver').hover(
    function(){
        $(this).stop().fadeTo(300, 1);
    },
    function(){
       $(this).stop().fadeTo(300, 0);
    }
)

$('#menu').css({'display':'none'}).animate({opacity:0},0);
$('#logo').animate({width:"0px"},0);
$('.splashLogo').click(function(){

   enterSite();
})

function enterSite(){   
    $('.splashLogo').stop(true).animate({opacity:0, color:"#fff"},100, function() {
        $('.splashLogo').css({"display":"none"});
    });
    $('#logo').stop().animate({width:"200px"},400, 'easeOutSine');
    $('#menu').css({'display':'block'}).stop().animate({opacity:1},800, 'easeOutCubic'); 
}

    var navItems = $('.menu > ul >li');
    var _delay;

$('.menu > ul >li').eq(0).css({'display':'none'});  
	var content=$('#content'),
		nav=$('.menu');

    	$('#content').tabs({
		preFu:function(_){
			_.li.css({top:"0px", height:"0px"});
		}
        
		,actFu:function(_){			
			if(_.curr){
				_.curr.css({top:"0px"}).stop().delay(100).animate({height:"432px"},800,'easeInOutCubic');

                if ((_.n == 0) && ((_.pren>0) || (_.pren==undefined))){splashMode();}

                if (((_.pren == 0) || (_.pren == undefined)) && (_.n>0) ){contentMode(); enterSite();}
            }
        
            
			if(_.prev){
			     _.prev.stop().animate({top:"432px", height:"0px"},800,'easeInOutCubic');
             }
   
		}
	})
    

    function splashMode(){
        $('.menuHolder').stop(true).animate({"width":"432px"},400, 'easeInOutCubic');
        $('#content').stop(true).animate({"width":"432px"},400, 'easeInOutCubic');
       // $('.grad2').stop(true).animate({opacity:1},400, 'easeOutCubic');
       if(($.browser.msie) && ($.browser.version <= 8)){
            $('.grad2 > img').stop().animate({"top":"-200px"},400, 'easeOutExpo');
            }else{
                 $('.grad2').fadeIn();
            }  
    }
    
    function contentMode(){  
        $('.menuHolder').stop(true).delay(300).animate({"width":"320px"},800, 'easeInOutCubic');
        $('#content').stop(true).delay(300).animate({"width":"544px"},800, 'easeInOutCubic');
         if(($.browser.msie) && ($.browser.version <= 8)){
                $('.grad2 > img').stop().animate({"top":"-1300px"},400, 'easeInCubic');
            }else{
                $('.grad2').fadeOut();
            }  
    }		
    
	nav.navs({
			useHash:true,
             hoverIn:function(li){
                $(".mOver", li).stop().animate({opacity:1},500,'easeOutExpo');
             },
                hoverOut:function(li){
                     if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                        $(".mOver", li).stop().animate({opacity:0},500,'easeOutExpo');  
                     }
                } 
		})
        
        
		.navs(function(n){			
			$('#content').tabs(n);
		})
  ///////////Resize////////////////////  
    

//////////////////////////////////////////
   	var h_cont=535;
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
		//$('.main').css({height:h_new});
	}
	centrRepos();
    ///////////Window resize///////
	$(window).resize(function(){
                centrRepos()
                
            }
    );

    } //window function
) //window load