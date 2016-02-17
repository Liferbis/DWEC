var caja;

addEventListener("load", listo);

function listo(){
	caja=document.getElementById("caja");
}

function restaurar(){
	//borrar todos
	var originales=caja.childNodes;
	for(var i=originales.length-1;i>=0;i--){
		caja.removeChild(originales[i]);
	}


	//añadir
	var arrText=["primer texto fijo","segundo texto fijo","tercer texto fijo"];
	var arrNodos=[document.createElement("P"),document.createElement("P"),document.createElement("P")];
	
	for(var i=0;i<arrNodos.length;i++){
		arrNodos[i].appendChild(document.createTextNode(arrText[i]));
		caja.appendChild(arrNodos[i]);
	}
}

function insertar(){
	var elemento=document.createElement("p");
	elemento.appendChild(document.createTextNode("Elemento al final"));

	caja.appendChild(elemento);
}

function insertarTercero(){
	var tercero=caja.getElementsByTagName("p")[2];

	var elemento=document.createElement("p");
	elemento.appendChild(document.createTextNode("En tercera posición"));
	caja.insertBefore(elemento,tercero);
}

function reemplazarPrimero(){
	var primero=caja.getElementsByTagName("p")[0];

	var elemento=document.createElement("p");
	elemento.appendChild(document.createTextNode("Reemplazo primero."));
	caja.replaceChild(elemento,primero);
}

function suprimirTercero(){
	caja.removeChild(caja.getElementsByTagName("p")[2]);
}

function moverSegundoAlFinal(){
	caja.appendChild(caja.getElementsByTagName("p")[1]);
}

function segundoTextoAlFinal(){
	var segundo=caja.getElementsByTagName("p")[1];
	var texto=segundo.cloneNode(segundo.childNodes[0]);
	
	var ultimo=caja.getElementsByTagName("p")[caja.getElementsByTagName("p").length-1];
	var ultimoTexto=ultimo.childNodes[0];
		ultimo.replaceChild(texto, ultimoTexto);
}
