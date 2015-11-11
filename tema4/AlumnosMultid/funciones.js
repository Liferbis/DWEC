var alumno = new Array();
var alumnos = new Array();
var medias = new Array();
var evaluacion = new Array();
var alusus = new Array();
var suspensos = new Array();

function carga(alumno){
	alumnos.push(alumno);
}

function Edatos(){
	carga(new Array ("Elena", 6,5,3));
	carga(new Array ("Juan", 8, 6,6));
	carga(new Array ("Elisa", 2, 8,3));
	carga(new Array ("Fernando", 7,5,5));
	carga(new Array ("Juana", 10, 8,5));
	carga(new Array ("Pepe", 3, 3,2));
	carga(new Array ("Roberto", 7, 8,2));
	carga(new Array ("Jimena", 2, 6,6));
	carga(new Array ("Luis", 4, 5,5));
	carga(new Array ("Susana", 6, 4,7));
}

function Ndatos(){
	
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
	var med;
	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th><th>Media</th></tr></thead>";
	for(variable in alumnos){
		med = 0;
		texto+= "<tbody><tr>";
		for (var i = 0; i < alumnos[variable].length; i++) {
			if(i==0){
				texto+= "<td>" + alumnos[variable][i] + "</td>";
			}else{
				
				texto+= "<td>" + alumnos[variable][i] + "</td>";
				med+=parseFloat(alumnos[variable][i]);
				// alert("variable"+med);
			}
			
		};
		med=Math.round(med/3) ;
		// alert("media!!"+med);
		medias.push(med);

		texto+= "<td>" + med + "</td>";
		texto+= "</tr>";
	}
	texto+="</tbody></table>";

	document.getElementById('tabla').innerHTML = texto;
}

function evaluac(){
	var ev1=0;
	var ev2=0;
	var ev3=0;
	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Nota 1</th><th>Nota 2</th><th>Nota 3</th></tr></thead>";
	for(variable in alumnos){
		texto+= "<tbody><tr>";
		for (var i = 0; i < alumnos[variable].length; i++) {
			
			if(i==1){
				ev1+=parseFloat(alumnos[variable][i]);
			}else if(i==2){
				ev2+=parseFloat(alumnos[variable][i]);
			}else if(i==3){
				ev3+=parseFloat(alumnos[variable][i]);
			}
			texto+= "<td>" + alumnos[variable][i] + "</td>";		
		}
	}
	var c = alumnos.length;
	ev1=Math.round(ev1/c) ;
	ev2=Math.round(ev2/c) ;
	ev3=Math.round(ev3/c) ;
	
	texto+= "</tr><tr><td>MEDIA EVALUACIONES</td> ";
	texto+= "<td>" + ev1 + "</td>";
	texto+= "<td>" + ev2 + "</td>";
	texto+= "<td>" + ev3 + "</td></tr>";
	texto+="</tbody></table>";

	document.getElementById('tabla').innerHTML = texto;
}

function masmenos(){

	var mayor=0;
	var menor=medias[0];

	for(variable in medias){
		if(medias[variable]>mayor){
			mayor=medias[variable];
		}
		if(medias[variable]<menor){
			menor=medias[variable];
		}
	}
	texto = "La mayor media ha sido : " + mayor + " <br> La menor media ha sido: " + menor ;
	document.getElementById('tabla').innerHTML = texto;
}

function suspen(){
	var posicion; 
	for(variable in medias){
		if(medias[variable]<5){
			var name=alumnos[variable][0];
			var aux=[name, medias[variable] ]
			suspensos.push(aux);
		}
	}
}

function muessus(){
	suspen();
	var texto = "<table class='tabla'><thead><tr><th>Nombre</th><th>Media suspenso</th></tr></thead>";
	texto+= "<tbody>";
	for(variable in suspensos){
		texto+="<tr>";
		for (var i = 0; i < suspensos[variable].length; i++) {
			texto+= "<td>" + suspensos[variable][i] + "</td>";
			
		}
		texto+= "</tr>";
	}

	texto+="</tbody></table>";
	document.getElementById('tabla').innerHTML = texto;
}
