var fac=1;
var texto="";
var num=0;

addEventListener('load', datos, false);

function datos(){
	do{
		num1=prompt("Introduce el numero");
		salir=validarNum(num1);
		if(salir==1){
			salir=0;
			cancelar();
		}
		if(salir==0){
			salir=0;
			num=parseInt(num1);
			calcular(num);
		}
		if(salir==2){
			alert("SOLO ACEPTA NUMEROS");
		}
	}while(salir != 0);
}

function validarNum(num1){
	if(isFinite(num1)){
		if( num1==null || num1=="") {
			return 1;
		}else{
			return 0;
		}
	}else{
		return 2;
	}
	
}

function calcular(num){
	for(var n=num; n>=1; n--){
		fac=fac*n;
		n==1 ? texto+=n :
		texto+=n+" x ";
	}
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function cancelar(){
	document.write("<h3>No has introducido numero, o le has dado a cancelar</h3>");	
	botonVolver();
}

function mostrar(){
	document.write("<h3>El factorial de "+num+" es: </h3> <p>"+num+"! = "+texto+" = "+fac+"</p>");	
	botonVolver();
}