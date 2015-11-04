var alumnos = new Array();
var ingleses = new Array();
var alumnos2 = new Array();
var claseA = new Array();
var claseB = new Array();
var desaparecidos = new Array();

function arrayAlumnos(){
	alumnos = ["Juan López" ,"Luis Guerra", "María de la Hoz", "Elena Gómez", "Julia Caba"];
}

function arrayIngleses(){
	ingleses = ["John Smith", "Lia Warner", "Oscar Klein" , "Edward Crow"];
}

function visualizaAl(){
	var texto="Alumnos: \n";
	for(variable in alumnos){
		texto+= "\n ->" + alumnos[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos.length;
	alert(texto);
}

function visualizaIn(){
	var texto="Alumnos Ingleses: \n";
	for(variable in ingleses){
		texto+= "\n ->" + ingleses[variable];
	}
	texto+="\n\nTotal de alumnos: "+ingleses.length;
	alert(texto);
}

function unir(){
	arrayAlumnos(); 
	arrayIngleses(); 
	alumnos2=alumnos.concat(ingleses);
	alumnos2.sort();
	var texto="Alumnos totales: \n";
	for(variable in alumnos2){
		texto+= "\n ->" + alumnos2[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos2.length;
	alert(texto);
}

function comas(alumnos2){
	alert(alumnos2.join(" , "));
}

function rev(){
	arrayAlumnos(); 
	arrayIngleses(); 
	alumnos2=alumnos.concat(ingleses);
	alumnos2.reverse()
	var texto="Alumnos totales: \n";
	for(variable in alumnos2){
		texto+= "\n ->" + alumnos2[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos2.length;
	alert(texto);
}

function unomas(){
	arrayAlumnos(); 
	arrayIngleses(); 
	alumnos2=alumnos.concat(ingleses);
	alumnos2.unshift("Lidia Fernandez");
	var texto="Alumnos totales: \n";
	for(variable in alumnos2){
		texto+= "\n ->" + alumnos2[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos2.length;
	alert(texto);
}

function unomenos(){
	// arrayAlumnos(); 
	// arrayIngleses(); 
	// alumnos2=alumnos.concat(ingleses);
	alert("Alumno que se ha dado de baja: \n" + alumnos2.shift());
	var texto="Alumnos totales: \n";
	for(variable in alumnos2){
		texto+= "\n ->" + alumnos2[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos2.length;
	alert(texto);
}

function otromenos(){
	// arrayAlumnos(); 
	// arrayIngleses(); 
	// alumnos2=alumnos.concat(ingleses);
	alert("Alumno que se ha dado de baja: \n" + alumnos2.pop());
	var texto="Alumnos totales: \n";
	for(variable in alumnos2){
		texto+= "\n ->" + alumnos2[variable];
	}
	texto+="\n\nTotal de alumnos: "+alumnos2.length;
	alert(texto);
}

function clases(){
	claseA=alumnos2.slice(0,((alumnos2.length)/2));
	claseB=alumnos2.slice(((alumnos2.length)/2), (alumnos2.length));
	var texto="Alumnos Clase A: \n";
	for(variable in claseA){
		texto+= "\n ->" + claseA[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseA.length;

	texto+="\n\n Alumnos Clase B: \n";
	for(variable in claseB){
		texto+= "\n ->" + claseB[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseB.length;
	alert(texto);
}

function clas(claseA,claseB){
	alert(claseA.join(" - ")+" - "+ claseB.join(" - "))
}

function orden(claseA,claseB){
	var texto="Alumnos Clase A: \n";
	claseA.sort();
	for(variable in claseA){
		texto+= "\n ->" + claseA[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseA.length;
	claseB.sort();
	texto+="\n\n Alumnos Clase B: \n";
	for(variable in claseB){
		texto+= "\n ->" + claseB[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseB.length;
	alert(texto);
}

function boan(claseA,claseB){
	claseA.splice(2, 1);
	claseA.sort();
	var texto="Alumnos Clase A: \n";
	for(variable in claseA){
		texto+= "\n ->" + claseA[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseA.length;

	claseB.splice(2, 1, "Lidia Fernandez", "Pepito Grillo");
	claseB.sort();
	texto+="\n\n Alumnos Clase B: \n";
	for(variable in claseB){
		texto+= "\n ->" + claseB[variable];
	}
	texto+="\n\nTotal de alumnos: "+claseB.length;
	alert(texto);
}

function desap(claseA, claseB){
	arrayAlumnos(); 
	arrayIngleses(); 
	var aux = new Array();
	var aux2;
	var clasess = claseA.concat(claseB);
	clasess.sort();

	alumnos2=alumnos.concat(ingleses);
	alumnos2.sort();

	for(variable in clasess){
		aux2=alumnos2.indexOf(clasess[variable]);
		if(aux2==-1){
			aux.push(clases[variable]);
		}
	}

	var texto="Alumnos desaparecidos: \n";
	for(variable in aux){
		texto+= "\n Desaparecido->" + aux[variable];
	}
	alert(texto);
}

