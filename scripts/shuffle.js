// Imports all variables from base.js
import { fullDeck, playerDeck, computerDeck, playerPlay, computerPlay, suits, values } from "./base.js";

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

    // Shows that cards have been dealt
    document.getElementById('playercards').style.visibility = 'visible';
    document.getElementById('computercards').style.visibility = 'visible';
    
    // Prevents you from shuffling and dealing again
    document.getElementById('shuffle').disabled = true;
    document.getElementById('play').disabled = false;
    
    // Shows the number of cards in your deck and the computer's deck
    document.getElementById('playerCardCount').innerText = playerDeck.length;
    document.getElementById('computerCardCount').innerText = computerDeck.length;
}

// Exports shuffle() to index.js
export default shuffle;