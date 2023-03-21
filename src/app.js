/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  generateNumber();
};

function randomNumber() {
  let random = Math.floor(Math.random() * 13) + 1;
  console.log(random);
  return random;
}

function generateNumber() {
  let number = document.getElementById("number");
  let createdNumber = randomNumber();
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
