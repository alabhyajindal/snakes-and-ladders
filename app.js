// Selecting the main element
const game = document.querySelector(".main");
// Rendering 10 section elements
for (let i = 0; i < 10; i++) {
  const row = document.createElement("section");
  row.classList.add("row");
  row.classList.add(`row-${i + 1}`);
  game.appendChild(row);
}

// Nodelist of 10 section elements
const rowList = document.querySelectorAll(".row");

// Rendering 10 squares within each section
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.classList.add(`square-${i * 10 + j + 1}`);
    rowList[i].appendChild(div);
  }
}

// Nodelist of 100 squares
const squareList = document.querySelectorAll(".square");
// Selecting the first square on which the game begins
const firstSquare = document.querySelector(".square-91");

// Specifying the number of players for the game
const playerCount = 4;

// Rendering the players to the board
for (let i = 0; i < playerCount; i++) {
  const player = document.createElement("div");
  player.classList.add("player");
  player.classList.add(`player-${i + 1}`);
  firstSquare.appendChild(player);
}

// Selecting the dice roll button
const roll = document.querySelector(".btn-roll");
// Selecting the element to display rolling dice's results
const result = document.querySelector(".roll-result");

// Function to get a random dice outcome
const rollingDice = function () {
  result.textContent = Math.floor(Math.random() * 6) + 1;
};

// Rolling the dice on the click of the button
roll.addEventListener("click", () => {
  rollingDice();
});
