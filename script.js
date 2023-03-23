"use strict";
//---------------------access the elements class and id ------------
// console.log(document.querySelector('.message').textContent);
// //start reading doc
// // multiple dot operator exicute from left to right

// document.querySelector('.message').textContent ="Correct Number";
// // change it

// // accesing the elements and assign the values
// document.querySelector('.number').textContent=23;
// document.querySelector('.score').textContent=20;

// document.querySelector('.guess') .value=23;
// console.log(document.querySelector('.guess').value);

//------------------------------building game logic----
//math random to generate the number
// ()*20 to remove the floating number
// + 1 to boundary of 1 - 20

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// having a fuction to
//=======================================================================handling button================
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // When there is no input =============================================handle input=================
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No number!';
    displayMessage("⛔️ No number!");

    // When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    //===============================================manipulating css style===============================
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    // When guess is wrong or diffrent from random nu
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      displayMessage(guess > secretNumber ? "📈 Too high!" : "📉 Too low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
  //<----
  // checking for ans diffrent from random number
  // efficient way using litrals and turnary operator

  //normaal way (duplicate code)
  //here we checking the less than zero and greter than zero
  //--->

  // logic to each time we guess wrong score shuld be decrease
  // create variable for the score
  //and then increase or decrease it

  //   // When guess is too high
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When guess is too low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '💥 You lost the game!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

//============================reset btn (again)=============
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  ///======================re set the all values=============
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
