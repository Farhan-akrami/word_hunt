var words = [];
function handleEasy() {
  words = ["html", "css", "c", "java", "python", "php"];
  reset();
  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("buttons").classList.remove("d-flex");
  document.getElementById("hangman").classList.remove("d-none");
  // document.getElementById('container').style.background = "#d9d2d2";
  document.body.style.background = "#fff";
  guessedWord();
}
function handleMedium() {
  words = [
    "linux",
    "javascript",
    "json",
    "sql",
    "ruby",
    "swift",
    "principial",
    "principium",
    "principle",
    "principled",
    "principles",
    "principling",
    "princock",
    "princocks",
    "princox",
    "princoxes",
    "prink",
    "prinked",
    "prinker",
    "prinkers",
    "prinking",
    "prinks",
    "print",
    "printabilities",
    "printability",
    "printable",
    "printableness",
    "printablenesses",
    "printed",
    "printer",
    "printeries",
    "printers",
    "printery",
    "printhead",
    "printheads",
    "printing",
    "printings",
    "printless",
    "printmaker",
    "printmakers",
    "printmaking",
    "printmakings",
  ];
  reset();

  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("buttons").classList.remove("d-flex");
  document.getElementById("hangman").classList.remove("d-none");
  guessedWord();
}
function handleHard() {
  words = [
    "csharp",
    "golang",
    "kotlin",
    "laravel",
    "perl",
    "rust",
    "dart",
    "scala",
    "express",
    "mongodb",
  ];
  reset();

  document.getElementById("buttons").classList.add("d-none");
  document.getElementById("buttons").classList.remove("d-flex");
  document.getElementById("hangman").classList.remove("d-none");

  guessedWord();
}

let answer = "";
let maxWrong = 6;
let mistakes = 0;
let guessed = [];
let wordStatus = null;

function randomWord() {
  answer = words[Math.floor(Math.random() * words.length)];
}

function generateButtons() {
  let buttonsHTML = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .map(
      (letter) =>
        `
      <button
        class="btn btn-lg btn-primary m-2"
        id='` +
        letter +
        `'
        onClick="handleGuess('` +
        letter +
        `')"
      >
        ` +
        letter +
        `
      </button>
    `
    )
    .join("");

  document.getElementById("keyboard").innerHTML = buttonsHTML;
}

function handleGuess(chosenLetter) {
  guessed.indexOf(chosenLetter) === -1 ? guessed.push(chosenLetter) : null;
  document.getElementById(chosenLetter).setAttribute("disabled", true);

  if (answer.indexOf(chosenLetter) >= 0) {
    guessedWord();
    checkIfGameWon();
  } else if (answer.indexOf(chosenLetter) === -1) {
    mistakes++;
    updateMistakes();
    checkIfGameLost();
    updateHangmanPicture();
  }
}

function updateHangmanPicture() {
  document.getElementById("hangmanPic").src = "./images/" + mistakes + ".jpg";
}

function checkIfGameWon() {
  if (wordStatus === answer) {
    document.getElementById("keyboard").innerHTML = "You Won!!!";
  }
}

function checkIfGameLost() {
  if (mistakes === maxWrong) {
    document.getElementById("wordSpotlight").innerHTML =
      "The answer was: " + answer;
    document.getElementById("keyboard").innerHTML = "You Lost!!!";
  }
}

function guessedWord() {
  wordStatus = answer
    .split("")
    .map((letter) => (guessed.indexOf(letter) >= 0 ? letter : " _ "))
    .join("");

  document.getElementById("wordSpotlight").innerHTML = wordStatus;
}

function updateMistakes() {
  document.getElementById("mistakes").innerHTML = mistakes;
}

function reset() {
  mistakes = 0;
  guessed = [];
  document.getElementById("hangmanPic").src = "./images/0.jpg";

  randomWord();
  guessedWord();
  updateMistakes();
  generateButtons();
}

function restart() {
  location.reload();
  // mistakes = 0;
  // guessed = [];
  // document.getElementById('hangmanPic').src = './images/0.jpg';

  // randomWord();
  // guessedWord();
  // updateMistakes();
  // generateButtons();
}

document.getElementById("maxWrong").innerHTML = maxWrong;

randomWord();
generateButtons();
// guessedWord();
