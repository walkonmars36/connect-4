import {winningArray} from "./winningArray.js";

// QUERY SELECTORS
const gameContainer = document.querySelector(".game-container");
const result = document.querySelector(".result");
const resultWinner = document.querySelector(".result__winner");
const playAgainBtn = document.querySelector(".result__play-again");
const alertMsg = document.querySelector(".alert-box");
const alertText = document.querySelector(".alert-box__text");
const alertBtn = document.querySelector(".alert-box__button");
const scoreDiv = document.querySelector(".score");
const scoreRed = document.querySelector(".score__display--red");
const scoreYellow = document.querySelector(".score__display--yellow");
const currentPlayerText = document.querySelector(".current-player__text");

// STARTING PLAYER AND DEFAULT SCORES
let currentPlayer = "Red";
let redScore = 0;
let yellowScore = 0;

// LOAD PAGE() TRIGGERED BY WINDOW EVENT LISTENER
const loadPage = () => {
  createGameBoard();
  result.style.display = "none";
  scoreDiv.style.display = "flex";
  scoreRed.innerText = redScore;
  scoreYellow.innerText = yellowScore;
  currentPlayerText.innerText = `The current player is : ${currentPlayer}`;
};

// PLAY AGAIN() RESETS THE GAME
const playAgain = () => {
  gameContainer.innerHTML = "";
  result.style.display = "none";
  scoreDiv.style.display = "flex";
  createGameBoard();
  currentPlayerText.innerText = `The current player is : ${currentPlayer}`;
};

// CREATE GAME BOARD() CALLED BY LOADPAGE AND PLAYAGAIN
// 49 divs created with create element, classname added, then data-id and index. last seven divs are empty and have a class of taken, these sit under the foundation row and make the game logic possible. divs then appended to the game-container div with appendChild
const createGameBoard = () => {
  for (let i = 0; i < 49; i++) {
    const div = document.createElement("div");
    div.className = "game-container__cell";
    div.setAttribute("data-id", i);
    if (i >= 42) {
      div.className = "taken";
    }
    gameContainer.appendChild(div);
  }
  getCells();
};

//  CELLS  DECLARED AS A GLOBAL VARIABLE
let cells;

// CREATE GAMEBOARD CALLS GETCELLS FUNCTION, WHICH ATTACHES EVENT LISTENERS TO EACH EMPTY CELL
const getCells = () => {
  cells = document.querySelectorAll(".game-container div");
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
};

//  CELL CLICKED FUNCTION
const cellClicked = (event) => {
  const clickedCell = event.target;

  const cellID = parseInt(event.target.dataset.id);

  if (cells[cellID + 7].classList.contains("taken") && !cells[cellID].classList.contains("taken")) {
    if (currentPlayer === "Red") {
      clickedCell.classList.add("game-container__cell--player-red");
      clickedCell.classList.add("taken");

      currentPlayer = "Yellow";
      currentPlayerText.innerText = `The current player is : ${currentPlayer}`;
      checkForWin();
    } else if (currentPlayer === "Yellow") {
      clickedCell.classList.add("game-container__cell--player-yellow");
      clickedCell.classList.add("taken");

      currentPlayer = "Red";
      currentPlayerText.innerText = `The current player is : ${currentPlayer}`;
      checkForWin();
    }
  } else {
    alertMsg.style.display = "flex";
    alertText.innerHTML = "Build on the bottom row, <br> or on top of another token.";
  }
};

const checkForWin = () => {
  for (let i in winningArray) {
    const token1 = cells[winningArray[i][0]];
    const token2 = cells[winningArray[i][1]];
    const token3 = cells[winningArray[i][2]];
    const token4 = cells[winningArray[i][3]];

    if (
      token1.classList.contains("game-container__cell--player-red") &&
      token2.classList.contains("game-container__cell--player-red") &&
      token3.classList.contains("game-container__cell--player-red") &&
      token4.classList.contains("game-container__cell--player-red")
    ) {
      currentPlayerText.innerText = "";
      result.style.display = "flex";
      resultWinner.innerText = "Red Wins 🎉";
      redScore++;

      scoreRed.innerText = redScore;
      resultWinner.style.color = "red";
      playAgainBtn.innerText = "PLAY AGAIN";
    }
    if (
      token1.classList.contains("game-container__cell--player-yellow") &&
      token2.classList.contains("game-container__cell--player-yellow") &&
      token3.classList.contains("game-container__cell--player-yellow") &&
      token4.classList.contains("game-container__cell--player-yellow")
    ) {
      currentPlayerText.innerText = "";
      result.style.display = "flex";
      resultWinner.innerText = "Yellow Wins 🎉";
      yellowScore++;

      scoreYellow.innerText = yellowScore;
      resultWinner.style.color = "yellow";
      playAgainBtn.innerText = "PLAY AGAIN";
    }
  }
};

const turnAlertOff = () => {
  alertMsg.style.display = "none";
};

window.addEventListener("load", loadPage);

playAgainBtn.addEventListener("click", playAgain);

alertBtn.addEventListener("click", turnAlertOff);
