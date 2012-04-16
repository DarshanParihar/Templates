include("js/jquery.animate-colors-min.js");
include("js/jquery.backgroundpos.min.js");
include("js/jquery.easing.js");
include("js/jquery.fancybox-1.3.4.pack.js");
include("js/jquery.mousewheel.js");
include("js/jquery-ui-1.8.11.custom.min.js");
include("js/jcarousellite_1.0.1.min.js");
include("js/html5.js");
include("js/cScroll.js");
include("js/googleMap.js");
include("js/superfish.js");
include("js/switcher.js");
include("js/forms.js");
include("js/MathUtils.js");

function include(url) {
    document.write('<script type="text/javascript" src="' + url + '"></script>');
}
var MSIE = false;

function addAllListeners() {
    $('#splash_nav a').hover(
         function(){
            if (($(this).parent().index() != currPos))
                $(this).children('img').stop().animate({'left':'0px'},300,'easeOutBack');
        },
        function(){
            if (($(this).parent().index() != currPos))
                $(this).children('img').stop().animate({'left':'-24px'},300,'easeOutBack');
        } 
    );
    $('#splash_nav a').eq(currPos).children('img').stop().animate({'left':'0px'},300,'easeOutBack');
                    
    $('.soc_icons>li>a').hover(
        function(){
            $(this).children('img').stop().animate({'top':'-24px'},300,'easeOutBack');
        },
        function(){
            $(this).children('img').stop().animate({'top':'0'},300,'easeOutBack');
        }
    );
    $('.list2>li>a').attr({'rel':'appendix'}).prepend('<span class="sitem_over"><strong></strong></span>')
    .hover(
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').css({display:'block',opacity:'0'}).stop().animate({'opacity':1});  
            } else { 
                $(this).children('.sitem_over').stop().show();
            }   
            $(this).find('strong').css({top:'-350px'}).stop().animate({'top':0},350,'easeInOutExpo');     
        },
        function(){
            if (!MSIE){
                $(this).children('.sitem_over').stop().animate({'opacity':0},function(){$(this).children('.sitem_over').css({display:'none'})});  
            } else {
                $(this).children('.sitem_over').stop().hide();
            }
            $(this).find('strong').stop().animate({'top':'-100px'},600,'easeInOutExpo');  
        }
    );
    
    $('.list1>li').append('<span class="list_bg"></span>');
    $('.list1>li>a').hover(
        function(){
            $(this).siblings('span').stop().animate({'width': $(this).width()});
        },
        function(){
            $(this).siblings('span').stop().animate({'width': 0});
        }
    );
    $('.readMore').append('<span class="more_bg"></span>');
    $('.readMore').hover(
        function(){
            $(this).children('span').stop().animate({'width': $(this).width()});
        },
        function(){
            $(this).children('span').stop().animate({'width': 0});
        }
    );
    $('.readMore2').append('<span class="more_bg2"></span>');
    $('.readMore2').hover(
        function(){
            $(this).children('span').stop().animate({'width': $(this).width()});
        },
        function(){
            $(this).children('span').stop().animate({'width': 0});
        }
    );
    $('.close_icon').hover(
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'center top'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'center top'});
            }
        },
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'center bottom'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'center bottom'});
            }
        }        
    );
     $('.nextBtn').hover(
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'left center'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'left center'});
            }
        },
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'right center'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'right center'});
            }
        }        
    );
    $('.prevBtn').hover(
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'right center'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'right center'});
            }
        },
        function(){
            if (!MSIE){
                $(this).stop().animate({'backgroundPosition':'left center'},300,'easeOutExpo');
            } else {
                $(this).css({'backgroundPosition':'left center'});
            }
        }        
    );
}

var currPos  = 0;
var lastPos = 0;
var splashItems = [];
var splashCoords = [];
var positions = 
[
    [
        [{i:0,j:0},{i:0,j:1},{i:0,j:2},{i:0,j:3},{i:0,j:4}],
        [{i:1,j:0},{i:1,j:1},{i:1,j:2},{i:1,j:3},{i:1,j:4}],
        [{i:2,j:0},{i:2,j:1},{i:2,j:2},{i:2,j:3},{i:2,j:4}]
    ],
    
    [
        [{i:1,j:0},{i:1,j:1},{i:0,j:2},{i:1,j:3},{i:0,j:3}],
        [{i:0,j:0},{i:2,j:1},{i:1,j:2},{i:2,j:3},{i:0,j:4}],
        [{i:1,j:0},{i:2,j:0},{i:2,j:2},{i:2,j:4},{i:1,j:4}]
    ],                    
    [
        [{i:2,j:0},{i:0,j:1},{i:0,j:2},{i:0,j:3},{i:2,j:4}],
        [{i:1,j:0},{i:1,j:1},{i:1,j:2},{i:1,j:3},{i:1,j:4}],
        [{i:2,j:1},{i:0,j:0},{i:2,j:2},{i:0,j:4},{i:2,j:3}]
    ]
];

