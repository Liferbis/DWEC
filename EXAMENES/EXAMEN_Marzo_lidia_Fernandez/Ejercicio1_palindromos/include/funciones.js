
var frase;
var texto;
var myWindow;

//INPUTS
var a; //input donde introduces la frase
var b; // caja donde lo arrastras

addEventListener("load", init);

function init(){
	
	// datos();
	// cargaInicio()
	a = document.getElementById("frases");
	b = document.getElementById("comprobadora");
	
	a.addEventListener("dragover", sobre);
	a.addEventListener("drop", encima);

	b.addEventListener("dragover", sobre);
	b.addEventListener("drop", encima);
	
	arrastables();
}

function arrastables(){
	var arrastables = document.getElementsByClassName("palabra");
	for(var i = 0; i < arrastables.length; i++){
		arrastables[i].draggable = true;
		arrastables[i].addEventListener("dragstart", inicioD);
	}
}

function sobre(){
	event.preventDefault();
}

function encima(){
	event.stopPropagation();
	event.preventDefault();
	
	frase = event.dataTransfer.getData("text");

	ventan();
	//alert(frase);
}

function inicioD(event) {
	event.dataTransfer.setData("text", event.target.value);
}

function comStri() {
	var aux = "";
	var aux1 = "";
	var vuelta = new Array();
	var k = frase.length-1;
	for(var i = 0, k ; i < frase.length; i++, k--){
		if(frase[i] != " "){
			aux += frase[i];
			vuelta.push(frase[i]);
		}
	}

	for(var k = vuelta.length-1; k >= 0 ; k--){
		aux1 += vuelta[k];
	}

	if(aux == aux1){
		return true;
	}else{
		return false;
	}
	
}

function ventan() {
	if(comStri()){
		texto = "SI es un palindromo";
	}else{
		texto = "NO es un palindromo";
	}
		
	myWindow= window.open(" xxx " , " " , "width=400,height=200,scrollbars=NO");
	var to="<html><head><title>PALINDROMO</title><link href='include/estilo.css' rel='stylesheet'></head><body ><h2 id='t'>Tu frase: </br>" + frase + "</h2><p id='t1'>" + texto + "<br><button class='btn' onclick='window.close()'>Cerrar ventana</button></p></body></html>";

	myWindow.document.write(to);
}


