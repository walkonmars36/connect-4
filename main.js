import {winningArray} from "./winningArray.js";

// get the cells container
const cellsContainer = document.querySelector(".cells-container");

// create cells

for (let i = 0; i < 42; i++) {
  const cells = document.createElement("div");
  cells.classList.add("cells-container__cell");
  cellsContainer.appendChild(cells);
}

const cellClicked = () => {
  // get the value of the cell when clicked

  for (let i = 0; i < emptyCells.length; i++) {
    console.log(emptyCells[i]);

    return emptyCells[i];
  }
};

const emptyCells = document.querySelectorAll(".cells-container__cell");

// cells event listener
emptyCells.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});
