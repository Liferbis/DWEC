var contenedor;
var texto;

var textoarea;
var limite;

addEventListener("load", init);

function init(){

	textoarea = document.getElementById("textoarea");
	limite = document.getElementById("textoarea").getAttribute("maxlength");
	contenedor = document.getElementById('quedan');
	
	textoarea.addEventListener("keydown", descontador);
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
	if( event.keyCode < 48 || event.keyCode > 57 ){
		if(event.keyCode >= 96 && event.keyCode <= 105){
			borratextarea();
		}else{
			texto = limite - textoarea.value.length;
			borraElementos(contenedor);
			escribe(contenedor, texto);
		}
	}	
}

function borratextarea(){
	var inputable;
	for(var i = 0; i < textoarea.value.length-1; i++){
		inputable += textoarea.value[i];
	}

	borraElementos(textoarea);
	escribe(textoarea, inputable);


}



