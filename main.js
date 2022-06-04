import {winningArray} from "./winningArray.js";

// GET THE CELLS CONTAINER
const divContainer = document.querySelector(".div-container");
const result = document.querySelector(".result");
const resultWinner = document.querySelector(".result__winner");
const playAgainBtn = document.querySelector(".result__play-again");

// STARTING PLAYER
let currentPlayer = 1;

const loadPage = () => {
  createGameBoard();
};

const playAgain = () => {
  divContainer.innerHTML = "";
  result.style.display = "none";
  loadPage();
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
    if (currentPlayer === 1) {
      clickedCell.classList.add("div-container__cell--player-1");
      clickedCell.classList.add("taken");
      checkForWin();
      currentPlayer = 2;
    } else if (currentPlayer === 2) {
      clickedCell.classList.add("div-container__cell--player-2");
      clickedCell.classList.add("taken");
      checkForWin();
      currentPlayer = 1;
    }
  } else {
    alert("You can't build on an empty space or on a space that has been built on");
  }
};

const checkForWin = () => {
  for (let i = 0; i < winningArray.length; i++) {
    const token1 = cells[winningArray[i][0]];
    const token2 = cells[winningArray[i][1]];
    const token3 = cells[winningArray[i][2]];
    const token4 = cells[winningArray[i][3]];

    if (
      token1.classList.contains("div-container__cell--player-1") &&
      token2.classList.contains("div-container__cell--player-1") &&
      token3.classList.contains("div-container__cell--player-1") &&
      token4.classList.contains("div-container__cell--player-1")
    ) {
      result.style.display = "flex";
      resultWinner.innerText = "Red Wins";
      playAgainBtn.innerText = "PLAY AGAIN";
    }
    if (
      token1.classList.contains("div-container__cell--player-2") &&
      token2.classList.contains("div-container__cell--player-2") &&
      token3.classList.contains("div-container__cell--player-2") &&
      token4.classList.contains("div-container__cell--player-2")
    ) {
      result.style.display = "flex";
      resultWinner.innerText = "Yellow Wins";
      playAgainBtn.innerText = "PLAY AGAIN";
    }
  }
};

window.addEventListener("load", loadPage);

playAgainBtn.addEventListener("click", playAgain);
