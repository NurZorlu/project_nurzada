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

let num = 0;

let count = () => {
  if (num < 448) {
    num++;
    childBlock.style.left = `${num}px`;
    setTimeout(count, 5);
  }
};
count();
