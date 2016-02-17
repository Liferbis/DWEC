//pedir crear numero x div
//pintarlos con borde y color de fondo
//cuando evento x borrar div del arbol
var body;

addEventListener("load",init);
function init(){
	body=document.body;

	promptDiv();	
}

	function promptDiv(){
		var numero;
		do{
			numero=prompt("¿Cuántos div quieres insertar?");
		}while(numero<0||isNaN(numero));
		crearDiv(Number(numero));
	}

	function crearDiv(numero){
		var arrAtt=new Array();
		for(var i=0;i<numero;i++){
			arrAtt["id"]="div"+i;
			body.appendChild(crearEtiqueta("div","Nuevo div",arrAtt));
		}
		formatearDiv();
		eventosDiv();
	}
	function formatearDiv(){
		div=body.getElementsByTagName("div");
		for(var i=0;i<div.length;i++){
			div[i].style.float="left";
			div[i].style.padding="2em";
			div[i].style.border="1px solid #000";
			div[i].style.margin=".2em";

		}
	}
	function eventosDiv(){
		div=body.getElementsByTagName("div");
		for(var i=0;i<div.length;i++){
			div[i].addEventListener("mouseover",eliminarDiv);
		}
	}


	function eliminarDiv(){
		body.removeChild(this);
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

		function insertarAtributos(tag,att){
			for(indice in att){
				tag.setAttribute(indice,att[indice]);
			}
		}