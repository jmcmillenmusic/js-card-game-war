// Import createCard() from createCard.js
import createCard from './createCard.js';

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
    document.getElementById('playercards').style.visibility = 'visible';
    document.getElementById('computercards').style.visibility = 'visible';
    document.getElementById('fulldeck').style.visibility = 'hidden';
    // Prevents you from shuffling and dealing again
    document.getElementById('shuffle').disabled = true;
    document.getElementById('playButton').disabled = false;
    // Shows the number of cards in your deck and the computer's deck
    document.getElementById('playerCardCount').innerText = playerDeck.length;
    document.getElementById('computerCardCount').innerText = computerDeck.length;
}

// Adds event listeners to the Shuffle button instead of onclick() functions in index.html
const shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener("click", shuffle);

function play() {
    // Plays your first card and the computer's first card
    if (playerDeck.length > 0 && computerDeck.length > 0) {
        playerPlay.push(playerDeck[0]);
        playerDeck.shift(playerDeck[0]);
        computerPlay.push(computerDeck[0]);
        computerDeck.shift(computerDeck[0]);
    }
    console.log(playerPlay);
    console.log(computerPlay);
    console.log(playerDeck.length, computerDeck.length);
    // Prevents you from clicking the Play button before the play is resolved
    document.getElementById('playButton').disabled = true;
    createCard();
    // // Creates a container div with the fullcard class under playerCardArea
    // const playerCardArea = document.getElementById('playercard');
    // const cardContainer = document.createElement('div');
    // cardContainer.setAttribute('class', 'fullcard');
    // playerCardArea.appendChild(cardContainer);
    // // Creates the card image with the cardImg class under cardContainer
    // var cardImg = document.createElement('img');
    // cardImg.setAttribute('class', 'cardImg');
    // cardImg.src = 'images/blank_card.png';
    // cardContainer.appendChild(cardImg);
    // // Creates the card text with the cardText class under cardContainer
    // var cardText = document.createElement('h3');
    // cardText.setAttribute("class", "cardText");
    // cardContainer.appendChild(cardText);
    // // Sets the card value, suit, and text color
    // for (i = 0; i < playerPlay.length; i++) {
    //     var card = playerPlay[i];
    //     cardContainer.id = `${card.Value} of ${card.Suit}`;
    //     switch (true) {
    //         case (card.Suit === "clubs"):
    //             cardText.textContent = `${card.Value}\u2663`;
    //             cardText.style.color = "black";
    //             break;
    //         case (card.Suit === "diamonds"):
    //             cardText.textContent = `${card.Value}\u2666`;
    //             cardText.style.color = "red";
    //             break;
    //         case (card.Suit === "hearts"):
    //             cardText.textContent = `${card.Value}\u2665`;
    //             cardText.style.color = "red";
    //             break;
    //         case (card.Suit === "spades"):
    //             cardText.textContent = `${card.Value}\u2660`;
    //             cardText.style.color = "black";
    //             break;
    //     }
    // }
}

// Adds event listeners to the Play button instead of onclick() functions in index.html
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);