// Imports functions from scripts in the scripts folder
import shuffle from "./scripts/shuffle.js";
import { play, createCards, compare } from "./scripts/play.js";
import removeCards from "./scripts/removeCards.js";
import take from "./scripts/take.js";
import give from "./scripts/give.js";
import { war, stackCards } from "./scripts/war.js";

// Adds event listeners to the Shuffle button instead of onclick() functions in index.html
const shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener("click", shuffle);

// Adds event listeners to the Play button instead of onclick() functions in index.html
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);
playButton.addEventListener('click', createCards);
playButton.addEventListener('click', compare);

// Adds an event listener to the Take button instead of onclick() functions in index.html
const takeButton = document.getElementById('take');
takeButton.addEventListener('click', removeCards);
takeButton.addEventListener('click', take);

// Adds an event listener to the Give button instead of onclick() functions in index.html
const giveButton = document.getElementById('give');
giveButton.addEventListener('click', removeCards);
giveButton.addEventListener('click', give);

// Adds an event listener to the War button instead of onclick() functions in index.html
const warButton = document.getElementById('war');
warButton.addEventListener('click', removeCards)
warButton.addEventListener('click', war);
warButton.addEventListener('click', createCards);
warButton.addEventListener('click', stackCards);
warButton.addEventListener('click', compare);