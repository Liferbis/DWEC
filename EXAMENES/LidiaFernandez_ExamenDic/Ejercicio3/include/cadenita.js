function Cadenita(texto){
	this.texto = texto;
	this.lon = this.texto.length;
	
	this.ristra = function (){
		var pala = this.texto.split(" ");
		var ret = "<p>**FRASE: " + this.texto + " Con un total de: " + pala.length + " palabras</p>";
		for(var i = 0; i < pala.length; i++){
			ret += "<p>Palabra " + i + ": " + pala[i] + "</p>";
		}
		return ret;
	};

	this.reves = function (){
		var pala = this.texto.split(" ");
		var ret = "<p>**FRASE: " + this.texto + " \n Con un total de: " + pala.length + " palabras</p>";
		for(var i = 0; i < pala.length; i--){
			ret += "<p>Palabra " + i + ": " + pala[i] + "</p>";
		}
		return ret;
	};

	this.buscar = function (palabra){
		
	};

	this.mayus = function (){
		
	};

}

 