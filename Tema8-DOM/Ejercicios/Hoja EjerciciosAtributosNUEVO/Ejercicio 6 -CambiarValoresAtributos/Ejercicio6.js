addEventListener("load", one);
var body;
var te;
var fontSize = 16;
var original= "#e0e0e0";
var org= "#C0C0C0";

function one(){
	body = document.body;
	te = document.getElementById("tres");
}

function aumentarTextTodo(){
	fontSize += 3;
	body.style.fontSize = fontSize + "px";
}

function restauraTexto(){
	fontSize = 16;
	body.style.fontSize = fontSize + "px";
}

function colorBody(){
	var num = Math.floor(Math.random()*99);
	var col = "#" + num + "53" + num ;
	body.style.backgroundColor = col;
}

function colorOriginal(){
	body.style.backgroundColor = original;
}

function aumentarText(){
	fontSize += 3;
	te.style.fontSize = fontSize + "px";
}

function resTexto(){
	fontSize = 16;
	te.style.fontSize = fontSize + "px";
}

function colortext(){
	var num = Math.floor(Math.random()*99);
	var col = "#" + num + "53" + num ;
	te.style.backgroundColor = col;
}

function colortextORG(){
	te.style.backgroundColor = org;
}