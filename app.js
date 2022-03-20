const game = document.querySelector(".main");
for (let i = 0; i < 10; i++) {
  const row = document.createElement("section");
  row.classList.add("row");
  row.classList.add(`row-${i + 1}`);
  game.appendChild(row);
}

const rowList = document.querySelectorAll(".row");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.classList.add(`square-${i * 10 + j + 1}`);
    rowList[i].appendChild(div);
  }
}

const squareList = document.querySelectorAll(".square");
const firstSquare = document.querySelector(".square-91");

const playerCount = 4;

for (let i = 0; i < playerCount; i++) {
  const player = document.createElement("div");
  player.classList.add("player");
  player.classList.add(`player-${i + 1}`);
  firstSquare.appendChild(player);
}
