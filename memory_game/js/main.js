const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);
var cardTwo = cards[2];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

if (cardsInPlay.length === 2) {
	if (cardOne === cardTwo) {
		alert("You found a match!");
	} else {
		alert("Sorry, try again.");
	}
}