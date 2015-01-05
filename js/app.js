//Array contains quotes and authors
var quotes = [
  ["Life is like riding a bicycle: you don't fall off unless you stop pedaling", "Claude Pepper"],
  ["Life is like riding a bicycle. To keep your balance you must keep moving.", "Albert Einstein"],
  ["I thought of that while riding my bicycle.", "Albert Einstein"],
  ["If I can bicycle, I bicycle.", "David Attenborough"],
  ["I find buying a bicycle is a great way to stay in touch with people.", "Jan Chipchase"],
  ["A bicycle has transformed my experience of London.", "Iain Glen"],
  ["The bicycle is a curious vehicle. Its passenger is its engine", "John Howard"],
  ["Bicycles are almost as good as guitars for meeting girls.", "Bob Weir"],
  ["When man invented the bicycle he reached the peak of his attainments.", "Elizabeth West"],
  ["Ever bike? Now that's something that makes life worth living!", "Jack London"],
  ["Get a bicycle. You will certainly not regret it, if you live.", "Mark Twain"],
  ["Cycle tracks will abound in Utopia.", "H.G. Wells"],
  ["It never gets easier, you just go faster", "Greg leMond"],
  ["When my legs hurt, I say: 'Shut up legs! Do what I tell you to do!'", "Jens Voigt"],
  ["If it hurts me, it must hurt the other ones twice as much.", "Jens Voigt"],
  ["Crashing is part of cycling as crying is part of love.", "Johan Museeuw"],
  ["Melancholy is incompatible with bicycling.", "James E. Starrs"],
  ["Nothing compares to the simple pleasure of riding a bike.", "John F. Kennedy"],
  ["Think of bicycles as rideable art that can just about save the world.", "Grant Petersen"],
  ["It is the unknown around the corner that turns my wheels.", "Heinz Stucke"],
  ["The bicycle is the noblest invention of mankind.", "William Saroyan"],
  ["Bicycles are the indicator species of a community, like shellfish in a bay.", "P. Martin Scott"],
  ["Whoever invented the bicycle deserves the thanks of humanity.", "Lord Charles Beresford"],
  ["For every uphill, there's a downhill.", "Mike Hodges"],
  ["Biking is good for the brain, and not bad for the ass either.", "Citizen Chain Cyclery"],
  ["Set your cycling goals high and dont stop until you get there.", "Felicity Luckey"],
  ["Its not the mountain we conquer but ourselves.", "Sir Edmund Hillary"],
  ["To bike, or not to bike: That is not a question!", "Unknown"],
  ["Our chains set us free.", "Unknown"],
  ["Feet in the pedals, Head in the clouds.", "Cycology"],
  ["The more you dream, the farther you get.", "Michael Phelps"],
  ["Bicycling is the nearest approximation I know to the flight of birds.", "Louis J. Helle, Jr."],
  ["Cycling in the city, and particularly in midtown, is anarchy without malice.", "Unknown"],
  ["With highwheelers a flesh and blood man can hitch wings to his feet.", "Karl Kron"],
  ["Bicycles may change, but cycling is timeless.", "Zapata Espinoza"],
  ["Bicycles have no walls.", "Paul Cornish"],
  ["The bicycle is the noblest invention of mankind.", "William Saroyan"],
  ["A bicycle ride around the world begins with a single pedal stroke.", "Scott Stoll"],
  ["Work to eat. Eat to live. Live to bike. Bike to work.", "Unknown"],
  ["A raggedy ride beats a dressed up walk.", "Simon Peat"],
  ["Ride as much or as little, or as long or as short as you feel. But ride.", "Eddy Merckx"],
  ["A mountain bike is like your buddy. A road bike is your lover.", "Sean Coffey"],
  ["Life may not be about your bike, but it sure can help you get through it.", "Hallman"],
  ["I ride my bicycle to ride my bicycle", "Unknown"]
];

//Use this quote last
var lastQuoteStanding = ["Damn, bicycling is awesome.", "Everyone"];

//Create copy of quotes array
var quotesCopy = quotes.slice();

//Function to generate the next quote
var quoteGen = function(){
  //Reload array once all quotes have been used
	if(quotesCopy.length == 0){
		quotesCopy = quotes.slice();

    //Update page ith new quote and author
		$(".epicQuote").text('"' + lastQuoteStanding[0] + '"');
		$(".epicAuthor").text('- ' + lastQuoteStanding[1]);
	} else {
    //Use random quote, then delete it from the copied array to prevent repeats
	  var result = quotesCopy[Math.floor(Math.random()*quotesCopy.length)];
	  var removeQuote = quotesCopy.splice(result, 1);

    //Update page with new quote and author
	  $(".epicQuote").text('"' + result[0] + '"');
	  $(".epicAuthor").text('- ' + result[1]);
	}
}

//Run quote generator function on page load
$(document).ready(function(){quoteGen()})