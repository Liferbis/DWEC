
$(document).ready(function(){

	$(document.body).click(function(){
		if($("article").is(":hidden")){
			$("article").slideDown(500);
		}else{
			$("article").slideUp(500);
		}
	});	


});