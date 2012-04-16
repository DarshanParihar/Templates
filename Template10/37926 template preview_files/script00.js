$(document).ready(function() { 
	$('ul.menu').superfish({ 
		delay:       600,                            // one second delay on mouseout 
		animation:   {height:'show'},  // fade-in and slide-down animation 
		speed:       'normal',                          // faster animation speed 
		autoArrows: false,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 
		});
		$('.soc_list li a').hover(
		function(){$(this).stop().animate({paddingBottom:'10px', marginTop:'-10px'}, 200)},
		function(){$(this).stop().animate({paddingBottom:'0', marginTop:'0'}, 200)}
		)
		});
