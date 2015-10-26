/****** Saludo por pantalla LOGGGG *******/

// function saluda(){
// 	console.log('Hola Hola');
// }

// function ejecuta(func){
// 	func();
// }
// ejecuta(saluda);

/****** funcion de funcion *******/
	// var saluda=function(quien){
	// 	console.log('Hola Hola'+quien);
	// }
	// saluda(" mundo!!")
	/***** autoejecutable  ****////
	// (function(){ console.log("hola mundo ¡¡")}) ()
	/***** autoejecutable ABREVIADA!!!! ****////
	//(function(quien){ console.log("hola "+quien);}) ("mundo!");

/****** función puede devolver una función anónima *******/

// function saludator(quien){
// 	return function(){
// 		alert("hola "+quien);
// 	}
// }
// var saluda=saludator("mundo");
// saluda();


function Sumadora(x) {
	return function(y){
		return (x+y);
	};
}
var sumita4=Sumadora(4);
var sumita8=Sumadora(8);