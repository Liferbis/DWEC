addEventListener("load", init);

var elemento;
var htm;
var corX;
var corY;


function init(){
	elemento = document.getElementById("divMovil");
	htm = document.getElementById("cuerpo");
	
	elemento.addEventListener("click", agarrar);
	htm.addEventListener("dblclick", parar);
}

function agarrar(){
	elemento.setAttribute('class','mover');
	htm.addEventListener("mousemove", mover);
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
	htm.removeEventListener("mousemove", mover);
	// elemento.style.top = corX;
	// elemento.style.left = corY;
}