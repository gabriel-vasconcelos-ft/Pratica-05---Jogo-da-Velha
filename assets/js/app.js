let btn = document.querySelector("button");
let pontos1 = document.querySelector("#pontos_player_1");
let pontos2 = document.querySelector("#pontos_player_2");
let tab = document.querySelector("#tabuleiro");
let casa = document.querySelectorAll(".casa");

let jvArray = new Array(9);
let vez = 1;
let pnt1 = 0;
let pnt2 = 0;

function fillArray(position) {
  if (vez === 1) {
    jvArray[position] = "X";
    vez = 2;
  } else {
    jvArray[position] = "O";
    vez = 1;
  }
}

function checkGameOver() {
  if (checkWin()) {
    if (vez !== 1) {
      pnt1++;
      const span = document.createElement("span");
      span.innerHTML = pnt1;
      pontos1.innerHTML = `
        Jogador 1
        <span>${pnt1}</span>
        pontos
      `;
      alert("Vitória do Player 1");
    } else {
      pnt2++;
      const span = document.createElement("span");
      span.innerHTML = pnt2;
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
  if (
    jvArray[0] === jvArray[1] &&
    jvArray[1] === jvArray[2] &&
    jvArray[0] !== undefined
  ) {
    return true;
  } else if (
    jvArray[3] === jvArray[4] &&
    jvArray[4] === jvArray[5] &&
    jvArray[3] !== undefined
  ) {
    return true;
  } else if (
    jvArray[6] === jvArray[7] &&
    jvArray[7] === jvArray[8] &&
    jvArray[6] !== undefined
  ) {
    return true;
  } else if (
    jvArray[0] === jvArray[3] &&
    jvArray[3] === jvArray[6] &&
    jvArray[0] !== undefined
  ) {
    return true;
  } else if (
    jvArray[1] === jvArray[4] &&
    jvArray[4] === jvArray[7] &&
    jvArray[1] !== undefined
  ) {
    return true;
  } else if (
    jvArray[2] === jvArray[5] &&
    jvArray[5] === jvArray[8] &&
    jvArray[2] !== undefined
  ) {
    return true;
  } else if (
    jvArray[0] === jvArray[4] &&
    jvArray[4] === jvArray[8] &&
    jvArray[0] !== undefined
  ) {
    return true;
  } else if (
    jvArray[2] === jvArray[4] &&
    jvArray[4] === jvArray[6] &&
    jvArray[2] !== undefined
  ) {
    return true;
  } else {
    return false;
  }
}

function checkDraw() {
  let draw = true;
  for (let i = 0; i < jvArray.length; i++) {
    if (jvArray[i] == undefined) {
      draw = false;
    }
  }
  return draw;
}

function clearGame() {
  jvArray = new Array(9);
  vez = 1;
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("casa_selecionada");
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
  }
}

function startGame() {
  for (let i = 0; i < cells.length; i++) {
    cells[i].classList.remove("x");
    cells[i].classList.remove("o");
    cells[i].addEventListener("click", function () {
      console.log(vez);
      this.classList.add("casa_selecionada");
      if (typeof jvArray[i] == "undefined") {
        if (vez === 1) {
          this.classList.add("x");
        } else {
          this.classList.add("o");
        }
        fillArray(i);
        checkGameOver();
      }
    });
  }
}

startGame();
btn.addEventListener("click", function () {
  clearGame();
});