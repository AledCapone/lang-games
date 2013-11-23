Translations = function(topic)
{
	this.Mappings = this.allTopics[topic];
	this.index = 0;
};

Translations.prototype.getNextObject = function()
{
	this.index = (this.index < this.Mappings.length - 1) ? this.index + 1 : 0;

	return this.Mappings[this.index];
}


Translations.prototype.allTopics = {

	"animals" : [

	{	 url : "images/El caballo.jpg"	, name : "El caballo" 	},
	{	 url : "images/El cerdo.jpg"	, name : "El cerdo"	},
	{	 url : "images/El cocodrilo.jpg" , name : "El cocodrilo"		},
	{	 url : "images/El conejo.jpg" , name : "El conejo" 		},
	{	 url : "images/El delfin.jpg"	, name : "El delfin"	},
	{	 url : "images/El elefante.jpg"	, name : "El elefante"	},
	{	 url : "images/El gato.jpg" , name : "El gato" 		},
	{	 url : "images/El leon.jpg" , name : "El leon" 	},
	{	 url : "images/El mono.jpg" , name : "El mono" 		},
	{	 url : "images/El oso.jpg"	, name : "El oso" 	},
	{	 url : "images/El pajaro.jpg"	, name : "El pajaro"	},
	{    url : "images/El pato.jpg"   , 	name : "El pato" 		},
	{	 url : "images/El perro.jpg"	, name : "El perro"	},
	{	 url : "images/El pez.jpg"	, name : "El pez"	},
	{	 url : "images/El pinguino.jpg" , name : "El pinguino"		},
	{	 url : "images/El tigre.jpg" , name : "El tigre" 		},
	{	 url : "images/La cobaya.jpg" , name : "La cobaya"		},
	{	 url : "images/La gallina.jpg" , name : "La gallina"		},
	{	 url : "images/La jirafa.jpg"	, name : "La jirafa"	},
	{	 url : "images/La oveja.jpg" , name : "La oveja"		},
	{	 url : "images/La rana.jpg"	, name : "La rana"	},
	{	 url : "images/La serpiente.jpg" , name : "La serpiente" 		},
	{	 url : "images/La tortuga.jpg" , name : "La tortuga"		},
	{	 url : "images/La vaca.jpg" , name : "La vaca"		}
	

	]

}




// var translationArray = [

// 	{	name : "El caballo" , url : "images/El caballo.jpg"		},
// 	{	name : "El cerdo" , url : "images/El cerdo.jpg"		},
// 	{	name : "El cocodrilo" , url : "images/El cocodrilo.jpg"		},
// 	{	name : "El conejo" , url : "images/El conejo.jpg"		},
// 	{	name : "El delfin" , url : "images/El delfin.jpg"		},
// 	{	name : "El elefante" , url : "images/El elefante.jpg"		},
// 	{	name : "El gato" , url : "images/El gato.jpg"		},
// 	{	name : "El leon" , url : "images/El leon.jpg"		},
// 	{	name : "El mono" , url : "images/El mono.jpg"		},
// 	{	name : "El oso" , url : "images/El oso.jpg"		},
// 	{	name : "El pajaro" , url : "images/El pajaro.jpg"		},
// 	{	name : "El pato" , url : "images/El pato.jpg"		},
// 	{	name : "El perro" , url : "images/El perro.jpg"		},
// 	{	name : "El pez" , url : "images/El pez.jpg"		},
// 	{	name : "El pinguino" , url : "images/El pinguino.jpg"		},
// 	{	name : "El tigre" , url : "images/El tigre.jpg"		},
// 	{	name : "La cobaya" , url : "images/La cobaya.jpg"		},
// 	{	name : "La gallina" , url : "images/La gallina.jpg"		},
// 	{	name : "La jirafa" , url : "images/La jirafa.jpg"		},
// 	{	name : "La oveja" , url : "images/La oveja.jpg"		},
// 	{	name : "La rana" , url : "images/La rana.jpg"		},
// 	{	name : "La serpiente" , url : "images/La serpiente.jpg"		},
// 	{	name : "La tortuga" , url : "images/La tortuga.jpg"		},
// 	{	name : "La vaca" , url : "images/La vaca.jpg"		}
	

// ];

// translationArray.index = 0;

// //translation array sshould be a class and object on the VM.

// translationArray.getNextObject = function()
// {
// 	this.index = (this.index < this.length - 1) ? this.index + 1 : 0;

// 	return this[this.index];
// }