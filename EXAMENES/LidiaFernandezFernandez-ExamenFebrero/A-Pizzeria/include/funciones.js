var che;
var texto;

var nodoIngre;
var nodoMarca;
var nodoDesmarca;
var nodoMarcador;
var nodoSpan;
var nodoPedido;

var ingre = new Array();
var pedido = new Array();

addEventListener("load", init);

function init(){	
	ingre = ["Mozarella" ,"Tomate", "Aceitunas", "Atun", "Bacon", "Champiñon", "Salami", "Calabacín", "Elemental"];

	nodoIngre = document.getElementById('ingredientes');
	nodoMarca = document.getElementById("todos");
	nodoMarcador = document.getElementById("marcador");
	nodoSpan = document.getElementById("textoo");
	nodoPedido = document.getElementById("pedido");

	nodoMarca.addEventListener("change", marcar);
	// nodoDesmarca.addEventListener("click", desMarcar);
	nodoPedido.addEventListener("click", pedido);
	ingredient();
}

function ingredient(){
	borrarContenido(nodoIngre);

	// var inp = ;

	for(var i = 0; i < ingre.length; i++){
		var arrAtt = new Array();
		arrAtt['type'] = "checkbox";
		arrAtt['value'] = "ingre[i]";

		nodoIngre.appendChild(CrearEtiquetas('input',  nodoIngre.appendChild(document.createTextNode(ingre[i])) , arrAtt));
		nodoIngre.appendChild(CrearEtiquetas('br', null, null));
	}
}

function desMarcar(){
	
	var contenido =" Marcar todos";

	borrarContenido(nodoSpan);
	escribe(nodoSpan, contenido);
	nodoMarca.setAttribute("id", "todos");
	nodoMarca.setAttribute("checked", "false");
	nodoMarca.removeEventListener("change", desMarcar);
	nodoMarca.addEventListener("change", marcar);


	for( var i = 0; i < nodoIngre.childNodes.length; i++){
		if(nodoIngre.childNodes[i].nodeName == "INPUT"){
			nodoIngre.childNodes[i].removeAttribute("checked");
		}
	}

}

function marcar(){
	//borrarContenido(nodoMarcador);
	var contenido =" Desmarcar todos";
	
	borrarContenido(nodoSpan);
	escribe(nodoSpan, contenido);

	nodoMarca.setAttribute("id", "desMarcar");

	nodoMarca.removeAttribute("checked");
	nodoMarca.removeEventListener("change", marcar);
	nodoMarca.addEventListener("change", desMarcar);

	for( var i = 0; i < nodoIngre.childNodes.length; i++){
		if(nodoIngre.childNodes[i].nodeName == "INPUT"){
			nodoIngre.childNodes[i].setAttribute("checked", "checked");
		}
	}
}


function pedidos(){
	//alert(document.formu.nodeName);
	if(document.formu.igr.checked == "checked"){
		alert(document.form.igr.value);
	}
	// for( var i = 0; i < nodoIngre.childNodes.length; i++){
	// 	if(nodoIngre.childNodes[i].nodeName == "INPUT"){
	// 		alert(nodoIngre.childNodes[i].getAttribute("checked") );//removeAttribute("checked");
	// 	}
	// }
}


