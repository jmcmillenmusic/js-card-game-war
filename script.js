// Import createCard() from createCard.js
// import createCard from './createCard.js';

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
    document.getElementById('play').disabled = false;
    
    // Shows the number of cards in your deck and the computer's deck
    document.getElementById('playerCardCount').innerText = playerDeck.length;
    document.getElementById('computerCardCount').innerText = computerDeck.length;
}

// Adds event listeners to the Shuffle button instead of onclick() functions in index.html
const shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener("click", shuffle);

// Plays the first card from your deck and the computer's deck
function play() {
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
    document.getElementById('play').disabled = true;
    // createCard();

    // TODO: Make these 2 for loops into a singular for loop if possible
    for (let i = 0; i < playerPlay.length; i++) {
        const playerCardArea = document.getElementById('playercard');

        // Creates a container div with the fullcard class under playerCardArea
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'fullcard');
        playerCardArea.appendChild(cardContainer);

        // Creates the card image with the cardImg class under cardContainer
        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'cardImg');
        cardImg.src = 'images/blank_card.png';
        cardContainer.appendChild(cardImg);

        // Creates the card text with the cardText class under cardContainer
        const cardText = document.createElement('h3');
        cardText.setAttribute("class", "cardText");
        cardContainer.appendChild(cardText);

        // Sets the card value, suit, and text color
        const card = playerPlay[i];
        cardContainer.id = `${card.Value} of ${card.Suit}`;
        switch (true) {
            case (card.Suit === "clubs"):
                cardText.textContent = `${card.Value}\u2663`;
                cardText.style.color = "black";
                break;
            case (card.Suit === "diamonds"):
                cardText.textContent = `${card.Value}\u2666`;
                cardText.style.color = "red";
                break;
            case (card.Suit === "hearts"):
                cardText.textContent = `${card.Value}\u2665`;
                cardText.style.color = "red";
                break;
            case (card.Suit === "spades"):
                cardText.textContent = `${card.Value}\u2660`;
                cardText.style.color = "black";
                break;
        }
    }

    for (let i = 0; i < computerPlay.length; i++) {
        const computerCardArea = document.getElementById('computercard');

        // Creates a container div with the fullcard class under computerCardArea
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'fullcard');
        computerCardArea.appendChild(cardContainer);

        // Creates the card image with the cardImg class under cardContainer
        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'cardImg');
        cardImg.src = 'images/blank_card.png';
        cardContainer.appendChild(cardImg);

        // Creates the card text with the cardText class under cardContainer
        const cardText = document.createElement('h3');
        cardText.setAttribute("class", "cardText");
        cardContainer.appendChild(cardText);

        // Sets the card value, suit, and text color
        const card = computerPlay[i];
        cardContainer.id = `${card.Value} of ${card.Suit}`;
        switch (true) {
            case (card.Suit === "clubs"):
                cardText.textContent = `${card.Value}\u2663`;
                cardText.style.color = "black";
                break;
            case (card.Suit === "diamonds"):
                cardText.textContent = `${card.Value}\u2666`;
                cardText.style.color = "red";
                break;
            case (card.Suit === "hearts"):
                cardText.textContent = `${card.Value}\u2665`;
                cardText.style.color = "red";
                break;
            case (card.Suit === "spades"):
                cardText.textContent = `${card.Value}\u2660`;
                cardText.style.color = "black";
                break;
        }
    }
}

// Compares your card and the computer's card to see which card has a higher value
function compare() {
    let playerCardValue = playerPlay[playerPlay.length - 1].Value;
    let computerCardValue = computerPlay[computerPlay.length - 1].Value;
    
    // Sets the player's card value and/or computer card's value to a number for comparing face cards (J, Q, K) and aces; otherwise, converts the cards' value from a string to a number
    switch (true) {
        case (playerCardValue === 'J'):
            playerCardValue = 11;
            break;
        case (playerCardValue === 'Q'):
            playerCardValue = 12;
            break;
        case (playerCardValue === 'K'):
            playerCardValue = 13;
            break;
        case (playerCardValue === 'A'):
            playerCardValue = 14;
            break;
        default:
            playerCardValue = Number(playerCardValue);
            break;
    }
    switch (true) {
        case (computerCardValue === 'J'):
            computerCardValue = 11;
            break;
        case (computerCardValue === 'Q'):
            computerCardValue = 12;
            break;
        case (computerCardValue === 'K'):
            computerCardValue = 13;
            break;
        case (computerCardValue === 'A'):
            computerCardValue = 14;
            break;
        default:
            computerCardValue = Number(computerCardValue);
            break;
    }
    console.log(playerCardValue);
    console.log(computerCardValue);

    // Enables buttons allowing the player to resolve each play by either taking cards, giving up cards, or going to war
    if (playerCardValue > computerCardValue) {
        document.getElementById('take').disabled = false;
    } else if (playerCardValue < computerCardValue) {
        document.getElementById('give').disabled = false;
    } else {
        document.getElementById('war').disabled = false;
    }
}

// Adds event listeners to the Play button instead of onclick() functions in index.html
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);
playButton.addEventListener('click', compare);

function take() {
    var playerCardArea = document.getElementById('playercard');
    var computerCardArea = document.getElementById('computercard');
    var playerCardIds = [...document.querySelectorAll('.playercard .fullcard')].map(({ id }) => id);
    var computerCardIds = [...document.querySelectorAll('.computercard .fullcard')].map(({ id }) => id);
    var playerCards = document.querySelectorAll('.playercard .fullcard');
    var computerCards = document.querySelectorAll('.computercard .fullcard');
    console.log(playerCardIds);
    console.log(computerCardIds);

    for (let i = 0; i < playerCardIds.length; i++) {
        playerCardArea.removeChild(playerCards[i]);
    }
    for (let i = 0; i < computerCardIds.length; i++) {
        computerCardArea.removeChild(computerCards[i]);
    }
    
    for (let i = playerPlay.length; i > 0; i--) {
        playerDeck.push(playerPlay[0]);
        playerPlay.shift(playerPlay[0]);
    }
    for (let i = computerPlay.length; i > 0; i--) {
        playerDeck.push(computerPlay[0]);
        computerPlay.shift(computerPlay[0]);
    }
    console.log(playerDeck.length, computerDeck.length);

    // Toggles the Take and Play buttons to set up the next play
    document.getElementById('take').disabled = true;
    document.getElementById('play').disabled = false;

    // Sets the new number of cards in your deck and the computer's deck
    document.getElementById('playerCardCount').innerText = playerDeck.length;
    document.getElementById('computerCardCount').innerText = computerDeck.length;
}

// Adds an event listener to the Take button instead of onclick() functions in index.html
const takeButton = document.getElementById('take');
takeButton.addEventListener('click', take);

// export default {playerPlay, computerPlay};