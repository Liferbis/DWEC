var contenedor;
var texto;

addEventListener("load", init);

function init(){	
	contenedor = document.getElementById('IIDD');
}

function borraElementos(contenedor){
	while( contenedor.childNodes.length > 0 ){
		contenedor.removeChild(contenedor.childNodes[0]);
	}
}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}



