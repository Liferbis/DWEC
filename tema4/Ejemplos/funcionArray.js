var longi;
var a = new Array();
var ar=[1,30,4,5,8,12,15];

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

function extraerValores(ar){
	
	document.write("<h3>Array original: ");
	for(variable in ar){
		document.write( ar[variable] + ", ");
	}
	document.write("</h3>");
	aux=ar.slice(3,5);
	document.write("<h3>Datos extraidos: ");
	for(variable in aux){
		document.write( ar[variable] + ", ");
	}
	document.write("</h3>");
	botonVolver();
}

function ordenarArray(ar){
	
	document.write("<h3>Array original: ");
	for(variable in ar){
		document.write( ar[variable] + ", ");
	}
	document.write("</h3>");
	
	document.write("<h3>Ordenado de menor a mayor: ");
	ar.sort(function(a,b){
		return a-b
	});
	for(variable in ar){
		document.write( ar[variable] + ", ");
	}
	document.write("</h3>");

	document.write("<h3>Ordenado de mayor a menor: ");
	ar.sort(function(a,b){
		return b-a
	});
	for(variable in ar){
		document.write( ar[variable] + ", ");
	}
	document.write("</h3>");
	document.write("<p>*En caso de haber sido un array de string solo seria ar.sort();</p>");
	botonVolver();
}