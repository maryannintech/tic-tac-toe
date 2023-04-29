const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  // to return the player's name and mark
  return {
    getName,
    getMark,
  };
};

const GameBoard = (playerOne, playerTwo) => {
  let gameBoard = ["", "", "", "", "", "", "", "", ""];

  // to assign the cell to the placement of array
  const renderGameBoard = (gameBoard) => {
    for (let i = 0; i < gameBoard.length; i++) {
      const cell = document.querySelector(`#cell-${i}`);
      cell.textContent = gameBoard[i];
    }
  };

  const switchTurn = (currentPlayer, gameBoard) => {
    const cells = document.querySelectorAll(".cell");
    const handleClick = () => {
      // if the clicked index is empty, the mark of the current player will be put there and to the dom
      if (gameBoard[index] === "") {
        gameBoard[index] = currentPlayer.getMark();
        renderGameBoard(gameBoard);
        checkWinner(currentPlayer, gameBoard, cells);
        // switch the current player to player one and vice versa
        currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
        // for debugging
        console.log(currentPlayer.getName(), currentPlayer.getMark());
        console.log(gameBoard);
      }
      cells.addEventListener("click", handleClick);
    };
  };

  const checkWinner = (name, gameBoard, cells) => {
    const winnerAnnouncement = document.querySelector(".winner");
    const winnerMessage = "is the winner!";
    const playAgainBtn = document.querySelector(".againBtn");
    const player = name.getName();

    // check rows
    if (
      gameBoard[0] === name.getMark() &&
      gameBoard[1] === name.getMark() &&
      gameBoard[2] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    } else if (
      gameBoard[3] === name.getMark() &&
      gameBoard[4] === name.getMark() &&
      gameBoard[5] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    } else if (
      gameBoard[6] === name.getMark() &&
      gameBoard[7] === name.getMark() &&
      gameBoard[8] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    }
    // check rows
    else if (
      gameBoard[0] === name.getMark() &&
      gameBoard[3] === name.getMark() &&
      gameBoard[6] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    } else if (
      gameBoard[1] === name.getMark() &&
      gameBoard[4] === name.getMark() &&
      gameBoard[7] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    } else if (
      gameBoard[2] === name.getMark() &&
      gameBoard[5] === name.getMark() &&
      gameBoard[8] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    }
    // check diagonally
    else if (
      gameBoard[0] === name.getMark() &&
      gameBoard[4] === name.getMark() &&
      gameBoard[8] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    } else if (
      gameBoard[2] === name.getMark() &&
      gameBoard[4] === name.getMark() &&
      gameBoard[6] === name.getMark()
    ) {
      winnerAnnouncement.textContent = `${player} ${winnerMessage}`;
      playAgainBtn.addEventListener("click", () => {
        window.location.reload();
      });
      playAgainBtn.style.display = "block";
    }
  };

  (function () {
    switchTurn(playerOne, gameBoard);
    switchTurn(playerTwo, gameBoard);
  })();
};

// dom elements
const startScreen = document.querySelector(".start-screen");
const gameBoardScreen = document.querySelector(".game-board");
const startForm = document.querySelector("form");

startForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const playerOneName = document.querySelector("#player1name").value;
  const playerTwoName = document.querySelector("#player2name").value;
  const playerOneScreen = document.querySelector(".player1-name");
  const playerTwoScreen = document.querySelector(".player2-name");
  playerOneScreen.textContent = playerOneName;
  playerTwoScreen.textContent = playerTwoName;
  startScreen.style.display = "none";
  gameBoardScreen.style.display = "flex";

  // send to Player
  const playerOne = Player(playerOneName, "O");
  console.log(playerOne.getName(), playerOne.getMark());
  const playerTwo = Player(playerTwoName, "X");

  GameBoard(playerOne, playerTwo);
});
