let randomNum = parseInt(Math.random() * 10 + 1);
console.log(randomNum);

const userInput = document.querySelector("#guessInput");
const btn = document.querySelector("#submitBtn");
const statusDiv = document.querySelector(".status");
const guessSlot = document.querySelector("#previousGuess");
const remaining = document.querySelector("#remainingGuess");
const lowOrHi = document.querySelector(".lowOrHi");

startEnd_Btn = document.createElement("button");

let playGame = true;
let prevGuess = [];
let numGuess = 1;

if (playGame) {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Type a Number");
  } else if (guess < 1) {
    alert("number must be greater than 1");
  } else if (guess >= 11) {
    alert("number must be less than 11");
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      cleanupGuess(guess);
      displayMessage(`Correct answer: ${randomNum} `);
      lowOrHi.style.color = "green";
      endGame();
    } else {
      cleanupGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (randomNum < guess) {
    displayMessage("number is too high");
    lowOrHi.style.color = "red";
  } else if (randomNum > guess) {
    displayMessage("number is too low");
    lowOrHi.style.color = "orange";
  } else {
    displayMessage(`you guessed it right: ${randomNum}`);
    lowOrHi.style.color = "blue";
    endGame();
  }
}
function cleanupGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess} , `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h4>${message}</h4>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  startEnd_Btn.classList.add("button");
  startEnd_Btn.innerHTML = `Start Over`;
  statusDiv.appendChild(startEnd_Btn);
  playGame = false;
  newGame();
}

function newGame() {
  const newGame_btn = document.querySelector(".button");
  newGame_btn.addEventListener("click", function () {
    randomNum = parseInt(Math.random() * 10 + 1);
    console.log(randomNum);
    prevGuess = [];
    numGuess = 1;
    remaining.innerHTML = `${11 - numGuess}`;
    guessSlot.innerHTML = "";
    lowOrHi.innerHTML = "";
    userInput.removeAttribute("disabled");
    statusDiv.removeChild(startEnd_Btn);
    playGame = true;
  });
}

