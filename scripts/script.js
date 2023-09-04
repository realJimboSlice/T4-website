window.addEventListener("load", showTitle);

function hideAll() {
  document.querySelector("#start").classList.add("hide");
  document.querySelector("#how-to-play").classList.add("hide");
  document.querySelector("#game-over").classList.add("hide");
  document.querySelector("#level-complete").classList.add("hide");
}

function showTitle() {
  console.log("Loading - complete!");
  hideAll();
  document.querySelector("#start").classList.remove("hide");
  document.querySelector("#play-1").addEventListener("click", startGame);
  document.querySelector("#htp-button").addEventListener("click", showInfo);
}

function showInfo() {
  console.log("How to play - complete!");
  hideAll();
  document.querySelector("#how-to-play").classList.remove("hide");
  document.querySelector("#play-2").addEventListener("click", startGame);
}

function randomNumber(random) {
  return Math.floor(Math.random() * random) + 1;
}

let kills;
let healthPoints;

function addKill() {
  kills++;
}
function updateKills() {
  document.querySelector("#myKills").textContent = kills;
}

function subtractLives() {
  healthPoints--;
}

function updateHealthPoints() {
  document.querySelector("#myHealthPoints").textContent = healthPoints;
}

function startGame() {
  console.log("Game has begun!");

  hideAll();

  kills = 0;
  lives = 3;
  updateKills();
  updateHealthPoints();

  document.querySelector("#time-sprite").classList.add("skrump");
  document
    .querySelector("#time-sprite")
    .addEventListener("animationend", endGame);

  //Giv elementerne en random position
  let random = randomNumber(3);
  document.querySelector("#nun-container").classList.add("posistion" + rand);
  rand = randomNumber(3);
  document.querySelector("#priest-container2").classList.add("position" + rand);
  rand = randomNumber(3);
  document.querySelector("#pope-container3").classList.add("position" + rand);
  rand = randomNumber(3);

  document.querySelector("#nun-container").addEventListener("mousedown");
  document.querySelector("#priest-container").addEventListener("mousedown");
  document.querySelector("#pope-container").addEventListener("mousedown");
  document.querySelector("#nun-scare-container").addEventListener("mousedown");
}
