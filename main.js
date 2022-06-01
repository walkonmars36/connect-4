import {winningArray} from "./winningArray.js";

// GET THE CELLS CONTAINER
const cellsContainer = document.querySelector(".cells-container");

// STARTING PLAYER
let player = 1;

// PLAYER ARRAYS
let player1Arr = [];
let player2Arr = [];

// CREATE EMPTY CELLS
for (let i = 0; i < 42; i++) {
  const emptyCells = document.createElement("div");
  emptyCells.classList.add("cells-container__cell");
  emptyCells.setAttribute("data-id", i);
  cellsContainer.appendChild(emptyCells);
}

//  CELLS QUERY SELECTOR
const cells = document.querySelectorAll(".cells-container__cell");

// CELL CLICKED FUNCTION
const cellClicked = (event) => {
  const clickedCell = event.target;

  console.log(clickedCell);

  const cellID = parseInt(event.target.dataset.id);
  console.log(cellID);

  for (let i = 0; i < cells.length; i++) {
    console.log(cells[i]);
    // if cells below yours cells[i + 7] is taken you can go on top

    if (cells[i + 7].classList.contains("taken")) {
      if (player === 1) {
        clickedCell.classList.add("cells-container__cell--red");
        clickedCell.classList.add("taken");

        player1Arr.push(cellID);
        console.log(player1Arr);

        player = 2;

        // console.log(clickedCell.dataset.id);
      } else {
        clickedCell.classList.add("cells-container__cell--yellow");

        player2Arr.push(cellID);
        console.log(player2Arr);

        player = 1;
        // console.log(event.target.dataset.id);
      }
    }
  }

  // checkForWinner()
};

// const checkForWinner = () => {
//   if(player1Arr[i].includes(winningArray[i])) {

//   }
// }

// cells event listener
cells.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});
