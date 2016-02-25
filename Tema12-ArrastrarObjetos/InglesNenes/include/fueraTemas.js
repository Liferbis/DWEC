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