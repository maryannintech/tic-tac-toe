const startScreen = document.querySelector(".start-screen");
const startForm = document.querySelector("form");
startForm.addEventListener("submit", function (event) {
  event.preventDefault();
  startScreen.style.display = "none";
});
