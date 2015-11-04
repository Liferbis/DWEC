var alumno = new Array();
var alumnos = new Array();
var medias = new Array();
var evaluacion = new Array();

function carga(alumno){
	alumnos.push(alumno);
}

function datos(){
	var salir=0;
	var nombre=prompt("Nombre del alumno:");
	var trimestre= "1";
	var n1=pidenota(trimestre);
	var trimestre= "2";
	var n2=pidenota(trimestre);
	var trimestre= "3";
	var n3=pidenota(trimestre);

	alumno=[nombre, n1, n2, n3];

	carga(alumno);
}

function pidenota(trimestre){
	
	do{
		var nota=parseFloat(prompt("Nota del trimestre " + trimestre + " :"));

		var correcto = verifica(nota);

		if(correcto){
			salir = 1;
		}else{
			salir = 0;
		}
	}while(salir != 1);

	return nota;
}

function verifica(nota){

	if(isFinite(nota)){
		if( nota==null || nota=="") {
			return false;
		}else{
			return true;
		}
	}else{
		return false;
	}
}

function muestra(){

	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th></tr></thead>";
	for(variable in alumnos){
		texto+= "<tbody><tr>";
		for (var i = 0; i < alumnos[variable].length; i++) {
			var vari=alumnos[variable][i];
			texto+= "<td>" + vari + "</td>";
		};
		texto+= "</tr>";
	}
	texto+="</tbody></table>";

	document.getElementById('tabla').innerHTML = texto;
}

function media(){

	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Media</th></tr></thead>";
	for(variable in alumnos){
		
		var ev1=0;
		var ev2=0;
		var ev3=0;
		texto+= "<tbody><tr>";
		for (var i = 0; i < alumnos[variable].length; i++) {
			if(i==0){
				texto+= "<td>" + alumnos[variable][i] + "</td>";
			}else{
				if(i==1){
					ev1+=alumnos[variable][i];
				}else if(i==2){
					ev2+=alumnos[variable][i];
				}
				texto+= "<td>" + alumnos[variable][i] + "</td>";
				med+=parseFloat(alumnos[variable][i]);
			}
			
		};
		med=med/3;
		medias.push(med);

		texto+= "<td>" + med + "</td>";
		texto+= "</tr>";
	}
	texto+="</tbody></table>";

	document.getElementById('tabla').innerHTML = texto;
}

function evaluac(){
	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Media</th></tr></thead>";
	for(variable in alumnos){
		var med=0;
		var ev1=0;
		var ev2=0;
		var ev3=0;
		texto+= "<tbody><tr>";
		for (var i = 0; i < alumnos[variable].length; i++) {
			if(i==0){
				texto+= "<td>" + alumnos[variable][i] + "</td>";
			}else{
				if(i==1){
					ev1+=alumnos[variable][i];
				}else if(i==2){
					ev2+=alumnos[variable][i];
				}
				texto+= "<td>" + alumnos[variable][i] + "</td>";
				med+=parseFloat(alumnos[variable][i]);
			}
			
		};
		med=med/3;
		medias.push(med);

		texto+= "<td>" + med + "</td>";
		texto+= "</tr>";
	}
	texto+="</tbody></table>";

	document.getElementById('tabla').innerHTML = texto;
}