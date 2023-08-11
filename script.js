var wordBlank = document.querySelector(".word-blanks");
var win = document.querySelector(".win");
var lose = document.querySelector(".lose");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var chosenWord = ""
var numBlanks = 0;
var winCounter = 0;
var loseCounter = 0;
var isWin = false;
var timer;
var timerCount;

var lettersInChosenWord = [];
var blankLetters = [];

var words = ["variable","array","modulus", "object","function","string","boolean"]

function init() {
    getWins()
    getlosses();
}

function startGame () {
    isWin = false;
    timerCount- 10;
    startButton.disabled = true;
    renderBlanks()
    startTimer()
}

function winGame() {
    wordBlank.textContent = "YOU WON!"
    winCounter++
    startButton.disalbed = false;
    setWins()
}

function loseGame() {
    wordBlank.textContent = "GAME OVER";
    LOSEcOUNTER++
    startButton.disabled = false;
    setLosses()
}

function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >= 0) {

            if(isWin && timerCount > 0) {

                clearInterval(timer);
                winGame();
            }
        }
    }, 1000);
}

function renderBlanks() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersInChosenWord = chosenWord.split("");
    numBlanks = []

    for (var i = 0; i < numBlanks; i++) {
        blanksLetters.push("");
    }
}

function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount")
}

function setLosses () {
    lose.textContent = loseCounter;
    localStorage.setItem("lostCount", lossCounter);
}
function getWins () {
    var storedWins = localStorage.getItem("winCount");
    if (storedWins === null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }
    win.textContent = winCounter;
}

function getlosses() {
    var storedLosses = localStorage.getItem("loseCount");
    if (storedLosses === null) {
        lostCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = loseCounter;
}

function checkWin () {
    if (chosenWord === blankLetters.join("")) {
        isWin = true;
    }
}