create 42 divs with class of cell using createElement() and append to container div, with appendChild() each will need an id or data value

store cell as a variable and create an array using Array.from()

attach a click event listener to each cell, triggering a cellClicked function -> check for click in mid air as cells can only be built on the foundation level or on top of other cells
How to allow placement of disc on foundation row? ->

const foundationRow = [1,2,3,4,5,6] for eg

const cellClicked = () => {

if (cell[i] === foundationRow[i] || cell === !cellTaken) {
className.add -> cellTaken && discRed(if player1) || discYellow(if player2)

<!-- push selected index into new array -->

let playerSelection = []

playerSelection.push(cell[i])
}

}

check for winner ->
if (cellTaken && color === discRed) {
check winnerArray for number match
} else if (cellTaken && color === discYellow) {
check winnerArray for number match
}

winnerArray will be defined according to all the possible adjacent cells of four -> matching to the cell's data value
