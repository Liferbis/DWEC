var par;

addEventListener("load", listo);

function listo(){
//EJERCICIO 1
	//par = document.getElementsByTagName("P");

	// pn();
	// pen();
	// enlac();

//EJERCICIO 2
	//byN();
	
//EJERCICIO 3
//son onclick asique no descomentar es solo para ver las funciones que son: 
	
	//insertarNodoAlFinal();
	//moverNodoAlFinal(this);
	//insertarNodoAntes();
}

function pn(){
	var texto ="El número de párrafos que hay es: " + par.length;
	alert (texto);
}

function pen(){
	var texto ="El número de enlaces de cada párrafo ";

	for(var i=0; i < par.length; i++){
		texto += "\nEn el parrafo " + (i+1) + " \n-Total de enlaces:" + par[i].getElementsByTagName("A").length;
		
	}

	alert(texto);
}

function enlac(){
	var texto ="El texto que contiene los enlaces";

	for(var i=0; i < par.length; i++){
		var enlace = par[i].getElementsByTagName("A");

		if(enlace.length > 0){
			texto += "\n* En el parrafo " + (i+1) + " \n**Total de enlaces:" + enlace.length;

			for(var j=0; j < enlace.length; j++){
				texto += "\n--Enlace " + (j+1) + " : " + enlace[j].childNodes[0].nodeValue;
			}
		}
		
	}

	alert(texto);
}

//
//EJERCICIO 2
//
//

function byN(){
	var texto ="UTILIZANDO LA HERRAMIENTA ById()";

	var enla = document.getElementById("segundoparrafo").getElementsByTagName("A");
	
	texto += "\n**Total de enlaces:" + enla.length;

	for(var j=0; j < enla.length; j++){
		texto += "\n--Enlace " + (j+1) + " : " + enla[j].childNodes[0].nodeValue;
	}
	
	alert(texto);

}

//
//EJERCICIO 3
//
//

function insertarNodoAlFinal(){
	var cre = document.createElement('p');
    var texto = document.createTextNode('Nodo nuevo creado');
    
    cre.appendChild(texto);
    document.body.appendChild(cre);
}

function moverNodoAlFinal(elemento){
	document.body.appendChild(elemento);
}

function insertarNodoAntes(){
	var cre = document.createElement('p');
    var texto = document.createTextNode('Nodo nuevo creado');

    cre.appendChild(texto);
    document.body.insertBefore(cre, document.getElementById('ultimoParrafo'));
}


