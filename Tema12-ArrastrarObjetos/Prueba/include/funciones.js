var a;
var b;


addEventListener("load", init);

function init(){
	a = document.getElementById("arra");
	b = document.getElementById("solt");

	a.addEventListener("dragover", sobre);
	a.addEventListener("drop", encima);

	b.addEventListener("dragover", sobre);
	b.addEventListener("drop", encima);

	//Hacemos los elementos arrastables
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