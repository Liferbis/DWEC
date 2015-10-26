var num1;
var num2;

addEventListener('load', numeros, false);

function numeros(){
	var salir;
	do{
		nume=prompt("Introduce el primer numero");
		numer=prompt("Introduce el segundo numero");
		var numero1=validarNum(nume);
		var numero2=validarNum(numer);
		if(numero1==0 && numero2==0){
			salir=0;
			num1=parseInt(nume);
			num2=parseInt(numer);
			opc();
		}else{
			salir=1;
			alert("Algún numero introducido no es correcto\n intentemoslo de nuevo!!");
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

function opc(){
	var salida;
	do{
		operacion = prompt("Elige una opcion:\n \t1-Suma  \n \t2-resta\n \t3-mutiplicación\n \t4-división", "1 , 2 , 3  o 4");
		var opci=validarNum(operacion);
		if(opci==0){
			salida=0;
			//alert("opci: "+opci);
			//alert("operacion:"+operacion);
			operacion=parseInt(operacion);
			//alert("operacion:"+operacion);
			calcular(operacion, num1, num2);
		}
		if(opci!=0){
			salida=1;
		}
	}while(salida != 0);
	

}

function calcular(operacion, num1, num2){
	switch (operacion){
		case 1:
			resultado=parseInt(num1)+parseInt(num2);
		    document.write("<h1>Suma: "+resultado+"</h1>");
		    botonVolver();
		    break;
		case 2:
		    resultado=parseInt(num1)-parseInt(num2);
		    document.write("<h1>Resta: "+resultado+"</h1>");
		    botonVolver();
		    break;
		case 3:
		    resultado=parseInt(num1)*parseInt(num2);
		    document.write("<h1>Mutiplicación: "+resultado+"</h1>");
		    botonVolver();
		    break;
		case 4:
		    resultado=parseInt(num1)/parseInt(num2);
		    document.write("<h1>División: "+resultado+"</h1>");
		    botonVolver();
		    break;
		default:
			document.write("<h1>NO HAS ELEGIDO UNA OPCION CORRECTA!</h1>");
			botonVolver();
		    break;
	}
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function cancelar(){
	document.write("<h3>No has introducido numero, o le has dado a cancelar</h3>");	
	botonVolver();
}