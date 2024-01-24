// Initializes the entire deck, your deck, and the computer's deck as empty arrays
const fullDeck = [];
const playerDeck = [];
const computerDeck = [];

// Establishes suits and values of cards in a standard 52-card deck
const suits = ["clubs", "diamonds", "hearts", "spades"];
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

// Creates and shuffles the deck using the Fisher-Yates Algorithm
function shuffle() {
    // Deck creation
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};
            fullDeck.push(card);
        }
    }
    // Deck shuffling
    for (let i = fullDeck.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [fullDeck[i], fullDeck[j]] = [fullDeck[j], fullDeck[i]];
    }
    // Deal out all cards to you and the computer
    for (let i = fullDeck.length; i > 0; i--) {
        if (playerDeck.length === computerDeck.length) {
            playerDeck.push(fullDeck[0]);
            fullDeck.shift(fullDeck[0]);
        } else {
            computerDeck.push(fullDeck[0]);
            fullDeck.shift(fullDeck[0]);
        }
    }
    console.log(playerDeck);
    console.log(computerDeck);
    // Shows that cards have been dealt
    document.getElementById("playercards").style.visibility = "visible";
    document.getElementById("computercards").style.visibility = "visible";
    document.getElementById("fulldeck").style.visibility = "hidden";
    // Prevents you from shuffling and dealing again
    document.getElementById("shuffle").disabled = "true";
    // Shows the number of cards in your deck and the computer's deck
    document.getElementById("playerCardCount").innerText = playerDeck.length;
    document.getElementById("computerCardCount").innerText = computerDeck.length;
}