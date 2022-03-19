const game = document.querySelector(".main");
for (let i = 0; i < 10; i++) {
  const row = document.createElement("section");
  row.classList.add("row");
  row.classList.add(`row-${i + 1}`);
  row.textContent = `row-${i}`;
  game.appendChild(row);
}

const rowList = document.querySelectorAll(".row");

for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    const div = document.createElement("div");
    div.classList.add("square");
    rowList[i].appendChild(div);
  }
}

const squareList = document.querySelectorAll(".square");

for (let i = 0; i < 10; i++) {
  if (i % 2) {
    let squares = rowList[i].children;
    for (let j = 0; j < 10; j++) {
      let base = i * 10;
      squares[j].textContent = base + j;
    }
  }
}

for (let j = 9; j >= 0; j--) {
  if (j % 2) {
    console.log(j);
  }
}
