let infoPlayerInterfaceOne = document.getElementById("info-player-1");
let infoPlayerInterfaceTwo = document.getElementById("info-player-2");

/* let imagePlayerDos = document.getElementById("image-player-2"); */

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
/* let boardWinRow1 = ["x", "x", "x", "", "", "", "", "", ""];
let boardWinRow2 = ["", "", "", "x", "x", "x", "", "", ""];
let boardWinRow3 = ["", "", "", "", "", "", "x", "x", "x"];
let boardWinColumn1 = ["x", "", "", "x", "", "", "x", "", ""];
let boardWinColumn2 = ["", "X", "", "", "X", "", "", "X", ""];
let boardWinColumn3 = ["", "", "X", "", "", "X", "", "", "X"];
let boardWinDiagonally1 = ["X", "", "", "", "X", "", "", "", "X"];
let boardWinDiagonally2 = ["", "", "X", "", "X", "", "X", "", ""]; */

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
      imagePlayerDos.classList.toggle("shadow");
      select.classList.add("o");
      board[position] = "o";
      if (board[0] == "o" && board[1] == "o" && board[2] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[3] == "o" && board[4] == "o" && board[5] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[6] == "o" && board[7] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[0] == "o" && board[4] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[2] == "o" && board[4] == "o" && board[6] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[0] == "o" && board[3] == "o" && board[6] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[1] == "o" && board[4] == "o" && board[7] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[2] == "o" && board[5] == "o" && board[8] == "o") {
        console.log(`ganaste ${playerActive.name}`);
      }
      
      playerActive = playerTwo;
    } else {
      select.classList.add("x");
      board[position] = "x";
      if (board[0] == "x" && board[1] == "x" && board[2] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[3] == "x" && board[4] == "x" && board[5] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[6] == "x" && board[7] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[0] == "x" && board[4] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[2] == "x" && board[4] == "x" && board[6] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[0] == "x" && board[3] == "x" && board[6] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[1] == "x" && board[4] == "x" && board[7] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      if (board[2] == "x" && board[5] == "x" && board[8] == "x") {
        console.log(`ganaste ${playerActive.name}`);
      }
      let imagePlayerUno = document.getElementById("image-player-1");
      imagePlayerUno.classList.toggle("shadow");

      playerActive = playerOne;
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

/* function theWinnerIs(tablero, jugadorActivo) {
  if (tablero == boardWinRow1) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinRow2) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinRow3) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinColumn1) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinColumn2) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinColumn3) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinDiagonally1) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  if (tablero == boardWinDiagonally2) {
    alert(`El ganador es ${jugadorActivo}`);
  }
  return alert(`El ganador es ${jugadorActivo}`);
} */
