var elemento;
var nodo;
var ciu = new Array();
var non = new Array();
var documento;
var contenedor;

addEventListener("load", init);

function init(){
    elemento = document.getElementById("boton");
    nodoRespuesta = document.getElementById('res');
    nodoSelected = document.getElementById('selected');

    elemento.addEventListener("click", function(){
    										submitForm(null);
    									});
    nodoSelected.addEventListener("change", function(){ 
    											submitForm("arr");
    										});
    nodoSelected.setAttribute('hidden','hidden');
}

function cargarDatos(arr){
	var pr = arr.split("*");
	pr.sort();
	var non;
	var contenido;


	BorrarHijos(nodoRespuesta);

	for(var i = 0;  i < pr.length; i++){
		non = pr[i].split("-");
		contenido = " ";

		for(var j = 0; j < non.length; j++){
			
			if(j == 2){
				if(ciu.indexOf(non[j]) == -1){
					ciu.push(non[j]);
				}
			}else{
				contenido += non[j] + " ";
			}

		}
		nodoRespuesta.appendChild(CrearEtiquetas('p', contenido, null));
		
	}
	cargaSelected();
}

function cargaSelected(){
	nodoSelected.removeAttribute('hidden');
	BorrarHijos(nodoSelected);
	var arrAtt = new Array();
	arrAtt['value'] = 0;
	nodoSelected.appendChild(CrearEtiquetas('option', "Elige una opción", arrAtt));

	for(var i = 0; i < ciu.length; i++){
		var arrAtt = new Array();
		arrAtt['value'] = ciu[i];
		nodoSelected.appendChild(CrearEtiquetas('option', ciu[i], arrAtt));
	}
}

function filtraDatos(arr){
	BorrarHijos(nodoRespuesta);
	var ciuElegida = nodoSelected.selectedIndex;
	var compareCiudad = nodoSelected.options[ciuElegida].value;
	var pr = arr.split("*");
	pr.sort();
	var non;
	var contenido;
	var arrCiu;

	// BorrarHijos(nodoRespuesta);

	for(var i = 0;  i < pr.length; i++){
		non = pr[i].split("-");
		contenido = " ";

		for(var j = 0; j < non.length; j++){
			
			if((j == 2) && (non[j] == compareCiudad)){
				contenido += non[0] + " " + non[1];
			}

		}
		nodoRespuesta.appendChild(CrearEtiquetas('p', contenido, null));
		
	}
}

function BorrarHijos(contenedor){
	//Elimina todo lo que hay dentro del  nodo
	while (contenedor.hasChildNodes()) { //devuelve true o false
		contenedor.removeChild(contenedor.childNodes[0]);
	}

}

function InsertarAtributos( tag, atributo){
	for ( indice in atributo){
		tag.setAttribute(indice, atributo[indice]);
	}
}

function CrearEtiquetas(tag, contenido, arrAtt){
	//tag es un strins que indica el tipo de estiqueta que es (div, span, section, ....) puede ser null
	//contenido es el contenido que va dentro, puede ser null
	//arrAtt array de atributos asociativo
	//  arrAtt = new Array();
	//  arrAtt["class"]="nombreClase";
	//  arrAtt["id"]= "nombreId";

	if(contenido != null){
		var texto = document.createTextNode(contenido);
	}

	if(tag != null){
		var etiqueta = document.createElement(tag);

		if(texto != null){
			etiqueta.appendChild(texto);
		}

		if(arrAtt != null)InsertarAtributos( etiqueta, arrAtt);

		return etiqueta;
		
	}

	return texto;

}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}