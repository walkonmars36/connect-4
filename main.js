import {winningArray} from "./winningArray.js";

// QUERY SELECTORS
const divContainer = document.querySelector(".div-container");
const result = document.querySelector(".result");
const resultWinner = document.querySelector(".result__winner");
const playAgainBtn = document.querySelector(".result__play-again");
const alertMsg = document.querySelector(".alert");
const alertText = document.querySelector(".alert__text");
const alertBtn = document.querySelector(".alert__button");
const scoreDiv = document.querySelector(".score");
const scoreRed = document.querySelector(".score__display--red");
const scoreYellow = document.querySelector(".score__display--yellow");

// STARTING PLAYER
let currentPlayer = "red";
let redScore = 0;
let yellowScore = 0;

const loadPage = () => {
  createGameBoard();
  scoreDiv.style.display = "flex";
  scoreRed.innerText = redScore;
  scoreYellow.innerText = yellowScore;
};

const playAgain = () => {
  divContainer.innerHTML = "";
  result.style.display = "none";
  scoreDiv.style.display = "flex";
  createGameBoard();
};

// CREATE GAME
const createGameBoard = () => {
  for (let i = 0; i < 49; i++) {
    const div = document.createElement("div");
    div.className = "div-container__cell";
    div.setAttribute("data-id", i);
    if (i >= 42) {
      div.className = "taken";
    }
    divContainer.appendChild(div);
  }
  getCells();
};

let cells;

const getCells = () => {
  cells = document.querySelectorAll(".div-container div");
  cells.forEach((cell) => {
    cell.addEventListener("click", cellClicked);
  });
};

//  CELL CLICKED FUNCTION
const cellClicked = (event) => {
  const clickedCell = event.target;

  const cellID = parseInt(event.target.dataset.id);

  if (cells[cellID + 7].classList.contains("taken") && !cells[cellID].classList.contains("taken")) {
    if (currentPlayer === "red") {
      clickedCell.classList.add("div-container__cell--player-red");
      clickedCell.classList.add("taken");
      checkForWin();
      currentPlayer = "yellow";
    } else if (currentPlayer === "yellow") {
      clickedCell.classList.add("div-container__cell--player-yellow");
      clickedCell.classList.add("taken");
      checkForWin();
      currentPlayer = "red";
    }
  } else {
    alertMsg.style.display = "flex";
    alertText.innerText = "You can't place a token on an empty cell or on a cell that has a token in it";
  }
};

const checkForWin = () => {
  for (let i = 0; i < winningArray.length; i++) {
    const token1 = cells[winningArray[i][0]];
    const token2 = cells[winningArray[i][1]];
    const token3 = cells[winningArray[i][2]];
    const token4 = cells[winningArray[i][3]];

    if (
      token1.classList.contains("div-container__cell--player-red") &&
      token2.classList.contains("div-container__cell--player-red") &&
      token3.classList.contains("div-container__cell--player-red") &&
      token4.classList.contains("div-container__cell--player-red")
    ) {
      result.style.display = "flex";
      resultWinner.innerText = "Red Wins 🎉";
      redScore++;
      scoreRed.innerText = redScore;

      resultWinner.style.color = "red";
      playAgainBtn.innerText = "PLAY AGAIN";
    }
    if (
      token1.classList.contains("div-container__cell--player-yellow") &&
      token2.classList.contains("div-container__cell--player-yellow") &&
      token3.classList.contains("div-container__cell--player-yellow") &&
      token4.classList.contains("div-container__cell--player-yellow")
    ) {
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
