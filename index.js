// Imports functions from scripts in the scripts folder
import shuffle from "./scripts/shuffle.js";
import { play, createCards, compare } from "./scripts/play.js";

// Adds event listeners to the Shuffle button instead of onclick() functions in index.html
const shuffleButton = document.getElementById('shuffle');
shuffleButton.addEventListener("click", shuffle);

// Adds event listeners to the Play button instead of onclick() functions in index.html
const playButton = document.getElementById('play');
playButton.addEventListener('click', play);
playButton.addEventListener('click', createCards);
playButton.addEventListener('click', compare);