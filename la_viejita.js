let infoPlayerInterfaceOne = document.getElementById("info-player-1");
let infoPlayerInterfaceTwo = document.getElementById("info-player-2");
let clearTable = document.getElementById("table");
let main = document.getElementById("main");

let playerActive = []; //problema de logica pienso que tengo que agregar una clase a los player para que sea visualmente se;alado como activo ademas intercambiar esa clase luego de hacer click en un div
let playerOne = [];
let playerTwo = [];
let players = [
  {
    id: "1",
    name: "Firulais",
    image: "./assets/firulais.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "2",
    name: "Gasper",
    image: "./assets/gasper.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "3",
    name: "Octo",
    image: "./assets/octo.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "4",
    name: "Phoenix",
    image: "./assets/phoenix.webp",
    win: 0,
    lose: 0,
  },
];
let board = ["", "", "", "", "", "", "", "", ""];

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".table-div")) {
    e.target.classList.add("shadow");
    console.log(playerActive.name);
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches(".table-div")) {
    e.target.classList.remove("shadow");
    console.log(playerActive.name);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".table-div")) {
    console.log(playerActive.name);

    let select = e.target;
    let position = parseInt(e.target.dataset.div);
    console.log(position);

    if (playerActive == playerOne) {
      let imagePlayerDos = document.getElementById("image-player-2");
      let imagePlayerUno = document.getElementById("image-player-1");

      imagePlayerDos.classList.add("shadow");
      imagePlayerUno.classList.remove("shadow");
      select.classList.add("o");
      board[position] = "o";
      if (board[0] == "o" && board[1] == "o" && board[2] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[3] == "o" && board[4] == "o" && board[5] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[6] == "o" && board[7] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[0] == "o" && board[4] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[2] == "o" && board[4] == "o" && board[6] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[0] == "o" && board[3] == "o" && board[6] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[1] == "o" && board[4] == "o" && board[7] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[2] == "o" && board[5] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (playerActive == playerTwo) {
        playerActive = playerOne;
      } else {
        playerActive = playerTwo;
      }
      if (
        !board[0] == "" &&
        !board[1] == "" &&
        !board[2] == "" &&
        !board[3] == "" &&
        !board[4] == "" &&
        !board[5] == "" &&
        !board[6] == "" &&
        !board[7] == "" &&
        !board[8] == ""
      ) {
        newTable();
        modalDraw();
      }
    } else {
      select.classList.add("x");
      board[position] = "x";
      if (board[0] == "x" && board[1] == "x" && board[2] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[3] == "x" && board[4] == "x" && board[5] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[6] == "x" && board[7] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[0] == "x" && board[4] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[2] == "x" && board[4] == "x" && board[6] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[0] == "x" && board[3] == "x" && board[6] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[1] == "x" && board[4] == "x" && board[7] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      if (board[2] == "x" && board[5] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
        newTable();
        modalWin();
        countWin(playerActive);
      }
      let imagePlayerUnox = document.getElementById("image-player-1");
      let imagePlayerDosx = document.getElementById("image-player-2");
      imagePlayerUnox.classList.add("shadow");
      imagePlayerDosx.classList.remove("shadow");

      if (playerActive == playerOne) {
        playerActive = playerTwo;
      } else {
        playerActive = playerOne;
      }
      if (
        !board[0] == "" &&
        !board[1] == "" &&
        !board[2] == "" &&
        !board[3] == "" &&
        !board[4] == "" &&
        !board[5] == "" &&
        !board[6] == "" &&
        !board[7] == "" &&
        !board[8] == ""
      ) {
        newTable();
        modalDraw();
      }
    }
  }

  if (e.target.matches(".btn-player-1")) {
    let inputPlayer1 = document.getElementById("input-name-player-1").value;
    console.log(inputPlayer1);
    if (inputPlayer1) {
      let playerUno = selectPlayer1(players, inputPlayer1);
      if (playerUno !== playerTwo) {
        playerActive = playerUno;

        let infoPlayerUno = `
        <img id="image-player-1" class="imge-players" src="${playerUno.image}" alt="player-1">
                        <h2 id="name-player-1">${playerUno.name}</h2>
                        <span id="win-player-1" >victorias ${playerUno.win}</span>
                        <span id="lose-player-1">derrotas ${playerUno.lose}</span>
        
        `;

        infoPlayerInterfaceOne.innerHTML = infoPlayerUno;
        console.log(playerActive.name);
      } else {
        alert(
          `El perfil ${playerUno.name} ya esta siendo usado, por favor selecciones otro`
        );
      }
    }
  }

  if (e.target.matches(".btn-player-2")) {
    let inputPlayer2 = document.getElementById("input-name-player-2").value;
    console.log(inputPlayer2);

    if (inputPlayer2) {
      let playerDos = selectPlayer2(players, inputPlayer2);
      if (playerDos !== playerOne) {
        playerActive = playerDos;

        let infoPlayerDos = `
      <img id="image-player-2" class="imge-players" src="${playerDos.image}" alt="player-2">
      <h2 id="name-player-2">${playerDos.name}</h2>
      <span id="win-player-2" >victorias ${playerDos.win}</span>
      <span id="lose-player-2">derrotas ${playerDos.lose}</span>
      
      `;

        infoPlayerInterfaceTwo.innerHTML = infoPlayerDos;
        console.log(playerActive.name);
      } else {
        alert(
          `El perfil ${playerDos.name} ya esta siendo usado, por favor selecciones otro`
        );
      }
    }
  }
  if (e.target.matches(".new-game")) {
    main.innerHTML = "";
    board = [];
  }
});

function selectPlayer1(players, nombre) {
  for (const usuarioUno of players) {
    if (usuarioUno.name == nombre) {
      playerOne = usuarioUno;
    }
  }
  return playerOne;
}
function selectPlayer2(players, nombre) {
  for (const usuarioDos of players) {
    if (usuarioDos.name == nombre) {
      playerTwo = usuarioDos;
    }
  }
  return playerTwo;
}

function modalWin() {
  main.innerHTML = `
            <div is="modal" class="modal is-active">
                <div class="modal-container">
                    <h2>El ganador es ${playerActive.name}</h2>
                    <button class="new-game">Nuevo juego</button>
                </div>
            </div>
            `;
}
function modalDraw() {
  main.innerHTML = `
              <div is="modal" class="modal is-active">
                  <div class="modal-container">
                      <h2>Empate</h2>
                      <button class="new-game">Nuevo juego</button>
                  </div>
              </div>
              `;
}

function newTable() {
  clearTable.innerHTML = `<div class="table-div place-1" data-div="0"></div>
    <div class="table-div place-2" data-div="1"></div>
    <div class="table-div place-3" data-div="2"></div>
    <div class="table-div place-4" data-div="3"></div>
    <div class="table-div place-5" data-div="4"></div>
    <div class="table-div place-6" data-div="5"></div>
    <div class="table-div place-7" data-div="6"></div>
    <div class="table-div place-8" data-div="7"></div>
    <div class="table-div place-9" data-div="8"></div>
              `;
}
function countWin(playerActive) {
  playerActive.win++;
}
