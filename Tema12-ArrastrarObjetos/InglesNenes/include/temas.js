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

function sigNivel(){
	document.getElementById("correc").removeAttribute('hidden');
}

function Fin(){
	document.getElementById("final").removeAttribute('hidden');

	var texto = errores;

	if(errores => 3){
		var texto = errores + " fallos!!! <br><br>Has llegado, muy bien, pero...<br>¿NO CREES QUE DEBERIAS ESTUDIAR UN POCO MAS?";
	}

	document.getElementById("Terr").innerHTML = texto;
}