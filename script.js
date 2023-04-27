const startScreen = document.querySelector(".start-screen");
const gameBoardScreen = document.querySelector(".game-board");
const startForm = document.querySelector("form");
startForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const playerOneName = document.querySelector("#player1name").value;
  const playerTwoName = document.querySelector("#player2name").value;
  const playerOneMark = "O";
  const playerTwoMark = "X";
  const playerOne = Player(playerOneName, playerOneMark);
  const playerTwo = Player(playerTwoName, playerTwoMark);
  startScreen.style.display = "none";
  gameBoardScreen.style.display = "flex";
  GameBoard(playerOne, playerTwo);
});

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  return {
    getName,
    getMark,
  };
};

const GameBoard = (playerOne, playerTwo) => {
  const row = 3;
  const column = 3;
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  const renderGameBoard = (gameBoard) => {
    for (let i = 0; i < gameBoard.length; i++) {
      const cell = document.querySelector(`#cell-${i}`);
      cell.textContent = gameBoard[i];
    }
  };

  const switchTurn = (currentPlayer, gameBoard) => {
    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell, index) => {
      cell.addEventListener("click", () => {
        if (gameBoard[index] === "") {
          gameBoard[index] = currentPlayer.getMark();
          renderGameBoard(gameBoard);
          currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
          console.log(currentPlayer);
        }
      });
    });
  };

  (function () {
    switchTurn(playerOne, gameBoard);
    switchTurn(playerTwo, gameBoard);
  })();
};

GameBoard();
