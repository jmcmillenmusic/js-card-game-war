// Imports the variables below from initial.js and removeCards from removeCards.js
import { playerDeck, playerPlay, computerDeck, computerPlay } from "./initial.js";

function war() {
    // Plays the next 4 cards from both decks if they both have enough cards
    if (playerDeck.length >= 4 && computerDeck.length >= 4) {
        for (let i = 0; i < 4; i++) {
            playerPlay.push(playerDeck[0]);
            playerDeck.shift(playerDeck[0]);
            computerPlay.push(computerDeck[0]);
            computerDeck.shift(computerDeck[0]);
        }
    } else if (playerDeck.length < 4) {
        // Plays all of your cards if you have fewer than 4 cards
        for (let i = 0; i < playerDeck.length; i++) {
            playerPlay.push(playerDeck[0]);
            playerDeck.shift(playerDeck[0]);
        }
    } else if (computerDeck.length < 4) {
        // Plays all of the computer's cards if it has fewer than 4 cards
        for (let i = 0; i < computerDeck.length; i++) {
            computerPlay.push(computerDeck[0]);
            computerDeck.shift(computerDeck[0]);
        }
    }
    document.getElementById('war').disabled = true;
}

// Removes the images of all played cards except for the last one for War purposes
function stackCards() {
    var playerCardArea = document.getElementById('playercard');
    var computerCardArea = document.getElementById('computercard');
    var playerCards = document.querySelectorAll('.playercard .fullcard');
    var computerCards = document.querySelectorAll('.computercard .fullcard');
    var playerCardIds = [...document.querySelectorAll('.playercard .fullcard')].map(({ id }) => id);
    var computerCardIds = [...document.querySelectorAll('.computercard .fullcard')].map(({ id }) => id);
    
    for (let i = 0; i < playerCardIds.length - 1; i++) {
        playerCardArea.removeChild(playerCards[i]);
    }
    for (let i = 0; i < computerCardIds.length - 1; i++) {
        computerCardArea.removeChild(computerCards[i]);
    }
}

// Exports war() and stackCards() to index.js
export { war, stackCards };