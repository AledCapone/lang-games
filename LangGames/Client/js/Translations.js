Translations = function(topic, language)
{
	this.Mappings = this.allTopics[topic];
	this.language = language;
	this.index = 0;
	var SortedTranslationsArray = this._getSortedArray();
	var halfWay = Math.round(SortedTranslationsArray.length / 2);
	this.leftChoices = SortedTranslationsArray.splice(0,halfWay);
	this.rightChoices = SortedTranslationsArray;
};

Translations.prototype.getNextObject = function()
{
	this.index = (this.index < this.Mappings.length - 1) ? this.index + 1 : 0;

	return this.Mappings[this.index];
};

Translations.prototype._getSortedArray = function()
{
	var unsortedArray = [];


	for(var i = 0; i < this.Mappings.length ; i++)
	{

	unsortedArray.push(this.Mappings[i][this.language]);
	
	}
	return unsortedArray.sort();

}




Translations.prototype.allTopics = {

	"animals" : [

	{	 url : "images/El caballo.jpg"	, spanish : "El caballo" 	},
	{	 url : "images/El cerdo.jpg"	, spanish : "El cerdo"	},
	{	 url : "images/El cocodrilo.jpg" , spanish : "El cocodrilo"		},
	{	 url : "images/El conejo.jpg" , spanish : "El conejo" 		},
	{	 url : "images/El delfin.jpg"	, spanish : "El delfin"	},
	{	 url : "images/El elefante.jpg"	, spanish : "El elefante"	},
	{	 url : "images/El gato.jpg" , spanish : "El gato" 		},
	{	 url : "images/El leon.jpg" , spanish : "El leon" 	},
	{	 url : "images/El mono.jpg" , spanish : "El mono" 		},
	{	 url : "images/El oso.jpg"	, spanish : "El oso" 	},
	{	 url : "images/El pajaro.jpg"	, spanish : "El pajaro"	},
	{    url : "images/El pato.jpg"   , 	spanish : "El pato" 		},
	{	 url : "images/El perro.jpg"	, spanish : "El perro"	},
	{	 url : "images/El pez.jpg"	, spanish : "El pez"	},
	{	 url : "images/El pinguino.jpg" , spanish : "El pinguino"		},
	{	 url : "images/El tigre.jpg" , spanish : "El tigre" 		},
	{	 url : "images/La cobaya.jpg" , spanish : "La cobaya"		},
	{	 url : "images/La gallina.jpg" , spanish : "La gallina"		},
	{	 url : "images/La jirafa.jpg"	, spanish : "La jirafa"	},
	{	 url : "images/La oveja.jpg" , spanish : "La oveja"		},
	{	 url : "images/La rana.jpg"	, spanish : "La rana"	},
	{	 url : "images/La serpiente.jpg" , spanish : "La serpiente" 		},
	{	 url : "images/La tortuga.jpg" , spanish : "La tortuga"		},
	{	 url : "images/La vaca.jpg" , spanish : "La vaca"		}
	

	]

}




// var translationArray = [

// 	{	spanish : "El caballo" , url : "images/El caballo.jpg"		},
// 	{	spanish : "El cerdo" , url : "images/El cerdo.jpg"		},
// 	{	spanish : "El cocodrilo" , url : "images/El cocodrilo.jpg"		},
// 	{	spanish : "El conejo" , url : "images/El conejo.jpg"		},
// 	{	spanish : "El delfin" , url : "images/El delfin.jpg"		},
// 	{	spanish : "El elefante" , url : "images/El elefante.jpg"		},
// 	{	spanish : "El gato" , url : "images/El gato.jpg"		},
// 	{	spanish : "El leon" , url : "images/El leon.jpg"		},
// 	{	spanish : "El mono" , url : "images/El mono.jpg"		},
// 	{	spanish : "El oso" , url : "images/El oso.jpg"		},
// 	{	spanish : "El pajaro" , url : "images/El pajaro.jpg"		},
// 	{	spanish : "El pato" , url : "images/El pato.jpg"		},
// 	{	spanish : "El perro" , url : "images/El perro.jpg"		},
// 	{	spanish : "El pez" , url : "images/El pez.jpg"		},
// 	{	spanish : "El pinguino" , url : "images/El pinguino.jpg"		},
// 	{	spanish : "El tigre" , url : "images/El tigre.jpg"		},
// 	{	spanish : "La cobaya" , url : "images/La cobaya.jpg"		},
// 	{	spanish : "La gallina" , url : "images/La gallina.jpg"		},
// 	{	spanish : "La jirafa" , url : "images/La jirafa.jpg"		},
// 	{	spanish : "La oveja" , url : "images/La oveja.jpg"		},
// 	{	spanish : "La rana" , url : "images/La rana.jpg"		},
// 	{	spanish : "La serpiente" , url : "images/La serpiente.jpg"		},
// 	{	spanish : "La tortuga" , url : "images/La tortuga.jpg"		},
// 	{	spanish : "La vaca" , url : "images/La vaca.jpg"		}
	

// ];

// translationArray.index = 0;

// //translation array sshould be a class and object on the VM.

// translationArray.getNextObject = function()
// {
// 	this.index = (this.index < this.length - 1) ? this.index + 1 : 0;

// 	return this[this.index];
// }