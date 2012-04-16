include('js/hoverSprite.js');
include('js/googleMap.js');

//----Include-Function----
function include(url){ 
  document.write('<script src="'+ url + '" type="text/javascript" ></script>'); 
}
//------DocReady-------------
$(document).ready(function(){     

   $('ul#menu').superfish({
      delay:       800,
      animation:   {height:'show'},
      speed:       600,
   
      autoArrows:  false,
      dropShadows: false
    }); 
    
    
    
});
  
 //------WinLoad-------------  
$(window).load(function(){  
      
$('#pg1Scroll1 .scroll1')
		.cScroll({
			showTrack:false
		})
	$('#pg1Scroll1 .upBtn')
		.click(function(){
			$('#pg1Scroll1 .scroll1').cScroll('up')
			return false
		})
	$('#pg1Scroll1 .downBtn')
		.click(function(){
			$('#pg1Scroll1 .scroll1').cScroll('down')
			return false
		})   
        
 $('#pg1Scroll2 .scroll2')
		.cScroll({
			showTrack:false
		})
	$('#pg1Scroll2 .upBtn')
		.click(function(){
			$('#pg1Scroll2 .scroll2').cScroll('up')
			return false
		})
	$('#pg1Scroll2 .downBtn')
		.click(function(){
			$('#pg1Scroll2 .scroll2').cScroll('down')
			return false
		})          
        
      

             if($("#splashSliderA").length){
                       $('#splashSliderA').cycle({fx:'curtainY',
                                               height:'auto',
                                               speed:1000,
                                               timeout:8000,
                                               //next:'.next',
                                               //prev:'.prev',
                                               pager:  '#navSplash',
                                               easing:'easeInOutExpo',
                                               pagerAnchorBuilder: function(idx, slide) { 
                                                   //  return '<li class="navDot" ><a href="#"><img src="images/sprTop.png" /></a></li>'; 
                                                     return '<li class="navDot"><a href="#"></a></li>'; 
                                                     },
                                               cleartypeNoBg: true})                     
                   }  
       
        
        $(".scrButn").hoverSprite();

        
        
        
   //	$('#test').hover(function(){}, function(){})

    //content switch
	var content=$('#content'),
		nav=$('.menu');
	nav.navs({
		useHash:true
  
})	
	nav.navs(function(n, _){
		content.cont_sw(n);
		//$('> ul > li > strong',nav).stop().animate({opacity:0})
		//$('> ul > li > span',nav).stop().animate({opacity:0})
		if (_.n!=-1) {
			//$('> ul > li > strong',nav).eq(_.n).stop().animate({opacity:1});
			
		}
	})
	content.cont_sw({
		showFu:function(){
			var _=this			
			$.when(_.li).then(function(){	
				_.next.css({display:'block', left:-1500}).stop().animate({left:0},1300,'easeOutBack', function(){	});	
			});
		},
		hideFu:function(){
			var _=this
			_.li.stop().animate({left:1500},700,'easeInExpo', function(){
				_.li.css({display:'none'})
                //visibility:'hidden' 
			})
		},
		preFu:function(){
			var _=this
			_.li.css({position:'absolute', display:'none'});
		}
	})
	nav.navs(0);
    //$('#ContactForm').forms({ownerEmail:'#'})
   	var h_cont=800;
	function centre() {
		var h=$(window).height();
		if (h>(h_cont+40)) {
			m_top=~~(h-h_cont)/2;
			h_new=h;
		} else {
			m_top=20;
			h_new=h_cont+40;
		}
		$('.center').stop().animate({paddingTop:m_top},800,'easeOutExpo');
		$('.main, .for_main').css({height:h_new});
	}
	centre();
	$(window).resize(centre);

    } //window function
) //window load