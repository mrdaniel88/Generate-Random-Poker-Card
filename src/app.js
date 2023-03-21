/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //console.log("Hello Rigo from the console!");
  generateNumber();
  randomSymbol();
};

// Reload page every 10 seconds. It can be disabled.
setTimeout(() => {
  document.location.reload();
}, 10000);

// Generate a random number
function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min)) + min;
  // console.log(random)
  return random;
}

const number = document.getElementById("number");

// Write the random number in the HTML
function generateNumber() {
  let createdNumber = randomNumber(1, 13);
  if (createdNumber == 1) {
    createdNumber = "A";
    number.innerHTML = createdNumber;
  } else if (createdNumber == 11) {
    createdNumber = "J";
    number.innerHTML = createdNumber;
  } else if (createdNumber == 12) {
    createdNumber = "Q";
    number.innerHTML = createdNumber;
  } else if (createdNumber == 13) {
    createdNumber = "K";
    number.innerHTML = createdNumber;
  } else {
    number.innerHTML = createdNumber;
  }
  //console.log(createdNumber);
}

// Write the symbol in the HTML and changes it's color if needed
function randomSymbol() {
  const symbol = document.getElementById("symbol");
  const symbolReversed = document.getElementById("symbol-reversed");
  let randomSymbol = randomNumber(1, 4);
  if (randomSymbol == 1) {
    randomSymbol = "♠";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
  if (randomSymbol == 2) {
    randomSymbol = "♣";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
  if (randomSymbol == 3) {
    randomSymbol = "♥";
    number.style.color = "red";
    symbol.style.color = "red";
    symbolReversed.style.color = "red";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
  if (randomSymbol == 4) {
    randomSymbol = "♦";
    number.style.color = "red";
    symbol.style.color = "red";
    symbolReversed.style.color = "red";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
}
