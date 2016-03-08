var neveraIM;
var imagen;
var check;
var dato;
var botCom;
var botCog;

var pros = new Array();
var cant = new Array();
var disp = new Array();
var texto;

addEventListener("load", init);

function init(){	
	pros = ["Leche", "Agua", "Zumo", "Yogures", "Mantequilla", "Verduras", "Jamón", "Pescado", "Carne"];
	//cant = ["5", "6", "3", "24", "2", "5", "8", "4", "5"];
	disp = ["1", "2", "1", "4", "0", "2", "7", "0", "3"];
	
	check = document.getElementById("chec");
	dato = document.getElementById("dat");
	neveraIM = document.getElementById('nevera');
	imagen = document.getElementById("imag");

	//neveraIM

	imagen.addEventListener("click", cambio);
	pintaVacios();
}

function compra(){
	
	 for(var i = 0; i < check.childNodes.length; i++){
	// 	if(){
		alert(check.childNodes[i].type);
			//.checked = true;
	// 	}
	 }
}

function cambio(){
	if(imagen.className == "vacia" ){
		imagen.src = "imagenes/Llena.jpg";
		imagen.className = "Llena";
		pintaHay();
		
	}else{
		imagen.src = "imagenes/vacia.jpg";
		imagen.className = "vacia";
		pintaVacios();
		
	}
}

function pintaHay(){
	 borrarHijos(chec);
	var prID;
	for(var i = 0; i < pros.length; i++){
		if(disp[i]>0){
			var a = "pr"+i;
			var pid = new Array();
			pid["id"] = a;
			check.appendChild(CrearEtiquetas("p" , null , pid));
			prID = document.getElementById(a);

			var auxx = new Array();
			auxx["type"] = "checkbox";
			auxx["name"] = "ch";
			auxx["value"] = pros[i];
			prID.appendChild(CrearEtiquetas("input", null, auxx));
			prID.appendChild(CrearEtiquetas(null, pros[i], null));

			var aux = new Array();
			aux["type"] = "number";
			aux["class"] = "prod";
			aux["id"] = pros[i];
			aux["min"]= "0";
			aux["max"]= disp[i];
			var tex = " /" + disp[i];
			
			prID.appendChild(CrearEtiquetas("input", tex , aux));
			prID.appendChild(CrearEtiquetas(null, tex, null));
			document.getElementById(pros[i]).value = "1";
		}
	}

	var bo = new Array();
	bo["type"] = "button";
	bo["id"] = "coger";
	bo["class"] = "btn";
	bo["value"] = "Coger";
	check.appendChild(CrearEtiquetas("input" , null , bo));
	botCog = document.getElementById("coger");
	botCog.addEventListener("click", cogerr);
}

function pintaVacios(){
	borrarHijos(chec);
	var prID;
	for(var i = 0; i < pros.length; i++){
		if(disp[i] == 0){
			var pid = new Array();
			pid["id"]= pros[i];
			check.appendChild(CrearEtiquetas("p" , null , pid));
			prID = document.getElementById(pros[i]);

			var auxx = new Array();
			auxx["type"] = "checkbox";
			auxx["value"] = pros[i];
			prID.appendChild(CrearEtiquetas("input", null, auxx));

			prID.appendChild(CrearEtiquetas(null, pros[i], null));

			var aux = new Array();
			aux["type"] = "number";
			aux["class"] = "prod";
			aux["id"]=pros[i];
			aux["min"]= "0";
			aux["max"]= "10";
			var tex = " / (10max)";
			
			prID.appendChild(CrearEtiquetas("input", tex , aux));
			prID.appendChild(CrearEtiquetas(null, tex, null));
		}
	}
	var bo = new Array();
	bo["type"] = "button";
	bo["id"] = "comprar";
	bo["class"] = "btn";
	bo["value"] = "Comprar";
	check.appendChild(CrearEtiquetas("input" , null , bo));
	botCom = document.getElementById("comprar");
	botCom.addEventListener("click", compra);
}

function cogerr() {
	var c = 0;
	var posicion;
	var nod = document.getElementsByName("ch");
	for(var i = 0; i < nod.length; i++){
		if(nod[i].checked){
			c++;
			alert(nod[i].value);//da el nombre
			alert(document.getElementById(nod[i].value).value); //da el numero en el input
			posicion = pros.indexOf(nod[i].value); //da la posicion en el array
		}
	}

	if(c == 0){
		alert("No has seleccionado ningun producto!");
	}

}

function localStor() {
		pros = ["Leche", "Agua", "Zumo", "Yogures", "Mantequilla", "Verduras", "Jamón", "Pescado", "Carne"];
		cant = ["5", "6", "3", "24", "2", "5", "8", "4", "5"];
		disp = ["1", "2", "1", "4", "0", "2", "7", "0", "3"];
	for(var i = 0; i < pros.length; i++){
		//localStorage.pros[i] = 
		cant
		disp
	}
	//nombre=nom; 
	//localStorage.email=ema; 
}




