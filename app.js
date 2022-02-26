/** @format */

// let body = document.querySelector('body')

// body.style.backgroundColor = 'yellow'

// let player = document.querySelector('p')

// player.innerText = 'player3'

// let randomNumber = Math.ceil(Math.random() * 6);

// // console.log(randomNumber);

// let randomDiceImage = "dice" + randomNumber + ".png";

// let randomImageSource = "images/" + randomDiceImage;

// let images = document.querySelectorAll("img")[0];

// images.setAttribute("src", randomImageSource);

// // player 2

// let randomNumber2 = Math.ceil(Math.random() * 6);

// let randomDiceImage2 = "dice" + randomNumber2 + ".png";

// let randomImageSource2 = "images/" + randomDiceImage2;

// let images2 = document.querySelectorAll("img")[1];

// images2.setAttribute("src", randomImageSource2);

// ==============assignment 1

let btn = document.querySelector(".btn");

function RollDice() {
  let randomNumber = Math.ceil(Math.random() * 6);

  // console.log(randomNumber);

  let randomDiceImage = "dice" + randomNumber + ".png";

  let randomImageSource = "images/" + randomDiceImage;

  let images = document.querySelectorAll("img")[0];

  images.setAttribute("src", randomImageSource);

  let randomNumber2 = Math.ceil(Math.random() * 6);

  let randomDiceImage2 = "dice" + randomNumber2 + ".png";

  let randomImageSource2 = "images/" + randomDiceImage2;

  let images2 = document.querySelectorAll("img")[1];

  images2.setAttribute("src", randomImageSource2);

  let h11 = document.querySelector(".h11");

  if (randomNumber > randomNumber2) {
    console.log(h11);
    h11.innerText = "Player 1 Wins 🏆";
  } else if (randomNumber === randomNumber2) {
    console.log(h11);
    h11.innerText = "Its a Tie 👥";
  } else {
    console.log(h11);
    h11.innerText = "Player 2 Wins 🏆";
  }
}

RollDice();

btn.addEventListener("click", RollDice);

// ===========assignment 2

// let h11 = document.querySelector(".h11");

// if (randomNumber > randomNumber2) {
//   console.log(h11);
//   h11.innerText = "Player 1 Wins 🏆";
// } else if (randomNumber === randomNumber2) {
//   console.log(h11);
//   h11.innerText = "Its a Tie 👥";
// } else {
//   console.log(h11);
//   h11.innerText = "Player 2 Wins 🏆";
// }

// document.querySelector("h1").style.color = 'yellow'

let spoon = document.querySelector(".spoon");

spoon.innerText = "mariam";
