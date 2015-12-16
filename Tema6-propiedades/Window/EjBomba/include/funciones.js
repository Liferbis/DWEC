var con;
var movi;
var aux;
var imag = new Array();
var tiem="00:00:";
var image;

addEventListener('load', carga, false);

function carga(){

	fueraJ();
	fueraR();
	con = 10;
	imag = [
			"include/imagenes/bom0.png",
			"include/imagenes/bom1.png",
			"include/imagenes/bom2.png",
			"include/imagenes/bom3.png",
			"include/imagenes/bom4.png",
			"include/imagenes/uf.png"
		];
	image = document.getElementById('myImagen');
	var tex= tiem+con
	document.getElementById('ti').innerHTML = tex;
}
/*
/////////////////////////////////////////////////
/////////       BOTONES EMPEZAR         ///////////
/////////////////////////////////////////////////

Botones de EMPEZAR INVisibles!!
*/
function fueraE(){
	document.getElementById("empezar").setAttribute('hidden','hidden');
}
/*
 Botones de EMPEZAR Visibles!!
*/
function dentroE(){
	document.getElementById("empezar").removeAttribute('hidden');
}
/* ------------------ FIN ------------------------------*/


/*
/////////////////////////////////////////////////
/////////       BOTONES JUEGO         ///////////
/////////////////////////////////////////////////

Botones de juego INVisibles!!
*/
function fueraJ(){
	document.getElementById("opc").setAttribute('hidden','hidden');
}
/*
 Botones de juego Visibles!!
*/
function dentroJ(){
	document.getElementById("opc").removeAttribute('hidden');
}

/* ------------------ FIN ------------------------------*/

/*
/////////////////////////////////////////////////
/////////       BOTONES VOLVER        ///////////
/////////////////////////////////////////////////

Botones de VOLVER INVisibles!!
*/
function fueraR(){
	document.getElementById("star").setAttribute('hidden','hidden');
}
/*
 Botones de VOLVER Visibles!!
*/
function dentroR(){
	document.getElementById("star").removeAttribute('hidden');
}
/* ------------------ FIN ------------------------------*/


/*
/////////////////////////////////////////////////
/////////       ONCLICK() FUNCTIIONS    /////////
/////////////////////////////////////////////////

CUANDO PULSAS EL BOTON JUGAR!!
*/
function jugar(){
	con = 10;
	fueraE();
	fueraR();
	document.getElementById("ini").setAttribute('hidden','hidden');
	document.getElementById('myImagen').className = "myImag";
	document.getElementById('myImagen').src = imag[0];
	dentroJ();
	t();
}

function t(){
	fueraR();
	movi = setInterval( function(){
			con--;
			if(con <= 4){
				image.src = imag[2];
			}else{
				image.src = imag[1];
			}
						
			document.getElementById('ti').innerHTML = tiem + "0" + con;
			if(con == 0){
				explota();
			}
		} , 1000);
}



function val(n){
	var num= Math.floor((Math.random() * 3) + 0);
	if( n == num){
		desactivada();
	}else{
		explota();
	}
}

function valB(){
	var num= Math.floor((Math.random() * 3) + 0);

}

function valC(){
	var num= Math.floor((Math.random() * 3) + 0);

}

function explota(){
	clearInterval(movi);
	document.getElementById('myImagen').src = imag[3];
	movi = setTimeout( function(){
			fin();
		} , 500);
	
}

function fin(){
	fueraJ();
	document.getElementById('myImagen').src = imag[4];
	dentroR();
}

function desactivada(){
	clearInterval(movi);
	fueraJ();
	document.getElementById('myImagen').src = imag[5];
	dentroR();
	
}
