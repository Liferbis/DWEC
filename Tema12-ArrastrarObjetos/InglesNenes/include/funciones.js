
var temas;
var frte1; 
var frte2;
var frte3;
var frte4;
var correcto;
var errores;

var a;
var b;


addEventListener("load", init);

function init(){
	fueraTemas();

	errores = 0;
	correcto = ["white", "pull", "daddy", "better"];
	
	frte1 = document.getElementById("ipat1");
	frte2 = document.getElementById("ipat2");
	frte3 = document.getElementById("ipat3");
	frte4 = document.getElementById("ipat4");
	

	a = document.getElementById("arra");
	b = document.getElementById("solt");

	a.addEventListener("dragover", sobre);
	a.addEventListener("drop", encima);

	b.addEventListener("dragover", sobre);
	b.addEventListener("drop", encima);

	arrastables();
	//Hacemos los elementos arrastables
	
}

function arrastables(){
	var arrastables = document.getElementsByClassName("aarras");
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
	var movil = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(movil));

}

function inicioD(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function Cancelar(){
	fueraTemas();
}

function Err(){
	document.getElementById("erroneo").removeAttribute('hidden');
	document.getElementById("Nerr").innerHTML = errores;
}

function p1(palabra){
	frte1.value = palabra;
}

function cot1(){
	if(frte1.value == correcto[0]){
		fuesT();
		sigNivel();
	}else{
		errores++;
		Err();
	}
}

function p2(palabra){
	frte2.value = palabra;
}

function cot2(){
	if(frte2.value == correcto[1]){
		fuesT();
		sigNivel();
	}else{
		errores++;
		Err();
	}
}

function p3(palabra){
	frte3.value = palabra;
}

function cot3(){
	if(frte3.value == correcto[2]){
		fuesT();
		sigNivel();
	}else{
		errores++;
		Err();
	}
}

function p4(palabra){
	frte4.value = palabra;
}

function cot4(){
	if(frte4.value == correcto[3]){
		fuesT();
		Fin();
	}else{
		errores++;
		Err();
	}
}

