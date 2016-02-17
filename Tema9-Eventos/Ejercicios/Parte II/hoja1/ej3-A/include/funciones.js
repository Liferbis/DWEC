var contenedor;
var texto;

var textoarea;
var limite;

addEventListener("load", init);

function init(){

	textoarea = document.getElementById("textoarea");
	limite = document.getElementById("textoarea").getAttribute("maxlength");
	contenedor = document.getElementById('quedan');
	
	textoarea.addEventListener("input", descontador);
	descontador();
}

function borraElementos(contenedor){
	while( contenedor.childNodes.length > 0 ){
		contenedor.removeChild(contenedor.childNodes[0]);
	}
}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}

function descontador(){
	texto = limite - textoarea.value.length;
	borraElementos(contenedor);
	escribe(contenedor, texto);
	
}

