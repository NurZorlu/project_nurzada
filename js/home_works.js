// GMAIl block
const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[\w+\._-]+@gmail\.com$/;

gmailButton.onclick = () => {
  if (regExp.test(gmailInput.value)) {
    gmailResult.innerHTML = "OK";
    gmailResult.style.color = "green";
  } else {
    gmailResult.innerHTML = "NOT OK";
    gmailResult.style.color = "red";
  }
};

// Move block
const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let numX = 0;
let numY = 0;
let position = "right";

let move = () => {
  if (position === "right" && numX < 448) {
    numX++;
    childBlock.style.left = `${numX}px`;
  } else if (position === "right" && numX === 448) {
    position = "down";
  } else if (position === "down" && numY < 448) {
    numY++;
    childBlock.style.top = `${numY}px`;
  } else if (position === "down" && numY === 448) {
    position = "left";
  } else if (position === "left" && numX > 0) {
    numX--;
    childBlock.style.left = `${numX}px`;
  } else if (position === "left" && numX === 0) {
    position = "up";
  } else if (position === "up" && numY > 0) {
    numY--;
    childBlock.style.top = `${numY}px`;
  } else {
    position = "right";
  }

  setTimeout(move, 2);
};

move();

// Stop Watch
const minutes = document.querySelector("#minutes");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const resetBtn = document.querySelector("#reset");

let time = 0;
let counting = false;

function everySecond() {
  time++;
  minutes.textContent = time;
}

let interval;

function start() {
  if (!counting) {
    interval = setInterval(everySecond, 1000);
    counting = true;
  }
}
startBtn.addEventListener("click", start);

function stop() {
  if (counting) {
    clearInterval(interval);
    counting = false;
  }
}

stopBtn.addEventListener("click", stop);

function reset() {
  stop();
  time = 0;
  minutes.textContent = time;
}

resetBtn.addEventListener("click", reset);
