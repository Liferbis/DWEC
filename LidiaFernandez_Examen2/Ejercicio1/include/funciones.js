var d="";
var p = 0;
var c = 0;
var n = 0;
var fac = new Array();

addEventListener('load', carga, false);

function carga(){
	fuera();

	var em = new empresa("Tutissss", "C/ Pedazo Examen", "666-666-666", "7584265-BC");
	
	var cl = new cliente("Pepito", "C/ Si no suspendo es de Milagro", "666-999-696", "123-A");

	var inf = new infor(0, 21, "Tarjeta de credito");

	var em1 = new empresa("tu", "C/ La Peste", "600-606-666", "75-C");
	
	var cl1 = new cliente("Popi", "C/ La Rabioa", "666-000-696", "13-D");

	var inf1 = new infor(0, 21, "Al contado");

	var fa = new factura(em, cl, inf);
	var fa1 = new factura(em1, cl1, inf1);

	fac.push(fa);
	fac.push(fa1);
}

function fuera(){
	document.getElementById("datos").setAttribute('hidden','hidden');
}

function mydesc(){
	d = document.getElementById("desc").value;
}

function myprecio(){
	p = Number(document.getElementById("precio").value);
}

function myC(){
	c = parseInt(document.getElementById("cantidad").value);
}

function ag(){
	document.getElementById("datos").removeAttribute('hidden');
}

function myFact(){
	n = Number(document.getElementById("fra").value);
	n = n-1;
}

function agrega(){
	fuera();
	var texto="Elige una factura: </br><ol>";
	
	for(var i = 0; i < fac.length; i++){
		texto +="<li>" + fac[i].empresa.nombreE + " </li>";			
	}

	texto += "</ol></br>Introduce el número de la factura:</br><input type=number id='fra' min='1' max='" + fac.length + "' oninput='myFact()' placeholder='Número de la factura'><button class='botones' type='button' id='Agr' onclick='agre()'>Introduce datos!!</button>";
	document.getElementById('respuesta').innerHTML = texto;
}

function agre(){
	var texto = "";
	
	if(d == "" || p == "" || c ==""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	}else{
		fac[n].AgregarElementos(d,p,c);
		texto="<h3 class='resB'>Agregado correctamente!!</h3>";	
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function calcula(){
	for(var i = 0; i < fac.length; i++){
		fac[i].CalculaFactura();
	}
	var texto="<h3 class='resB'>Calculado correctamente!!</h3>";
	document.getElementById('respuesta').innerHTML = texto;
}

function mostrar(){
	var texto = " ";
	for(var i = 0; i < fac.length; i++){
	 	texto += "<section class='respuesta'>";
	 	texto += fac[i].muestra();
	 	texto += "</section>";
	 }
	document.getElementById('respuesta').innerHTML = texto;
	// document.getElementById("respuesta").className = "respuesta";
}

function vr(){
	var texto =" ";
	for(var i = 0; i < fac.length; i++){
		texto="<h3 class='resB'>Precio Total factura(" + (i+1) +"):  ";
	 	texto += fac[i].ver();
	 	texto += "  !!</h3>";
	}
	document.getElementById('respuesta').innerHTML = texto;
}