
var te1; 
var te2;
var te3;
var te4;

//BOTONES
var corregir; //evento de boton corregir
var cancelar; //evento de boton reiniciar /-/ cancelas


var errores; //contador de número de errores

var valor; // numero del tema
var correcto = new Array(); //array de respuestas correctas
var textTemas = new Array(); //array de las frases de los temas
var palabras = new Array(); // array multidimensinal que carga las palabras de cada tema

var r; //respuesta
var a; // A y B elementos moviles dragover 
var b; // y drop


addEventListener("load", init);

function init(){
	
	datos();
	cargaInicio()
	te1 = document.getElementById("Tem1");
	te2 = document.getElementById("Tem2");
	te3 = document.getElementById("Tem3");
	te4 = document.getElementById("Tem4");
	
	te1.addEventListener("click", function(){
		   temas("1");
		});
	te2.addEventListener("click", function(){
		   temas("2");
		});
	te3.addEventListener("click", function(){
		   temas("3");
		});
	te4.addEventListener("click", function(){
		   temas("4");
		});
	
}

function carga(p){
	palabras.push(p);
}

function datos() {
	errores = 0;
	correcto = ["White", "Pull", "Daddy", "Better"];
	// palabras = [r1, r2, r3]; 
	textTemas = ["Es color de la leche es ... " ,
				"Para abrir la puerta es push o ... ", 
				"The father is affectionately nickname is ... ",
				"You're the ... "];

	carga(new Array ("White","Red","Black"));
	carga(new Array ("Out","Pull","Vacant"));
	carga(new Array ("Dady","Daddy","Father"));
	carga(new Array ("Better","Worst","Useless"));
}

function botones() {
	corregir.addEventListener("click", cot);
	cancelar.addEventListener("click", Cancelar);  
}

function moviles() {
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
	// alert(event.dataTransfer.getData("text"));
	r = event.dataTransfer.getData("text");
	document.getElementById(event.target.id).value  = event.dataTransfer.getData("text");
	//alert(event.target.appendChild(document.getElementById(movil)));

}

function inicioD(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function Cancelar(){
	errores = 0;
	cargaReinicio();
}

function cot(){
	document.getElementById(("ipat"+valor)).value  = " ";
	var val = parseInt(valor) - 1;
	if( r == correcto[val]){
		
		if(valor == 4){
			textoFinal();
		}else{
			sigNivel();	
		}		
	}else{
		errores++;
		cargaError();
	}
}



