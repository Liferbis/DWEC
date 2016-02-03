addEventListener("load", init);

var elemento;
var htm;
var corX;
var corY;


function init(){
	elemento = document.getElementById("divMovil");
	htm = document.documentElement;
	
	elemento.addEventListener("click", agarrar);
	htm.addEventListener("dblclick", parar);
}

function agarrar(){
	elemento.setAttribute('class','mover');
	//movible =document.getElementsByClassName('mover');
	htm.addEventListener("mouseover", mover);
}

function mover(){
	//top coordenada Y // left coordenada X
	// corX = event.clientX;
	// corY = event.clientY;
	
	elemento.style.left = event.clientX + "px";
	elemento.style.top = event.clientY + "px";
}

function parar(){
	elemento.removeAttribute('class');
	htm.removeEventListener("mouseover", mover);
	// elemento.style.top = corX;
	// elemento.style.left = corY;
}