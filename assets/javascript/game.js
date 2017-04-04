
// set variables and define english characters
var charSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var lose = 0;
var guessLeft = 9;
var chosenOne ;
var alreadyGuessed = [];



// computer will choose on char from array
var compChoice = function() {
	chosenOne = charSet[Math.floor(Math.random() * charSet.length)];

};
// rewrite how many guess left
var upGuessLeft = function() {
	document.querySelector("#gsl").innerHTML = guessLeft;

};
// display a set of char user pressed on keyboard from alreadyGuessed array
var upAlreadyG = function() {
	document.querySelector("#ygf").innerHTML = alreadyGuessed.join(",");
}
// reset every thing
var reset = function() {
	guessLeft = 9;
	alreadyGuessed = [];
	compChoice();
	upGuessLeft();
	upAlreadyG();

}

// when a key pressed this function starts
document.onkeyup = function(event) {

	guessLeft--;
	yourGuess = event.key;
	alreadyGuessed.push(yourGuess);
	upAlreadyG();
	upGuessLeft();
// this will show how user win and show the alert after that every
// every thing will reset
	if (guessLeft > 0) {
		if (yourGuess == chosenOne) {
			win++;
			document.querySelector("#wns").innerHTML = win;
			alert("You are psychic");
			reset();
		}
	}
// this will show how user lose and show the alert after that every
// every thing will reset
	if (guessLeft == 0) {
		lose++;
		document.querySelector("#lss").innerHTML = lose;
			alert("NOt A pSyChic");
			reset();

	}
};

