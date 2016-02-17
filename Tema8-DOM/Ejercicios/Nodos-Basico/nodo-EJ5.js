var par;

addEventListener("load", listo);

function listo(){

//son onclick asique no descomentar es solo para ver las funciones que son: 
	
	//insertarNodoAlFinal();
	//moverNodoAlFinal(this);
	//insertarNodoAntes();
}


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


