let infoPlayerInterfaceOne = document.getElementById("info-player-1");
let infoPlayerInterfaceTwo = document.getElementById("info-player-2");

let playerActive = [];
let players = [
  {
    id: "1",
    name: "firulais",
    image: "./assets/firulais.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "2",
    name: "gasper",
    image: "./assets/gasper.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "3",
    name: "octo",
    image: "./assets/octo.webp",
    win: 0,
    lose: 0,
  },
  {
    id: "4",
    name: "phoenix",
    image: "./assets/phoenix.webp",
    win: 0,
    lose: 0,
  },
];
let playerOne = [];
let playerTwo = [];

document.addEventListener("mouseover", (e) => {
  if (e.target.matches(".table-div")) {
    e.target.classList.add("shadow");
  }
});

document.addEventListener("mouseout", (e) => {
  if (e.target.matches(".table-div")) {
    e.target.classList.remove("shadow");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".table-div")) {
    var select = e.target;

    if (playerActive == playerOne) {
      select.classList.add("o");
      playerActive = playerTwo;
    } else {
      select.classList.add("x");
      playerActive = playerOne;
    }
  }

  if (e.target.matches(".btn-player-1")) {
    let inputPlayer1 = document.getElementById("input-name-player-1").value;
    console.log(inputPlayer1);

    if (inputPlayer1) {
      let playerUno = selectPlayer1(players, inputPlayer1);
      playerActive = playerOne;

      let infoPlayerUno = `
        <img id="image-player-1" class="imge-players shadow" src="${playerUno.image}" alt="player-1">
                        <h2 id="name-player-1">${playerUno.name}</h2>
                        <span id="win-player-1" >victorias ${playerUno.win}</span>
                        <span id="lose-player-1">derrotas ${playerUno.lose}</span>
        
        `;

      infoPlayerInterfaceOne.innerHTML = infoPlayerUno;
      console.log(inputPlayer1);
      console.log(playerUno);
    }
  }

  if (e.target.matches(".btn-player-2")) {
    let inputPlayer2 = document.getElementById("input-name-player-2").value;
    console.log(inputPlayer2);

    if (inputPlayer2) {
      let playerDos = selectPlayer2(players, inputPlayer2);
      playerActive = playerTwo;
      console.log(inputPlayer2);
      console.log(playerDos);

      let infoPlayerDos = `
      <img id="image-player-2" class="imge-players shadow" src="${playerDos.image}" alt="player-2">
      <h2 id="name-player-2">${playerDos.name}</h2>
      <span id="win-player-2" >victorias ${playerDos.win}</span>
      <span id="lose-player-2">derrotas ${playerDos.lose}</span>
      
      `;

      infoPlayerInterfaceTwo.innerHTML = infoPlayerDos;
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
