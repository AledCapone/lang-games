AppViewModel = function() 
{	

	this.choiceImgSrc = ko.observable();
	this.translation = ko.observable();
	this.redTurn = ko.observable(true);
	this.dropColour = ko.observable("white");
	this.showArrows = ko.observable(true);
	this.message = ko.observable("Pick a column");

	//temp
	this.flagBackground = "url('images/SpainFlag.png')";

	this.topic = "animals"; //HARDCODED
	this.language = "Spanish"; //HARDCODED

	this.translationArray = new Translations(this.topic, this.language);

	this.languageButtons = ko.observableArray(this.translationArray.languageOptions);
	this.categoryButtons = ko.observableArray(this.translationArray.categoryOptions);

	this.languageOptions = ko.observableArray(this.translationArray.getLanguageOptionsFor(this.topic));

	this.pLeftSideChoices = ko.observableArray(this.translationArray.leftChoices);
	this.pRightSideChoices = ko.observableArray(this.translationArray.rightChoices);

	this.grid = ko.observableArray();

	this._constructBlankGrid();
	

}

AppViewModel.prototype._constructBlankGrid = function()
{
	this.grid([]);
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



}



AppViewModel.prototype.dropDisc = function( parent, column )
{
		var oParent = parent;
		var pColumn = column;

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

}

AppViewModel.prototype.skipTurn = function( parent , column)
{
		var oParent = parent;
		var oColumn = column;
		oParent.dropColour("white");

		var bRedTurn = !oParent.redTurn();
		oParent.redTurn(bRedTurn);

		oParent.showArrows(true);
		oParent.message("Pick a column");

		oColumn.imgSelected(false);

		oParent.translation("INCORRECT");



}


AppViewModel.prototype.selectImage = function( parent )
{
		var pColumn = this;

		if(!parent.showArrows())
			return;

		pColumn.imgSelected(true);
		
		var oParent = parent;

		oParent.selectedColumnIndex = pColumn.number() - 1;
		oParent.selectedTranslation =  pColumn.translation();
		oParent.message("Choose your answer");
		
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

AppViewModel.prototype.registerGuess = function(parent,  data)
{
		var oParent = parent;

		if(oParent.showArrows())
		{
			return;
		}

		var i = oParent.selectedColumnIndex;
		var oColumn = oParent.grid()[i]();

		var userGuess = data;
		var correctTranslation = oParent.selectedTranslation;

		if(userGuess == correctTranslation)
		{
			
			oParent.dropDisc(oParent, oColumn);      
		}
		else
		{
			oParent.skipTurn(oParent , oColumn);
		}

}

AppViewModel.prototype.changeLanguage = function(parent, oLanguage)
{
	var newLanguage = oLanguage.language;
	var oParent = parent;

	oParent.language = newLanguage;

	oParent.translationArray.getChoices(newLanguage);

	oParent.pLeftSideChoices(oParent.translationArray.leftChoices);
	oParent.pRightSideChoices(oParent.translationArray.rightChoices);

	oParent._constructBlankGrid();

	debugger;



}



 