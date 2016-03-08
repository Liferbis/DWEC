var clasActual;

$(document).ready(function(){

	$("#uno").click(function(e){
		$("p>a").css({
				background: 'skyblue',
				color: 'red'
				});
		
	});

	$("#dos").click(function(e){
		$('a:contains("rincón")').css("fontSize","34px");			
	});

	$("#tres").click(function(e){
		$("div:hidden").show('500');
	});

	$("#cuatro").click(function(e){
		$("div:visible").hide('500');
	});

	$("#cinco").click(function(e){
		$("select.uno option:event").css("background","lightyellow");
		$("select.uno option:odd").css("background","lightblue");
	});

	$("#seis").click(function(e){
		
		$("h3:lt(2)").css("border","5px dotted blue");
	});

	
});