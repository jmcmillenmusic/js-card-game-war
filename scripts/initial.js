// Initializes the entire deck, your deck, and the computer's deck as empty arrays
const fullDeck = [];
const playerDeck = [];
const computerDeck = [];

// Initializes empty arrays to store the cards being played
const playerPlay = [];
const computerPlay = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

// Exports variables to all other scripts in scripts folder
export { fullDeck, playerDeck, computerDeck, playerPlay, computerPlay, suits, values };

/* 

File Path:

initial.js => shuffle.js, play.js, take.js, give.js, war.js

ALL SCRIPTS => index.js

*/