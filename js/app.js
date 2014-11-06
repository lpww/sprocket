var quotes = [["It never gets easier, you just go faster","Greg leMond"],["The bicycle is a curious vehicle. Its passenger is its engine","John Howard"],["I thought of that while riding my bicycle","Albert Einstein"]];

var lastQuoteStanding = ["Damn, bicycling is awesome", "Everyone"];
var quotesCopy = quotes.slice();

var quoteGen = function(){
	if(quotesCopy.length == 0){
		quotesCopy = quotes.slice();
		$(".epicQuote").text('"' + lastQuoteStanding[0] + '"');
		$(".epicAuthor").text('-' + lastQuoteStanding[1]);
	} else {
	var result = quotesCopy[Math.floor(Math.random()*quotesCopy.length)];
	var removeQuote = quotesCopy.splice(result, 1);
	$(".epicQuote").text('"' + result[0] + '"');
	$(".epicAuthor").text('-' + result[1]);
	}
}

$(document).ready(function(){quoteGen()})