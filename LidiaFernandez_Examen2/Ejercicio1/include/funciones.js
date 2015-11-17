var d="";
var p = 0;
var c = 0;
var fac;

addEventListener('load', carga, false);

function carga(){
	fuera();

	var em = new empresa("Tutissss", "C/ Pedazo Examen", "666-666-666", "7584265-BC");
	
	var cl = new cliente("Pepito", "C/ Si no suspendo es de Milagro", "666-999-696", "123-A");

	var inf = new infor(0, 21, "Tarjeta de credito");

	fac = new factura(em, cl, inf);

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

function agrega(){
	fuera();
	var texto = "";
	if(d == "" || p == "" || c ==""){
		texto="<h3 class='resM'>HAY DATOS INCORRECTOS O VACIOS!! <br> No se guarda ningun dato!!</h3>";
	}else{
		fac.AgregarElementos(d,p,c);
		texto="<h3 class='resB'>Agregado correctamente!!</h3>";	
	}
	document.getElementById('respuesta').innerHTML = texto;
}

function calcula(){
	fac.CalculaFactura();
	var texto="<h3 class='resB'>Calculado correctamente!!</h3>";
	document.getElementById('respuesta').innerHTML = texto;
}

function mostrar(){
	var texto="<p class='respuesta'>";
		texto += fac.muestra();
		texto += "</p>";
	document.getElementById('respuesta').innerHTML = texto;
}

function vr(){
	var texto="<h3 class='resB'>Precio Total:  ";
	 	texto += fac.ver();
	 	texto += "  !!</h3>";
	document.getElementById('respuesta').innerHTML = texto;
}