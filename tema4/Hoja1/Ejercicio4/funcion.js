var contador=0;

addEventListener('load', datos, false);

function datos(){
	do{
		num1=prompt("Introduce el numero");
		salir=validarNum(num1);
		if(salir==1){
			contador++;
		}
		if(salir==2){
			alert("SOLO ACEPTA NUMEROS");
		}
	}while(salir != 0);
}

function validarNum(num1){
	if(isFinite(num1)){
		if( num1==null || num1=="") {
			return 0;
		}else{
			return 1;
		}
	}else{
		return 2;
	}
	
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function mostrar(contador){
	document.write("<h3>El total de numeros introducidos es: "+contador+"</h3>");	
	botonVolver();
}



