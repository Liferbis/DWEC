var ctvUsu=0;
var ctvMia=12345;
var aux=0;

addEventListener('load', datos, false);

function datos(){
	do{
		entrar=confirm("¿Quieres entrar?");
		salir=validarEntrar(entrar);
		if(salir==0){
			salir=0;
			cancelar();
		}
		if(salir==1){
			salir=0;
			PideNum();
		}
	}while(salir != 0);
}

function validarEntrar(entrar){
	if(entrar){
		return 1;
	}else{
		return 0;
	}
	
}

function PideNum(){
	var correcto;
	do {
		ctvUsu = prompt("Introduce la contraseña");
		contr=siEs(ctvUsu);
		if(contr){
			correcto=0;
			mostrar();
		}else{
			correcto=1;
		}
	}while (correcto!=0);
}


function siEs(ctvUsu){
	if(ctvUsu == ctvMia){
		return true;
	}else{
		return false;
	}
}

function botonVolver(){
	document.write("<button type='button'><a href='index.html'>Volver</a></button>");
}

function mostrar(){
	document.write("<h3>Has introducido correctamente la contraseña!!</h3>");	
	botonVolver();
}

	
	