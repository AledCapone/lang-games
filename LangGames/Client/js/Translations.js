Translations = function(topic, language)
{
	this.Mappings = this.allTopics[topic];
	this.language = language;
	this.index = 0;
	this.getChoices(language);

};

Translations.prototype.getNextObject = function()
{
	this.index = (this.index < this.Mappings.length - 1) ? this.index + 1 : 0;
	return this.Mappings[this.index];
};

Translations.prototype.getChoices = function(lang)
{
	var SortedTranslationsArray = this._getSortedArray(lang);
	var halfWay = Math.round(SortedTranslationsArray.length / 2);
	this.leftChoices = SortedTranslationsArray.splice(0,halfWay);
	this.rightChoices = SortedTranslationsArray;
}

Translations.prototype.getCurrentTranslation = function()
{
	return this.Mappings[this.index][this.language];
};



Translations.prototype._getSortedArray = function(lang)
{
	var unsortedArray = [];

	for(var i = 0; i < this.Mappings.length ; i++)
	{

	unsortedArray.push(this.Mappings[i][lang]);
	
	}
	return unsortedArray.sort();

}

Translations.prototype.getLanguageOptionsFor = function(topic)
{
	var pOptions = [];
	var oSample = this.allTopics[topic][0];

	for(var property in oSample)
	{
    	if(property != "url" )
    	{
    		pOptions.push(property)
    	}
	}
	return pOptions;

}

Translations.prototype.languageOptions = [

	{ language : "Spanish" , flagUrl : "url('images/SpanishFlag.png')"},
	{ language : "French" , flagUrl : "url('images/FrenchFlag.png')"},
	{ language : "German" , flagUrl : "url('images/GermanFlag.png')"},
	{ language : "Welsh" , flagUrl : "url('images/WelshFlag.png')"}


];

Translations.prototype.categoryOptions = [

	{ language : "animals" , Url : "url('images/Animals.png')"},
	{ language : "rooms" , Url : "url('images/Rooms.png')"}

];






Translations.prototype.allTopics = {

	"animals" : [

	{	 url : "images/El caballo.jpg"	, Spanish : "El caballo" 	, French : "cheval", German : "pferd" , Welsh : "ceffyl"},
	{	 url : "images/El cerdo.jpg"	, Spanish : "El cerdo"		, French : "porc", German : "schwein" , Welsh : "mochyn"},
	{	 url : "images/El cocodrilo.jpg" , Spanish : "El cocodrilo"	, French : "crocodile" , German : "krokodil" , Welsh : "crocodeil"	},
	{	 url : "images/El conejo.jpg" , Spanish : "El conejo" 		, French : "lapin" , German : "kaninchen" , Welsh : "cwningen"},
	{	 url : "images/El delfin.jpg"	, Spanish : "El delfin"		, French : "dauphin" , German : "delphin" , Welsh : "dolffin"},
	{	 url : "images/El elefante.jpg"	, Spanish : "El elefante"	, French : "eliphant" , German : "eliphant" , Welsh : "eliffant"},
	{	 url : "images/El gato.jpg" , Spanish : "El gato" 			, French : "le chat" , German : "katze" , Welsh : "cath"},
	{	 url : "images/El leon.jpg" , Spanish : "El leon" 			, French : "le lion" , German : "Löwe" , Welsh : "llew"},
	{	 url : "images/El mono.jpg" , Spanish : "El mono" 			, French : "le singe" , German : "affe" , Welsh : "mwnci"},
	{	 url : "images/El oso.jpg"	, Spanish : "El oso" 			, French : "l'ours" , German : "bär" , Welsh : "arth"},
	{	 url : "images/El pajaro.jpg"	, Spanish : "El pajaro"		, French : "l'oiseau" , German : "vogel" , Welsh : "parot"},
	{    url : "images/El pato.jpg"   , 	Spanish : "El pato" 	, French : "le canard" , German : "ente" , Welsh : "hwyaden"	},
	{	 url : "images/El perro.jpg"	, Spanish : "El perro"		, French : "le chien" , German : "hund" , Welsh : "ci"},
	{	 url : "images/El pez.jpg"	, Spanish : "El pez"			, French : "le poisson" , German : "fisch" , Welsh : "pysgodyn"},
	{	 url : "images/El pinguino.jpg" , Spanish : "El pinguino"	, French : "le pingouin" , German : "pinguin" , Welsh : "pengwyn"	},
	{	 url : "images/El tigre.jpg" , Spanish : "El tigre" 		, French : "le tigre" , German : "tigre" , Welsh : "teigr"},
	{	 url : "images/La cobaya.jpg" , Spanish : "La cobaya"		, French : "le guinee porc" , German : "meerschweinchen" , Welsh : "mochyn cwta"},
	{	 url : "images/La gallina.jpg" , Spanish : "La gallina"		, French : "la poule" , German : "henne" , Welsh : "iar"},
	{	 url : "images/La jirafa.jpg"	, Spanish : "La jirafa"		, French : "la girafe" , German : "giraffe" , Welsh : "jiraff"},
	{	 url : "images/La oveja.jpg" , Spanish : "La oveja"			, French : "le mouton" , German : "schaf" , Welsh : "dafad"},
	{	 url : "images/La rana.jpg"	, Spanish : "La rana"			, French : "la grenouille" , German : "frosch" , Welsh : "llyffant"},
	{	 url : "images/La serpiente.jpg" , Spanish : "La serpiente" , French : "le serpent" , German : "schlange" , Welsh : "llneidr"},
	{	 url : "images/La tortuga.jpg" , Spanish : "La tortuga"		, French : "la tortue" , German : "schildkröte" , Welsh : "tortois"},
	{	 url : "images/La vaca.jpg" , Spanish : "La vaca"			, French : "la vache" , German : "kuh" , Welsh : "buwch"}
	

	],

	"buildings" : [

	{	Spanish : "El gimnasio" , url : "images/El gimnasio.jpg"		},
	{	Spanish : "El aula" , url : "images/El aula.jpg"		},
	{	Spanish : "El comedor" , url : "images/El comedor.jpg"		},
	{	Spanish : "El despacho de la directora" , url : "images/El despacho de la directora.jpg"		},
	{	Spanish : "El laboratorio" , url : "images/El laboratorio.jpg"		},
	{	Spanish : "El pasillo" , url : "images/El pasillo.jpg"		},
	{	Spanish : "El patio" , url : "images/El patio.jpg"		},
	{	Spanish : "El salon de actos" , url : "images/El salon de actos.jpg"		},
	{	Spanish : "El servicio" , url : "images/El servicio.jpg"		},
	{	Spanish : "La biblioteca" , url : "images/La biblioteca.jpg"		},
	{	Spanish : "La cocina" , url : "images/La cocina.jpg"		},
	{	Spanish : "La enfermeria" , url : "images/La enfermeria.jpg"		},
	{	Spanish : "La piscina" , url : "images/La piscina.jpg"		},
	{	Spanish : "La sala de ordenadores" , url : "images/La sala de ordenadores.jpg"		},
	{	Spanish : "La sala de profesores" , url : "images/La sala de profesores.jpg"		},
	{	Spanish : "Las canchas" , url : "images/Las canchas.jpg"		},
	{	Spanish : "Las oficinas" , url : "images/Las oficinas.jpg"		}
	]

}