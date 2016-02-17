var caja,l; 
addEventListener('DOMContentLoaded' , function(){
	caja= document.getElementById('main');
	l= parseInt(getComputedStyle(caja).getPropertyValue('width'))/2;
		
	caja.addEventListener('mousedown' , function(){
		document.addEventListener('mousemove', mover);
								
	});
});			

function mover (event){
	var left = event.clientX - l;
	var top = event.clientY -l ;
	caja.style.left = left+"px";
	caja.style.top = top+"px";
	caja.addEventListener('mouseup', parar);				
}

function parar(){
	document.removeEventListener('mousemove', mover);
}