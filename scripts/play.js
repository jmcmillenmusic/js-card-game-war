// Imports the variables below from initial.js
import { playerDeck, computerDeck, playerPlay, computerPlay } from "./initial.js";

// Plays the first card from your deck and the computer's deck
function play() {
    if (playerDeck.length > 0 && computerDeck.length > 0) {
        playerPlay.push(playerDeck[0]);
        playerDeck.shift(playerDeck[0]);
        computerPlay.push(computerDeck[0]);
        computerDeck.shift(computerDeck[0]);
    }

    // Prevents you from clicking the Play button before the play is resolved
    document.getElementById('play').disabled = true;
}

// Creates card images based on the last card you and the computer played
function createCards() {
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
        switch (card.Suit) {
            case ("clubs"):
                cardText.textContent = `${card.Value}\u2663`;
                cardText.style.color = "black";
                break;
            case ("diamonds"):
                cardText.textContent = `${card.Value}\u2666`;
                cardText.style.color = "red";
                break;
            case ("hearts"):
                cardText.textContent = `${card.Value}\u2665`;
                cardText.style.color = "red";
                break;
            case ("spades"):
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
    switch (playerCardValue) {
        case ('J'):
            playerCardValue = 11;
            break;
        case ('Q'):
            playerCardValue = 12;
            break;
        case ('K'):
            playerCardValue = 13;
            break;
        case ('A'):
            playerCardValue = 14;
            break;
        default:
            playerCardValue = Number(playerCardValue);
            break;
    }
    switch (computerCardValue) {
        case ('J'):
            computerCardValue = 11;
            break;
        case ('Q'):
            computerCardValue = 12;
            break;
        case ('K'):
            computerCardValue = 13;
            break;
        case ('A'):
            computerCardValue = 14;
            break;
        default:
            computerCardValue = Number(computerCardValue);
            break;
    }

    // Enables buttons allowing the player to resolve each play by either taking cards, giving up cards, or going to war
    if (playerCardValue > computerCardValue) {
        document.getElementById('take').disabled = false;
    } else if (playerCardValue < computerCardValue) {
        document.getElementById('give').disabled = false;
    } else {
        document.getElementById('war').disabled = false;
    }
}

// Exports play(), createCards(), and compare() to index.js
export { play, createCards, compare };