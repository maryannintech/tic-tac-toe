const startScreen = document.querySelector(".start-screen");
const startForm = document.querySelector("form");
startForm.addEventListener("submit", function (event) {
  event.preventDefault();
  startScreen.style.display = "none";
});

const Player = (name, mark) => {
  const getName = () => name;
  const getMark = () => mark;

  return {
    getName,
    getMark,
  };
};

const Gameboard = () => {
  const row = 3;
  const column = 3;
  let gameBoard = [];
  const playerOneName = document.querySelector("#player1name").value;
  const playerTwoName = document.querySelector("#player2name").value;

  const playerOne = Player(playerOneName, "O");
  const playerTwo = Player(playerTwoName, "X");

  for (let i = 0; i < gameBoard.length; i++) {
    const cell = document.querySelector(`#cell-${i}`);
    cell.textContent = gameBoard[i];
  }

};
