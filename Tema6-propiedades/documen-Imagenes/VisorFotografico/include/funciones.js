var con;
var movi;
var rel;
var imag = new Array();
var dimag;
var myWindow;
var rel;
var fecha;

addEventListener('load', carga, false);

function carga(){
	imag = [
			"include/imagenes/img1.png",
			"include/imagenes/img2.png",
			"include/imagenes/img3.png",
			"include/imagenes/img4.png",
			"include/imagenes/img5.png",
			"include/imagenes/img6.png",
			"include/imagenes/img7.png",
			"include/imagenes/img8.png",
			"include/imagenes/img9.png"
		];
	dimag = document.getElementById('myImagen');
	con = 0;
	fecha = new Date();
	IniciaC();
	IniciaR();
	
}


function IniciaC(){
	movi = setInterval( function(){
		dimag.src = imag[con];
		con++;
		if(con == 8){
			con = 0;
		}
	} , 2000);
}


function IniciaR(){
	rel=setInterval( function(){
		var texto= fecha.getHours() + " : " + fecha.getMinutes() + " : " + fecha.getSeconds();
		document.getElementById('reloj').innerHTML = texto;
		fecha.setSeconds(parseInt(fecha.getSeconds())+1);

	} , 1000);	
}
 
function wind(num){
	var ima = "include/imagenes/img" + num + ".png";

	var texto="<html><head><title>Animalito</title><link href='include/estilo.css' rel='stylesheet'></head><body><img class='animalito' onclick='window.close()' src='"+ ima +"' alt='1'><br><hr><br><button class='botones'onclick='window.close()'>Cerrar ventana</button></body></html>";

	
	myWindow = window.open("" , "" , "width=400,height=410");
	myWindow.document.write(texto);
		
}

function atras(){
	if(con==0){
		con=8;
	}else{
		con--;
	}
	dimag.src = imag[con];
}

function parar(){
	clearInterval(movi);
}

function sigue(){
	if(con==8){
		con=0;
	}else{
		con++;
	}
	dimag.src = imag[con];
}

