// Imports the variables below from initial.js
import { playerDeck, playerPlay, computerDeck, computerPlay } from "./initial.js";

// Lets you take the cards that you and the computer play if you win
function take() {
    // Moves the played cards to the end of the player deck
    for (let i = playerPlay.length; i > 0; i--) {
        playerDeck.push(playerPlay[0]);
        playerPlay.shift(playerPlay[0]);
    }
    for (let i = computerPlay.length; i > 0; i--) {
        playerDeck.push(computerPlay[0]);
        computerPlay.shift(computerPlay[0]);
    }

    // Toggles the Take and Play buttons to set up the next play
    document.getElementById('take').disabled = true;
    document.getElementById('play').disabled = false;

    // Sets the new number of cards in your deck and the computer's deck
    document.getElementById('playerCardCount').innerText = playerDeck.length;
    document.getElementById('computerCardCount').innerText = computerDeck.length;
}

// Exports take() to index.js
export default take;