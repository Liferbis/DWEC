var contenedor;
var caja;
var limite=140;

var rangos=[[48,57],[96,105]];
var flagNumero=false;

addEventListener("load",init);
function init(){

	caja = document.getElementById("caja");
	//limite = document.getElementById("caja").getAttribute("maxlength");
	contenedor = document.getElementById('quedan');
	
	caja.addEventListener("keydown", esNumero);
	caja.addEventListener("input", setDisponibles);
	
	//da el valor al span para saber el numero de caracteres que quedan
	setDisponibles();

}

	function setDisponibles(){
		//comprobacion si tecla es NÚMERO
		if(flagNumero){
			//detiene el evento
				event.preventDefault();
			//detiene la propagacion
			//	event.stopPropagation();

			if(caja.value.length<limite){
				caja.value=caja.value.substring(0,caja.value.length-1);
			}

			//otra manera sin usar .preventDefault();
			//Detiene el evento y la propagación
			//	return false;
		}

		//EVENTO DEFAULT
		var disponibles=limite-caja.value.length;

		borrarHijos(contenedor);
		contenedor.appendChild(crearEtiqueta(null,disponibles,null));
	
	}

	function esNumero(){
		var tecla=event.keyCode;
		flagNumero=false;
		for(var i=0;i<rangos.length&&!flagNumero;i++){
			if((tecla>rangos[i][0]&&tecla<rangos[i][1])||tecla==rangos[i][0]||tecla==rangos[i][1]){
				flagNumero=true;
			}
		}
	}



function borrarHijos(contenedor){
	while(contenedor.childNodes.length>0){
		contenedor.removeChild(contenedor.childNodes[0]);
	}
}

function escribe(contenedor, texto){
	contenedor.appendChild(document.createTextNode(texto));
}

function insertarAtributos(tag,att){
	for(indice in att){
		tag.setAttribute(indice,att[indice]);
	}
}

function crearEtiqueta(tag,contenido,att){
	if(contenido!=null){
		var texto=document.createTextNode(contenido);
	}

	if(tag!=null){
		var etiqueta=document.createElement(tag);
		
		if(texto!=null){
			etiqueta.appendChild(texto);
		}
		
		if(att!=null)insertarAtributos(etiqueta,att);
		return etiqueta;
	}
	return texto;
}

