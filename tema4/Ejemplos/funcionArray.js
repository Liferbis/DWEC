var longi;
var a = new Array();

function introducir(){
	var validar;
	do{
		var nume=prompt("¿Cuántos números vas a introducir?");
		var correcto=validarNum(nume);

		if(correcto==0 ){
			validar=0;
			longi=parseInt(nume);
			//alert(longi);
			numeros(longi);
		}else{
			validar=1;
			alert("Algún número introducido no es correcto\n intentemoslo de nuevo!!");
		}
	}while(validar!=0);
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
function numeros(longi){
	var nbien;
	for (var i = 0; i <= (longi-1); i++) {
		do{
			var num=prompt("Introducir número");
			var nbien=validarNum(num);
			if(nbien==0 ){
				validar=0;
				//alert(num);
				a.push(parseInt(num));
			}else{
				validar=1;
				alert("Algún numero introducido no es correcto\n intentemoslo de nuevo!!");
			}
		}while(validar!=0);
	};
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function mostrar(){
	// alert(a);
	if(a==""){
		document.write("<h1>Antes de mostrar debes introducir!!</h1>");
		botonVolver();
	}else{
		var f;
		document.write("<h1>");
		/** FOR NORMAL 
			for (var f = 0; f < a.length; f++) {
				if(f==(a.length-1)){
					document.write( " <br>Numero: " +f + "= Valor--  " + a[f] +"</h1>");
				}else{
					document.write( " <br>Numero: " +f + "= Valor--  " + a[f] );
				}
			};
		*/
		/** FOR-IN */
			for(var indice in a){
				document.write("</br>");
				document.write(indice+'-> '); 
				document.write(a[indice]);	
			}
		/** FOR-EACH 
		a.forEach(function(value, index){
			document.write( " <br>Numero: " + index + "= Valor-->  " + value );
		});*/
		document.write("</h1>");

		
		botonVolver();
	}

}

function addin(){
	if(a==""){
		document.write("<h1>Para tener una suma debes tener valores!!</h1>");
		botonVolver();
	}else{
		var f=0;
		document.write("<h1>La suma de valores es: ");
		
		a.forEach(
			function addNumbre(value) {
				f+= value;
			} 
		);
		document.write( f + "</h1>");

		botonVolver();
	}
}