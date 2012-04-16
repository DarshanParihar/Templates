$(document).ready(function() { 

		$('.hov-image')
			.live('mouseenter',function(){
				$(this).find(".description").stop()
				.animate({top:'141px'},{duration:600, easing:'easeOutBack'});
			})
			.live('mouseleave',function(){
				$(this).find(".description").stop()
				.animate({top:'400px'},{duration:600, easing:'easeInBack'});
		});
});