function initSpalsh(){ 
    var currX = 0;
    var currY = 0;
    var stepX = 145;
    var stepY = 145;
    $('table tr').each(function(index, elem){
        splashItems.push([]);
        splashCoords.push([]);
        $(elem).children('td').each(function(index2,elem2){
            splashItems[index].push($(elem2));
            $(elem2).css({'left':currX,'top':currY});            
            
            splashCoords[index].push({x:currX,y:currY});
            currX += stepX;
        });
        currX = 0;
        currY += stepY;
    });    
    
    $('#splash_nav a').bind('click',function(e){
        lastPos = currPos;
        currPos = $(this).parent().index();
        $('#splash_nav a').trigger('mouseleave');
        shuffleSplash();
    });
    
    $('table a').prepend('<span class="splash_over"></span>')
    $('table a').hover(
        function(){
            var _pos = getRandomFromRangeInt(0,3);
            var _x = '136px';
            var _y = '-136px';
            switch (_pos){
                case 0: 
                break;
                case 1: 
                    _x = '-136px'; _y = '136px';
                break;
                case 2: 
                    _x = '-136px'; _y = '-136px';
                break;
                case 3: 
                    _x = '136px'; _y = '136px';
                break;
            }
            $(this).children('span').css({'left':_x,'top':_y}).stop().animate({'left':0,'top':0},300,'easeOutExpo');
        },
        function(){
            var _pos = getRandomFromRangeInt(0,3);
            var _x = '136px';
            var _y = '-136px';
            switch (_pos){
                case 0: 
                break;
                case 1: 
                    _x = '-136px'; _y = '136px';
                break;
                case 2: 
                    _x = '-136px'; _y = '-136px';
                break;
                case 3: 
                    _x = '136px'; _y = '136px';
                break;
            }
            $(this).children('span').stop().animate({'left':_x,'top':_y},300,'easeOutExpo');
        }        
    );
}

function shuffleSplash(){    
    $.each(splashItems,function(i,el_i){
        $.each(splashItems[i],function(j,el_j){
            var posO = positions[currPos][i][j];            
            splashItems[posO.i][posO.j].stop().animate({'left': splashCoords[i][j].x,
                                            'top': splashCoords[i][j].y
                                            },400,'easeInOutExpo');
                                            
        });
    });
}

$(document).ready(function() {
    /*SUPERFISH MENU*/   
    $('.menu #menu').superfish({
	   delay: 800,
	   animation: {
	       height: 'show'
	   },
       speed: 'slow',
       autoArrows: false,
       dropShadows: false
    });
});

function ON_LOAD(){
    MSIE = ($.browser.msie) && ($.browser.version <= 8);
    $('.spinner').fadeOut();      
    $('.list2>li>a').fancybox({
        'overlayColor'  :   '#303030'
    });
    initSpalsh();
    
    $(".slider").jCarouselLite({
        btnNext: ".nextBtn",
        btnPrev: ".prevBtn",
        scroll:1,
        visible: 3,
        easing: 'easeOutExpo',
        speed: 700
    });
    
    $('.scroll').cScroll({
        duration: 500,
        easing: 'easeOutExpo',
        step:'190px'
    });
    $('.scrollUp').click(function(){
			$('.scroll').cScroll('up')
			return false;
    });
    $('.scrollDown').click(function(){
			$('.scroll').cScroll('down')
			return false;
    });
    //content switch
    var content = $('#content');
    content.tabs({
        show:0,
        preFu:function(_){
    	   _.li.css({'display':'none'})			
        },
        actFu:function(_){        
            if(_.curr){
                _.curr
                    .css({'left':'2000px'}).stop(true).show().animate({'left':'2px'},{duration:600,easing:'easeInOutExpo'});
            }   
    		if(_.prev){
  		        _.prev
                    .show().stop(true).animate({'left':'-2000px'},{duration:600,easing:'easeInOutExpo',complete:function(){
                            if (_.prev){
                                _.prev.css({'display':'none'});
                            }
                        }
		              });
            }        
  		}
    });
    var nav = $('.menu');
    nav.navs({
		useHash:true,
        defHash: '#!/page_main',
        hoverIn:function(li){            
            $('>strong',li).stop().animate({'top':'0px'},800,'easeOutElastic');
        },
        hoverOut:function(li){
            if ((!li.hasClass('with_ul')) || (!li.hasClass('sfHover'))) {
                $('>strong',li).stop().animate({'top':'-60px'},700,'easeInBack');
            }
        }
    })
    .navs(function(n){	
   	    $('#content').tabs(n);
   	});
    setTimeout(function(){  $('body').css({'overflow':'visible'}); },300);    
    addAllListeners();
}

function listen(evnt, elem, func) {
    if (elem.addEventListener)  // W3C DOM
        elem.addEventListener(evnt,func,false);
    else if (elem.attachEvent) { // IE DOM
        var r = elem.attachEvent("on"+evnt, func);
    return r;
    }
}
listen("load", window, ON_LOAD);