addEventListener('load', carga, false);
var a1;
var a2;
var a3;
var a4;
var a5;

function carga(){
	fuera();
	a1 = parseInt(1000);
	a2 = parseInt(60000);
	a3 = parseInt(3600000);
	a4 = parseInt(86400000);
	a5 = parseInt(31536000000);
}

function fuera(){
	document.getElementById('respuesta').innerHTML = " ";
	document.getElementById("formar").setAttribute('hidden','hidden');
}

function trans(){
	document.getElementById("formar").removeAttribute('hidden');
}

function resta(){
	fuera();
	var texto = "";
	var num = Number(document.fuR.nu.value);
	var opc = document.fuR.sele.value;

	if(num == "" || isNaN(num) || num == null){
		texto = "<article class='resM' >ERROR en el número introducido!!</article>";
	}else{
		texto = "<article class='resB' >";
		switch(opc){
			case "milS":
				texto += num/a1;
				break;
			case "milM":
				texto += num/a2;
				break;
			case "milH":
				texto += num/a3;
				break;
			case "milD":
				texto += num/a4;
				break;
			case "milA":
				texto += num/a5;
				break;
			case "Smili":
				texto += num*a1;
				break;
			case "Mmili":
				texto += num*a2;
				break;
			case "Hmili":
				texto += num*a3;
				break;
			case "Dmili":
				texto += num*a4;
				break;
			case "Amili":
				texto += num*a5;
				break;
		}
		texto += "</article>";
		document.getElementById('respuesta').innerHTML = texto;
	}
}

