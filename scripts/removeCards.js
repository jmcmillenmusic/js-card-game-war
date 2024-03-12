// Removes the images of all played cards
function removeCards() {
    var playerCardArea = document.getElementById('playercard');
    var computerCardArea = document.getElementById('computercard');
    var playerCards = document.querySelectorAll('.playercard .fullcard');
    var computerCards = document.querySelectorAll('.computercard .fullcard');
    var playerCardIds = [...document.querySelectorAll('.playercard .fullcard')].map(({ id }) => id);
    var computerCardIds = [...document.querySelectorAll('.computercard .fullcard')].map(({ id }) => id);
    
    for (let i = 0; i < playerCardIds.length; i++) {
        playerCardArea.removeChild(playerCards[i]);
    }
    for (let i = 0; i < computerCardIds.length; i++) {
        computerCardArea.removeChild(computerCards[i]);
    }
}

export default removeCards;