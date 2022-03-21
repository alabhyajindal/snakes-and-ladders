// Selecting the main element
const game = document.querySelector(".main");

// Nodelist of 10 section elements
const rowList = document.querySelectorAll(".row");

// Nodelist of 100 squares
const squareList = document.querySelectorAll(".square");

// Selecting the first square
const startSquare = document.getElementById("1");

// Specifying the number of players for the game
const playerCount = 1;

// Rendering the players to the board
for (let i = 0; i < playerCount; i++) {
  const player = document.createElement("div");
  player.classList.add("player");
  player.classList.add(`player-${i + 1}`);
  startSquare.appendChild(player);
}

// Selecting the dice roll button
const roll = document.querySelector(".btn-roll");
// Selecting the element to display rolling dice's results
const result = document.querySelector(".roll-result");

// Function to get a random dice outcome
const rollingDice = function () {
  result.style.color = "#333";
  result.textContent = Math.floor(Math.random() * 6) + 1;
};

// // Nodelist of player pieces
// const playerPieces = document.querySelectorAll(".player");

// Selecting the first player element to be moved
const firstPlayer = document.querySelector(".player-1");

// Function to move the players based on the result of the dice
const move = function (dice) {
  const initialSquare = document.getElementById(currentPosition() + dice);

  initialSquare.appendChild(firstPlayer);
};

// Rolling the dice on the click of the button
roll.addEventListener("click", () => {
  rollingDice();
  const result = document.querySelector(".roll-result");
  move(parseInt(result.textContent));
});

// Selecting the parent which has the player piece child element
const currentPosition = function () {
  for (let i = 0; i < 100; i++) {
    if (squareList[i].children.length > 0) {
      return parseInt(squareList[i].getAttribute("id"));
    }
  }
};

currentPosition();

// winning window modal - Sagar
// wrapper centering - Sagar
// dice animation - Sagar
// ladder and snake movements - Alabhya
// player piece - replace with a good image (should be visible)
//

// ladder and snake animation - Alabhya (optional, for later)
