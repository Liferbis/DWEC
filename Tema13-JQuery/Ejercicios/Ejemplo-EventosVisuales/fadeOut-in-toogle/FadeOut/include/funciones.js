
$(document).ready(function(){
	$("span").bind("mouseover mouseout", function(){
		if($(this).css("color") != "rgb(255, 255, 255)"){
			$(this).css({
						color: '#FFF',
						background: '#000'
					}); 
		}else{
			$(this).removeAttr('style');
		}
		
	});

	$("span").click( function(){
		$(this).fadeOut('1000', function() {
			$("h3").text("'" + $(this).text() + " ¡Se ha desvanecido!");
			$(this).remove();
		});
	});	
	
});