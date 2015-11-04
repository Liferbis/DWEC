var imag = new Array();
var tiradas;
var numero;
var contador;
var tira=false;


addEventListener('load', img, false);

function img(){
	imag = [
			"include/img/001.jpg",
			"include/img/002.jpg",
			"include/img/003.jpg",
			"include/img/004.jpg",
			"include/img/005.jpg",
			"include/img/006.jpg"
		];
	numero=0;
	contador=0;
	tiradas = [0,0,0,0,0,0];
	document.getElementById("tirar").disabled=false;
}

function cambio(){
	var image = document.getElementById('myImagen');
	var ram=Math.floor((Math.random() * 6) + 0);
	cuentatirada(ram);
	if(numero==ram){
		contador++;
		if(contador == 2){
			alert("Te ha salido la misma figura 3 veces seguidas");
			contador=0;
			elementosF();
			tira=true;
		}
	}else{
		numero=ram;
		contador=0;
	}

    image.src = imag[ram];
    
}

function elementosF(){
	document.getElementById("tirar").disabled=true;
	document.getElementById("tirar").setAttribute('hidden','hidden');
	document.getElementById("volver").removeAttribute('hidden');

}

function volver(){
	img();
	document.getElementById("tirar").removeAttribute('hidden');
	document.getElementById("volver").setAttribute('hidden','hidden');

}

function cuentatirada(ram){
	tiradas[ram]++;
}

function maxmin(){
	if(tira){
		var mayor=0;
		var menor=tiradas[0];
		var posicionMay;
		var posicionMen;

		for(variable in tiradas){
			if(tiradas[variable]>mayor){
				mayor=tiradas[variable];
				posicionMay=parseInt(variable)+1;
			}
			if(tiradas[variable]<menor){
				menor=tiradas[variable];
				posicionMen=parseInt(variable)+1;
			}
		}
		alert("La mayor tirada ha sido del numero: " + posicionMay + " con un total de " + mayor + " veces. \n La menor tirada ha sido del numero: " + posicionMen + " con un total de " + menor + " veces.");
	}else{
		alert("Debes terminar la partida antes de mostrar los resultados");
	}
}

function cuenta(){
	if(tira){
		var texto = "Contador de veces de cada tirada: \n";

		for(variable in tiradas){
			texto += "\n" + (parseInt(variable)+1)+" -> " + tiradas[variable] + " veces ha salido";
		}
		alert(texto);
	}else{
		alert("Debes terminar la partida antes de mostrar los resultados");
	}
	
}

