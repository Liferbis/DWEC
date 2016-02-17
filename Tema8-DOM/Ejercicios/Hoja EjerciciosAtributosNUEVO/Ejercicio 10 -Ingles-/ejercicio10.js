addEventListener("load", one);

var temas;
var frte1; 
var frte2;
var frte3;
var frte4;
var correcto;
var errores;

function one(){
	fueraTemas();
	correcto = ["white", "pull", "daddy", "better"];
	frte1 = document.getElementById("ipat1");
	frte2 = document.getElementById("ipat2");
	frte3 = document.getElementById("ipat3");
	frte4 = document.getElementById("ipat4");
	errores = 0;

}


function fueraTemas(){
	document.getElementById("Tema1").setAttribute('hidden','hidden');
	document.getElementById("Tema2").setAttribute('hidden','hidden');
	document.getElementById("Tema3").setAttribute('hidden','hidden');
	document.getElementById("Tema4").setAttribute('hidden','hidden');
	document.getElementById("correc").setAttribute('hidden','hidden');
	document.getElementById("erroneo").setAttribute('hidden','hidden');
	document.getElementById("final").setAttribute('hidden','hidden');
	document.getElementById("inicial").removeAttribute('hidden');

}

function fuesT(){
	document.getElementById("inicial").setAttribute('hidden','hidden');
	document.getElementById("final").setAttribute('hidden','hidden');
	document.getElementById("correc").setAttribute('hidden','hidden');
	document.getElementById("Tema1").setAttribute('hidden','hidden');
	document.getElementById("Tema2").setAttribute('hidden','hidden');
	document.getElementById("Tema3").setAttribute('hidden','hidden');
	document.getElementById("Tema4").setAttribute('hidden','hidden');
	document.getElementById("erroneo").setAttribute('hidden','hidden');
}

function Temas1(){
	fuesT();
	document.getElementById("Tema1").removeAttribute('hidden');
}

function Temas2(){
	fuesT();
	document.getElementById("Tema2").removeAttribute('hidden');
}

function Temas3(){
	fuesT();
	document.getElementById("Tema3").removeAttribute('hidden');
}

function Temas4(){
	fuesT();
	document.getElementById("Tema4").removeAttribute('hidden');
}

function Cancelar(){
	fueraTemas();
}

function sigNivel(){
	document.getElementById("correc").removeAttribute('hidden');
}

function Fin(){
	document.getElementById("final").removeAttribute('hidden');

	var texto = errores;

	if(errores => 3){
		var texto = errores + " fallos!!! <br><br>Has llegado, muy bien, pero...<br>¿NO CRRES QUE DEBERIAS ESTUDIAR UN POCO MAS?";
	}

	document.getElementById("Terr").innerHTML = texto;
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

