const board = document.getElementById("board");
const messageArea = document.getElementById("message-area");

const btn = document.querySelector("button");
const playerX = { name: "X", cells: [] };
const playerO = { name: "O", cells: [] };

let c1 = document.getElementById("top-left");
let c2 = document.getElementById("top-middle");
let c3 = document.getElementById("top-right");
let c4 = document.getElementById("middle-left");
let c5 = document.getElementById("middle-middle");
let c6 = document.getElementById("middle-right");
let c7 = document.getElementById("bottom-left");
let c8 = document.getElementById("bottom-middle");
let c9 = document.getElementById("bottom-right");

const allCells = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

const s1 = [c1, c2, c3];
const s2 = [c4, c5, c6];
const s3 = [c7, c8, c9];
const s4 = [c1, c5, c9];
const s5 = [c3, c5, c7];
const s6 = [c1, c4, c7];
const s7 = [c2, c5, c8];
const s8 = [c3, c6, c9];
const players = [playerX, playerO];
let currentPlayer = players[0];
const winningStreaks = [s1, s2, s3, s4, s5, s6, s7, s8];

function checkStreaks() {
  players.forEach((player) => {
    winningStreaks.forEach((streak) => {
      if (
        player.cells.includes(streak[0]) &&
        player.cells.includes(streak[1]) &&
        player.cells.includes(streak[2])
      ) {
        messageArea.textContent = player.name + " WINS!";
      }
    });
  });
}

function switchTurns() {
  if (currentPlayer === players[0]) {
    currentPlayer = players[1];
  } else {
    currentPlayer = players[0];
  }
}

function playerStamp(e) {
  if (!e.target.classList.contains("clicked")) {
    e.target.innerText = currentPlayer.name;
    currentPlayer.cells.push(e.target);
    e.target.classList.add("clicked");

    checkStreaks();
    switchTurns();
  }
}

function reset() {
  allCells.forEach((cell) => {
    cell.classList.remove("clicked");
    cell.textContent = "";
    messageArea.textContent = "";
    console.log(cell);
  });
  console.log("reset");
}
board.addEventListener("click", playerStamp);
btn.addEventListener("click", reset);
