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
const move = function (dice, cPos) {
  const initialSquare = document.getElementById(cPos + dice);

  initialSquare.appendChild(firstPlayer);
};

// Rolling the dice on the click of the button
roll.addEventListener("click", () => {
  rollingDice();
  const result = document.querySelector(".roll-result");
  move(parseInt(result.textContent), currentPosition());
  climb(currentPosition());
});

// Selecting the parent which has the player piece child element
const currentPosition = function () {
  for (let i = 0; i < 100; i++) {
    if (squareList[i].children.length > 0) {
      return parseInt(squareList[i].getAttribute("id"));
    }
  }
};

// winning window modal - Sagar
// wrapper centering - Sagar
// dice animation - Sagar
// ladder and snake movements - Alabhya
// player piece - replace with a good image (should be visible)
// ladder and snake animation - Alabhya (optional, for later)

// Ladder movements based on the bg image
const inform = document.querySelector(".inform");

const climbingInfo = function () {
  inform.textContent = "You climbed up the stairs!";
};

const climb = function (currentPosition) {
  if (currentPosition === 2) {
    climbingInfo();
    move(0, 23);
  } else if (currentPosition === 8) {
    climbingInfo();
    move(0, 34);
  } else if (currentPosition === 20) {
    climbingInfo();
    move(0, 77);
  } else if (currentPosition === 32) {
    climbingInfo();
    move(0, 68);
  } else if (currentPosition === 41) {
    climbingInfo();
    move(0, 79);
  } else if (currentPosition === 74) {
    climbingInfo();
    move(0, 88);
  } else if (currentPosition === 85) {
    climbingInfo();
    move(0, 95);
  } else if (currentPosition === 82) {
    climbingInfo();
    move(0, 100);
  }
};

// Snake movements based on bg image
const fallInfo = function () {
  inform.textContent = "You were bitten by a snake!";
};
