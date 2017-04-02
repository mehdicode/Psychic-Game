var charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var guessLeft = 9;
var chosenOne ;
var alreadyGuessed = [];




var compChoice = function() {
	chosenOne = charSet[Math.floor(Math.random() * charSet.length)];

};

var upGuessLeft = function() {
	document.querySelector("#gsl").innerHTML = guessLeft;

};

var upAlreadyG = function() {
	document.querySelector("#ygf").innerHTML = alreadyGuessed.join(",");
}

var reset = function() {
	guessLeft = 9;
	alreadyGuessed = [];
	compChoice();
	upGuessLeft();
	upAlreadyG();

}


document.onkeyup = function(event) {

	guessLeft--;
	yourGuess = event.key;
	alreadyGuessed.push(yourGuess);
	upAlreadyG();
	upGuessLeft();

	if (guessLeft > 0) {
		if (yourGuess == chosenOne) {
			win++;
			document.querySelector("#wns").innerHTML = win;
			alert("You are psychic");
			reset();
		}
	}

	if (guessLeft == 0) {
		lose++;
		document.querySelector("#lss").innerHTML = lose;
			alert("NOt A pSyChic");
			reset();

	}
};

