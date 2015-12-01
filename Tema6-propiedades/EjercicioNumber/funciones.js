addEventListener('load', carga, false);

function carga(){
	fuera();
}

function fuera(){
	document.getElementById("caja1").setAttribute('hidden','hidden');
	document.getElementById("caja2").setAttribute('hidden','hidden');
	document.getElementById("caja3").setAttribute('hidden','hidden');
	document.getElementById("caja4").setAttribute('hidden','hidden');
	document.getElementById("caja5").setAttribute('hidden','hidden');
}

function miNumber(){
	fuera();
	var texto="";
	var n = document.numero.valor1.value;
	if(isNaN(n) || n == "" ){
		texto = n + "No es número!!";
	}else{
		texto = n + "Si es número!!";
	}
	document.getElementById("caja1").removeAttribute('hidden');
	document.getElementById("caja1").innerHTML = texto; 
}

function comprueba(){
	fuera();
	var texto="";
	var n = document.comprobar.valor2.value;
	if(isNaN(n) || n == "" ){
		texto = n + " No es número!!";
	}else{
		texto = n + " Si es número!!";
	}
	document.getElementById("caja2").removeAttribute('hidden');
	document.getElementById("caja2").innerHTML = texto;
} 

function cambia(){
	fuera();
	var texto="";
	var n = document.cambiaBase.valor3.value;
	var t = Number(document.cambiaBase.base.value);
	var a;
	if(isNaN(n) || n == "" ){
		texto = n + " No es número!!";
	}else{
		if(t==""){
			texto = "Selecciona una base!!";
		}else{
			a = parseInt(n, t);
			texto =" Base " + t + " Numero " + n + " = " + a + " !!";
		}
		
	}
	document.getElementById("caja3").removeAttribute('hidden');
	document.getElementById("caja3").innerHTML = texto;
} 

function redondear(){
	fuera();
	var texto="";
	var n = document.redondeo.valor4.value;
	var t = document.redondeo.decimal.value;
	if(isNaN(n) || n == ""){
		texto = n + " No es número!!";
	}else{
		if(t == ""){
			t=0;
		}
		texto = "Resultado = " + n.toFixed(t);
	}
	document.getElementById("caja4").removeAttribute('hidden');
	document.getElementById("caja4").innerHTML = texto;} 

function propiedades(){
	fuera();
	var texto = "<ul><li>Number.MAX_VALUE: El número más grande representable.</li><li>Number.MIN_VALUE: El número más pequeño representable.</li><li>Number.NaN: Valor especial 'no es número' NaN.</li><li>Number.NEGATIVE_INFINITY: Valor especial para representar infinitos negativos; retorno de un desborde de pila overflow.</li><li>Number.POSITIVE_INFINITY: Valor especial para representar infinitos positivos; retorno de un desborde de pila overflow.</li><li>Number.prototype: Permite la adición de propiedades a un objeto Number</li></ul>";
	document.getElementById("caja5").removeAttribute('hidden');
	document.getElementById("caja5").innerHTML = texto;
} 