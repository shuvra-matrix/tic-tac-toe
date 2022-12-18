let mainSection = document.querySelector(".main-section");
let player1 = true;
let space = document.querySelectorAll(".space");
let oneEle = document.querySelectorAll(".line-one");
let twoEle = document.querySelectorAll(".line-two");
let winner_section = document.querySelector(".winner");
let threeEle = document.querySelectorAll(".line-three");
let winnerName = document.querySelector("h1");
let one = [];
let two = [];
let three = [];

function listofentry() {
  one = [oneEle[0].textContent, oneEle[1].textContent, oneEle[2].textContent];
  two = [twoEle[0].textContent, twoEle[1].textContent, twoEle[2].textContent];
  three = [
    threeEle[0].textContent,
    threeEle[1].textContent,
    threeEle[2].textContent,
  ];
}

function winnerSelect(message) {
  mainSection.classList.add("hidden");
  winner_section.classList.remove("hidden");
  winnerName.textContent = message;
}

function winCheck() {
  if (
    (one[0] === "0" && one[1] === "0" && one[2] === "0") ||
    (two[0] === "0" && two[1] === "0" && two[2] === "0") ||
    (three[0] === "0" && three[1] === "0" && three[2] === "0") ||
    (one[0] === "0" && two[0] === "0" && three[0] === "0") ||
    (one[1] === "0" && two[1] === "0" && three[1] === "0") ||
    (one[2] === "0" && two[2] === "0" && three[2] === "0") ||
    (one[0] === "0" && two[1] === "0" && three[2] === "0") ||
    (one[2] === "0" && two[1] === "0" && three[0] === "0")
  ) {
    winnerSelect("Player One Winner");
  } else if (
    (one[0] === "×" && one[1] === "×" && one[2] === "×") ||
    (two[0] === "×" && two[1] === "×" && two[2] === "×") ||
    (three[0] === "×" && three[1] === "×" && three[2] === "×") ||
    (one[0] === "×" && two[0] === "×" && three[0] === "×") ||
    (one[1] === "×" && two[1] === "×" && three[1] === "×") ||
    (one[2] === "×" && two[2] === "×" && three[2] === "×") ||
    (one[0] === "×" && two[1] === "×" && three[2] === "×") ||
    (one[2] === "×" && two[1] === "×" && three[0] === "×")
  ) {
    winnerSelect("Player Two Winner");
  } else if (
    one[0] != "" &&
    one[1] != "" &&
    one[2] != "" &&
    two[0] != "" &&
    two[1] != "" &&
    two[2] != "" &&
    three[0] != "" &&
    three[1] != "" &&
    three[2] != ""
  ) {
    winnerSelect("Match Draw");
  }
}

function colorChange(color) {
  for (let i = 0; i < space.length; i++) {
    space[i].style.backgroundColor = color;
  }
}

function play(event) {
  if (event.target.textContent.length == 0) {
    if (player1) {
      event.target.textContent = "0";
      colorChange("#7743DB");
    } else {
      event.target.textContent = "×";
      colorChange("#FB2576");
    }
  }
  listofentry();
  console.log(three);
  if (one.length > 1) {
    winCheck();
  }
  player1 = !player1;
}

mainSection.addEventListener("click", play);
