addEventListener("load", listo);

function listo(){
	

	//OBTENER DOCUMENTO RAIZ
	var raiz=document.documentElement;
	var texto= "Nodo padre: Ninguno!";
	texto += "\nTipo de nodo y nombre de document: ";
	texto += document.nodeType + " - " + document.nodeName;
	texto += "\nEl valor del nodo document: ";
	texto += document.nodeValue;
	texto += "\nNodos hijo del nodo raíz y nombre y tipo";
	
	for (var i = 0; i < document.childNodes.length; i++) {
		texto += "\n ->Nombre: " + document.childNodes[i].nodeName + " Tipo: " + document.childNodes[i].nodeType;
	};

	texto += "\n\nNúmero de hijos de nodo etiqueta html: ";
	texto += raiz.childNodes.length;
	texto += "\nRecorrer sus hijos y mostrar nombre y tipo";

	for (var i = 0; i < raiz.childNodes.length; i++) {
		texto += "\n ->Nombre: " + raiz.childNodes[i].nodeName + " Tipo: " + raiz.childNodes[i].nodeType;
	};

	var cuerpo = document.body;
	texto += "\n\nNúmero de hijos de nodo etiqueta body: ";
	texto += cuerpo.childNodes.length;
	texto += "\nRecorrer sus hijos y mostrar nombre y tipo";

	for (var i = 0; i < cuerpo.childNodes.length; i++) {
		texto += "\n ->Nombre: " + cuerpo.childNodes[i].nodeName + " Tipo: " + cuerpo.childNodes[i].nodeType;
	};

	
	var contador = 0;
	for (var i = 0; i < cuerpo.childNodes.length; i++) {
		if(cuerpo.childNodes[i].nodeName == "DIV"){
			contador++;
			texto += "\n\nNúmero de hijos de nodo etiqueta DIV: " + cuerpo.childNodes[i].childNodes.length;
			texto += "\nRecorrer sus hijos y mostrar nombre y tipo"; 
			for(var j = 0; j < cuerpo.childNodes[i].childNodes.length; j++){
				
				texto += "\n ->DIV " + j + "--Nombre: " + cuerpo.childNodes[i].childNodes[j].nodeName + " Tipo: " + cuerpo.childNodes[i].childNodes[j].nodeType;
			}
		}
	};
	if (contador == 0){
		texto += "\n\nNO HAY nodo etiqueta DIV ";
	}

	contador=0;
	for (var i = 0; i < cuerpo.childNodes.length; i++) {
		if(cuerpo.childNodes[i].nodeName == "DIV"){
			for(var j = 0; j < cuerpo.childNodes[i].childNodes.length; j++){
				if(cuerpo.childNodes[i].childNodes[j].nodeName == "H1"){
					contador++;
					texto += "\n\nNúmero de hijos de nodo etiqueta h1: " + cuerpo.childNodes[i].childNodes[j].childNodes.length;
					texto += "\nRecorrer sus hijos y mostrar nombre y tipo";
					for(var k=0; k < cuerpo.childNodes[i].childNodes[j].childNodes.length; k++){
						texto += "\n ->H1 " + k + "--Nombre: " + cuerpo.childNodes[i].childNodes[j].childNodes[k].nodeName + " Tipo: " + cuerpo.childNodes[i].childNodes[j].childNodes[k].nodeType;
					}
				}
			}
		}
	};
	if (contador == 0){
		texto += "\n\nNO HAY nodo etiqueta H1 ";
	}

	contador=0;
	for (var i = 0; i < cuerpo.childNodes.length; i++) {
		if(cuerpo.childNodes[i].nodeName == "DIV"){
			for(var j = 0; j < cuerpo.childNodes[i].childNodes.length; j++){
				if(cuerpo.childNodes[i].childNodes[j].nodeName == "H1"){
					for(var k=0; k < cuerpo.childNodes[i].childNodes[j].childNodes.length; k++){
						if(cuerpo.childNodes[i].childNodes[j].childNodes[k].nodeName == "SPAN"){
							contador++;
							texto += "\n\nNúmero de hijos de nodo etiqueta SPAN: " + cuerpo.childNodes[i].childNodes[j].childNodes[k].childNodes.length;
							texto += "\nRecorrer sus hijos y mostrar nombre y tipo";
							for(var l=0; l < cuerpo.childNodes[i].childNodes[j].childNodes[k].childNodes.length; l++){
								texto += "\n ->SPAN " + l + "--Nombre: " + cuerpo.childNodes[i].childNodes[j].childNodes[k].childNodes[l].nodeName + " Tipo: " + cuerpo.childNodes[i].childNodes[j].childNodes[k].childNodes[l].nodeType;
							}
						}
					}
				}
			}
		}
	};
	if (contador == 0){
		texto += "\n\nNO HAY nodo etiqueta SPAN ";
	}

	texto += "\n\nValores de los atributos de IMG "
	for (var i = 0; i < cuerpo.childNodes.length; i++) {
		if(cuerpo.childNodes[i].nodeName == "DIV"){
			for(var j = 0; j < cuerpo.childNodes[i].childNodes.length; j++){
				if(cuerpo.childNodes[i].childNodes[j].nodeName == "IMG"){
					texto += "\n->Valor del atributo name de IMG: " + cuerpo.childNodes[i].childNodes[j].name;
					texto += "\n->Valor del atributo alt de IMG: "+ cuerpo.childNodes[i].childNodes[j].alt;
					texto += "\n->Valor del atributo src de IMG: "+ cuerpo.childNodes[i].childNodes[j].src;

					
				}
			}
		}
	};

	



	alert(texto);
}