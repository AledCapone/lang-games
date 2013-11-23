function AppViewModel() {	

	this.choiceImgSrc = ko.observable();
	this.translation = ko.observable();
	this.redTurn = ko.observable(true);
	this.dropColour = ko.observable("white");
	this.showArrows = ko.observable(true);
	this.message = ko.observable("Pick a column");

	this.topic = "animals";
	this.language = "spanish";

	this.translationArray = new Translations(this.topic, this.language);

	this.pLeftSideChoices = ko.observableArray(this.translationArray.leftChoices);
	this.pRightSideChoices = ko.observableArray(this.translationArray.rightChoices);


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

		var newPair = this.translationArray.getNextObject();

		var pColumn = this.grid()[i]();
		pColumn.number = ko.observable(i + 1);

		pColumn.imgSrc = ko.observable(newPair.url);
		
		pColumn.translation = ko.observable(newPair[this.language]);

		pColumn.imgSelected = ko.observable(false);
		
		pColumn.discType = ko.observable("empty");

	}

	this.addDisc = function( parent )
	{
		var oParent = parent;
		var pColumn = this;

		var previousTranslation = pColumn.translation();
		oParent.translation(previousTranslation);

		var newPair = oParent.translationArray.getNextObject();

		pColumn.imgSrc(newPair.url);

		pColumn.translation(newPair[oParent.language]);

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
		var selectedNameClue = " ";

		for(var i = 0; i < pColumn.translation().length ; i++)
		{
			selectedNameClue += pColumn.translation()[i] == " " ? " " : "_";
		}

		oParent.choiceImgSrc(selectedImage);
		oParent.showArrows(false);
		oParent.translation(selectedNameClue);

	}  

	this.registerGuess = function(data)
	{
		alert(data);
	}


}
 