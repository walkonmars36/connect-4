// GET THE CELLS CONTAINER
const divContainer = document.querySelector(".div-container");

// STARTING PLAYER
let player = 1;

// PLAYER ARRAYS
let player1Arr = [];
let player2Arr = [];

// CREATE DIVS
for (let i = 0; i < 49; i++) {
  const div = document.createElement("div");
  div.classList.add("div-container__disc");
  div.setAttribute("data-id", i);
  if (i >= 42) {
    div.className = "taken";
  }
  divContainer.appendChild(div);
}

//  CELLS QUERY SELECTOR
const discs = document.querySelectorAll("div-container__disc");

const cellClicked = (event) => {
  const clickedCell = event.target;
  console.log(typeof clickedCell);
  const cellID = parseInt(event.target.dataset.id);
  // console.log(cellID);

  if (clickedCell[cellID + 7].classList.contains("taken") && !clickedCell[cellID].classList.contains("taken")) {
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
  }
};

// cells event listener
cellsReady.forEach((cell) => {
  cell.addEventListener("click", cellClicked);
});
