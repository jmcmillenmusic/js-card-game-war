function createCard() {
    const playerCardArea = document.getElementById('playercard');
    const computerCardArea = document.getElementById('computercard');
    console.log(playerPlay.length + computerPlay.length);
    for (var i = 0; i < (playerPlay.length + computerPlay.length); i++) {
        // Creates a container div with the fullcard class under playerCardArea
        const cardContainer = document.createElement('div');
        cardContainer.setAttribute('class', 'fullcard');
        playerCardArea.appendChild(cardContainer);
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
        for (i = 0; i < playerPlay.length; i++) {
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
    }
}

export default createCard;