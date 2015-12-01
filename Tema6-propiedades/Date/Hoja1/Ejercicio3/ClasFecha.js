function misFechas(FechaA){
	this.FechaA = FechaA;
	this.dia= FechaA.getDate();
	this.mes= FechaA.getMonth();
	this.ano= FechaA.getFullYear();

	this.visualiza = function(){
		var texto = "Torrelavega a "+ this.dia + " de " + this.FechaA.toLocaleString("es",{month:"long"}) + " de " + this.ano;
		return texto;
	}; 

	this.SumaDias = function (dias){
		this.FechaA.setDate(this.dia+dias);
		this.dia= FechaA.getDate();
		this.mes= FechaA.getMonth();
		this.ano= FechaA.getFullYear();
	};

	this.RestaDias = function (dias){
		this.FechaA.setDate(this.dia-dias);
		this.dia= FechaA.getDate();
		this.mes= FechaA.getMonth();
		this.ano= FechaA.getFullYear();
	};

	this.SumaAnos = function (anos){
		this.FechaA.setFullYear(this.ano-anos);
		this.dia= FechaA.getDate();
		this.mes= FechaA.getMonth();
		this.ano= FechaA.getFullYear();
	};

}
