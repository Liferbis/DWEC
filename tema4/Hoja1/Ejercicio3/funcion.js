var num;

addEventListener('load', datos, false);

function datos(){
	do{
		num1=prompt("Introduce el numero");
		correcto=validarNum(num1);
	}while(correcto != true);

}

function validarNum(num1){
	
	if(isFinite(num1)){
		if( num1==null || num1=="") {
			alert("Esa respuesta No es un numero entero");
			return false;
		}else{
			num=parseInt(num1);
			return true;
		}
	}else{
		alert("Esa respuesta No es un numero entero");
		return false;
	}
}

function par(num){
	if(num%2 == 0){
		return true;
	}else{
		return false;
	}
	
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function mostrar(){
	bolean=par(num);
	if(!bolean){
		document.write("<h3>El numero introducido NO es par!!</h3>");	
	}else{
		document.write("<h3>El numero introducido SI es par!!</h3>");		
	}
	botonVolver();
}



