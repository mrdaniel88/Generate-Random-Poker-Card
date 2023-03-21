// /* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateNumber();
  randomSymbol();
};

function randomNumber(min, max) {
  let random = Math.floor(Math.random() * (max - min)) + min;
  console.log(random);
  return random;
}

function generateNumber() {
  let number = document.getElementById("number");
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
  console.log(createdNumber);
}

function randomSymbol() {
  let symbol = document.getElementById("symbol");
  let symbolReversed = document.getElementById("symbol-reversed");
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
    symbol.style.color = "red";
    symbolReversed.style.color = "red";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
  if (randomSymbol == 4) {
    randomSymbol = "♦";
    symbol.style.color = "red";
    symbolReversed.style.color = "red";
    symbol.innerHTML = randomSymbol;
    symbolReversed.innerHTML = randomSymbol;
  }
}

// function numberGenerator() {
//   const seccion = document.querySelector("h5");
//   const parrafito = document.createElement("p");
//   let numerote = rNG(1, 10);
//   parrafito.textContent = numerote;
//   seccion.appendChild(parrafito);
//   const text = document.createTextNode(numerote);
//   const linkPara = document.querySelector("p");
//   // linkPara.appendChild(text);
//   console.log(text);
// }
