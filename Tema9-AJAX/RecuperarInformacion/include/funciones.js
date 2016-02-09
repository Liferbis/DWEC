var elemento;
var nodo;
var ciu = new Array();
var non = new Array();
var documento;
var contenedor;

addEventListener("load", init);

function init(){
    elemento = document.getElementById("boton");
    nodo = document.getElementById('res');

    elemento.addEventListener("click", submitForm);
}

function cargarDatos(arr){
	documento = arr;
	var pr = arr.split("*");
	pr.sort();
	var texto = "<ol>";
	var d ;
	var non;



	for(var i = 0;  i < pr.length; i++){
		non = pr[i].split("-");
		texto +="<li>";
		for(var j = 0; j < non.length; j++){
			texto += non[j] + " ";
			
			if(j == 2){
				d = ciu.indexOf(non[j]);
				if(d == -1){
					ciu.push(non[j]);
				}
			}

		}
		texto +="</li>";
		// con = 0;
	}
	texto +="</ol>";

	while (nodo.hasChildNodes() ) {
		nodo.removeChild(nodo.childNodes[0]);
	}

}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}