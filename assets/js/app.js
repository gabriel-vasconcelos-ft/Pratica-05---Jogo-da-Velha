let btn = document.querySelector("button");
let pontos1 = document.querySelector("#pontos_player_1");
let pontos2 = document.querySelector("#pontos_player_2");
let tab = document.querySelector("#tabuleiro");
let casa = document.querySelectorAll(".casa");

const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let jvArray = new Array(9);
let vez = 1;
let pnt1 = 0;
let pnt2 = 0;

function fillArray(position) {
  jvArray[position] = vez === 1 ? "X" : "O";
  vez = vez === 1 ? 2 : 1;
}

function checkGameOver() {
  if (checkWin()) {
    if (vez === 2) {
      pnt1++;
      pontos1.innerHTML = `
        Jogador 1
        <span>${pnt1}</span>
        pontos
      `;
      alert("Vitória do Player 1");
    } else {
      pnt2++;
      pontos2.innerHTML = `
        Jogador 2
        <span>${pnt2}</span>
        pontos
      `;
      alert("Vitória do Player 2");
    }
    clearGame();
  } else if (checkDraw()) {
    alert("Empate!");
    clearGame();
  }
}

function checkWin() {
  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (
      jvArray[a] === jvArray[b] &&
      jvArray[b] === jvArray[c] &&
      jvArray[a] !== undefined
    ) {
      return true;
    }
  }
  return false;
}

function checkDraw() {
  return jvArray.every(casa => casa !== undefined);
}

function clearGame() {
  jvArray = new Array(9);
  vez = 1;
  casa.forEach(c => {
    c.classList.remove("casa_selecionada");
    c.classList.remove("x");
    c.classList.remove("o");
  });
}

function startGame() {
  casa.forEach((c, i) => {
    c.addEventListener("click", function() {
      fillArray(i);
      this.classList.add("casa_selecionada");
      this.classList.add(vez === 1 ? "x" : "o");
      checkGameOver();
    });
  });
}
``
