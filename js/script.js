// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//Vairables declared globally
var message = '';
var viewedQuote = [];
//variables for the random background with the id="background-color";
var red;
var blue;
var green;
//this is the array of quotes
var quotes = [
	{
		quote: "Success consists of going from failure to failure without loss of enthusiasm.",
		source: "Winston Churchill",
		citation: "",
		year: "1941",
		tags: "Winston Churchill"
	}, 
	{
		quote: "Never, never, never give up.",
		source: "Winston Churchill",
		citation: "",
		year: "1943",
		tags: "Winston Churchill"
	},
	{
		quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
		source: "Winston Churchill",
		citation: "",
		year: "1944",
		tags: "Winston Churchill"
	},
	{
		quote: "I may be drunk, Miss, but in the morning I will be sober and you will still be ugly.",
		source: "Winston Churchill",
		citation: "",
		year: "1946",
		tags: "Winston Churchill"
	},
	{
		quote: "My most brilliant achievement was the ability to persuade my wife to marry me.",
		source: "Winston Churchill",
		citation: "",
		year: "1946",
		tags: "Winston Churchill"
	},
	{
		quote: "Live life to the fullest, and focus on the positive.",
		source: "Matt Cameron",
		citation: "",
		year: "",
		tags: ""
	},
	{
		quote: "Every day brings new choices.",
		source: "Martha Beck",
		citation: "",
		year: "",
		tags: ""
	}

	]; //end quotes array

function print(quote) {
	//print is used to print the items to the div with the id of quote-box
	var output = document.getElementById('quote-box');
	output.innerHTML = quote;
}
function getRandomQuote() {
	//random number generator multiplying the length of the array quotes
	var random = Math.floor(Math.random() * quotes.length);
	//splice is dropping a random quote by deleting 1 starting at position 0 in the array
	var spliced = quotes.splice(random, 1)[0];

	viewedQuote.push(spliced);
	//if quotes.length === 0 then the viewQuote variable will add another quote on
	if (quotes.length === 0) {
		quotes = viewedQuote;
		viewedQuote = [];
	}
	
	return spliced;
}
function randomColorGenerator() {
	var randomColor;
	red = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	randomColor = 'rgb(' + red + ',' + blue + ',' + green + ')';
	return randomColor;
}
function printQuote() {
	//variable quotes is being assigned to the function above that stores the functionality for generating the random quote
	var quotes = getRandomQuote();
	//this info is being stored to the message variable which will be used to print the info to the screen
	message ='<p class="quote">' + quotes.quote + '</p>';
	message += '<p class="source">' + quotes.source;


	//this is the if/else statement that is being used to check for empty fields within quote-box if there is empty
	//spaces it prints an empty message to the screen
	//there always needs to be a quote and an author, the others are optional
	if ( quotes.citation ) {
		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	//year
	if (quotes.year) {
		message += '<span class="year">' + quotes.year + '</span></p>';	
	} else {
		message += '';
	}
	//tags
	if ( quotes.tags ) {
		message += '<h3>' + quotes.tags + '</h3>';
	} else {
		message += '';
}
//displays all the info for the random quotes.
  
	print(message);
	//calls the randomColorGenerator function which is accessable when the button is clicked
	randomColorGenerator();
	//this is targeting the id for the color so it can have access to the html
	document.getElementById('background-color').style.backgroundColor = randomColorGenerator();
}
