// GET THE CELLS CONTAINER
const cellsContainer = document.querySelector(".cells-container");

// STARTING PLAYER
let player = 1;

// PLAYER ARRAYS
let player1Arr = [];
let player2Arr = [];

// CREATE EMPTY CELLS
for (let i = 0; i < 42; i++) {
  const cells = document.createElement("div");
  cells.classList.add("cells-container__cell");
  cells.setAttribute("data-id", i);
  cellsContainer.appendChild(cells);
}

//  CELLS QUERY SELECTOR
const cellsReady = document.querySelectorAll(".cells-container__cell");

// console.log(typeof cellsReady);

const cellClicked = (event) => {
  const clickedCell = event.target;

  console.log(clickedCell);

  const cellID = parseInt(event.target.dataset.id);
  console.log(cellID);

  // if cellsReady[i + 7] (directly below clickedCell) is taken you can go on top

  // if (cellsReady[i + 7].classList.contains("taken")) {
  if (player === 1) {
    clickedCell.classList.add("cells-container__cell--red");
    clickedCell.classList.add("taken");

    player1Arr.push(cellID);
    console.log(player1Arr);

    player = 2;

    // console.log(clickedCell.dataset.id);
  } else {
    clickedCell.classList.add("cells-container__cell--yellow");
    clickedCell.classList.add("taken");

    player2Arr.push(cellID);
    console.log(player2Arr);

    player = 1;
    // console.log(event.target.dataset.id);
  }

  // }

  // checkForWinner()
};

// cells event listener
cellsReady.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});
