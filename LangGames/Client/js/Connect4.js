var translationArray = [

	{	name : "El caballo" , url : "images/El caballo.jpg"		},
	{	name : "El cerdo" , url : "images/El cerdo.jpg"		},
	{	name : "El cocodrilo" , url : "images/El cocodrilo.jpg"		},
	{	name : "El conejo" , url : "images/El conejo.jpg"		},
	{	name : "El delfin" , url : "images/El delfin.jpg"		},
	{	name : "El elefante" , url : "images/El elefante.jpg"		},
	{	name : "El gato" , url : "images/El gato.jpg"		},
	{	name : "El leon" , url : "images/El leon.jpg"		},
	{	name : "El mono" , url : "images/El mono.jpg"		},
	{	name : "El oso" , url : "images/El oso.jpg"		},
	{	name : "El pajaro" , url : "images/El pajaro.jpg"		},
	{	name : "El pato" , url : "images/El pato.jpg"		},
	{	name : "El perro" , url : "images/El perro.jpg"		},
	{	name : "El pez" , url : "images/El pez.jpg"		},
	{	name : "El pinguino" , url : "images/El pinguino.jpg"		},
	{	name : "El tigre" , url : "images/El tigre.jpg"		},
	{	name : "La cobaya" , url : "images/La cobaya.jpg"		},
	{	name : "La gallina" , url : "images/La gallina.jpg"		},
	{	name : "La jirafa" , url : "images/La jirafa.jpg"		},
	{	name : "La oveja" , url : "images/La oveja.jpg"		},
	{	name : "La rana" , url : "images/La rana.jpg"		},
	{	name : "La serpiente" , url : "images/La serpiente.jpg"		},
	{	name : "La tortuga" , url : "images/La tortuga.jpg"		},
	{	name : "La vaca" , url : "images/La vaca.jpg"		}
	

];

translationArray.index = 0;

//translation array sshould be a class and object on the VM.

translationArray.getNextObject = function()
{
	this.index = (this.index < this.length - 1) ? this.index + 1 : 0;

	return this[this.index];
}

function AppViewModel() {	

	this.choiceImgSrc = ko.observable();
	this.translation = ko.observable();
	this.redTurn = ko.observable(true);
	this.dropColour = ko.observable("white");
	this.showArrows = ko.observable(true);
	this.message = ko.observable("Pick a column");
	

	this.grid = ko.observableArray();
	var dimension = 7;

	for(var i = 0 ; i < dimension; i++)
	{
		this.grid.push(ko.observableArray());

		for(var j = 0; j < dimension; j++)
		{
			var content = "empty";
			this.grid()[i].push(ko.observable(content));
		}

		var newPair = translationArray.getNextObject();

		var pColumn = this.grid()[i]();
		pColumn.number = ko.observable(i + 1);

		pColumn.imgSrc = ko.observable(newPair.url);
		
		pColumn.translation = ko.observable(newPair.name);

		pColumn.imgSelected = ko.observable(false);
		
		pColumn.discType = ko.observable("empty");

	}

	this.addDisc = function( parent )
	{
		var oParent = parent;
		var pColumn = this;

		var previousTranslation = pColumn.translation();
		oParent.translation(previousTranslation);

		var newPair = translationArray.getNextObject();

		pColumn.imgSrc(newPair.url);

		pColumn.translation(newPair.name);

		pColumn.imgSelected(false);
		oParent.showArrows(true);
		oParent.message("Pick a column");
		var bRedTurn = !oParent.redTurn();
		oParent.redTurn(bRedTurn);

		var sPlayer = bRedTurn ? "red" : "blue";

		for( var i = pColumn.length - 1; i >= 0 ; i-- )
		{
			if( pColumn[ i ]() === "empty" )
			{
				pColumn[ i ]( sPlayer );
				return;
			}
		}


	};

	this.selectImage = function( parent )
	{
		var pColumn = this;

		if(!parent.showArrows())
			return;

		pColumn.imgSelected(true);
		
		var oParent = parent;
		oParent.message("");
		
		var nextColour = oParent.redTurn() ? "blue" : "red";

		oParent.dropColour(nextColour);
		var selectedImage = pColumn.imgSrc();
		var selectedNameClue = "";

		for(var i = 0; i < pColumn.translation().length ; i++)
		{
			selectedNameClue += pColumn.translation()[i] == " " ? " " : "_";
		}

		oParent.choiceImgSrc(selectedImage);
		oParent.showArrows(false);
		oParent.translation(selectedNameClue);

	}  


}
 