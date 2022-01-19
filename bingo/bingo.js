/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
// Key variables for the game
let turnCounter = 0;
let foundLine = false;
let win = false;
let cardSize = 4;
let bingoBall; // This is the "ball" that contains the number
const bingoCard = {};
let userCardAnswer = "yes";
let poolNumbers = [];
const players = [
  { Name: "Giorno", Score: 900 },
  { Name: "GianMarco", Score: 430 },
  { Name: "Papapu", Score: 420 },
  { Name: "Stevan", Score: 324 },
];
const resetPoolNumber = () => {
  const tempPool = [];
  for (let i = 0; i < 90; i++) {
    tempPool[i] = i + 1;
  }
  poolNumbers = tempPool;
}; // end function
resetPoolNumber(); // I start creating pool of Numbers
// A lot of functions....
function createBingoCardBoard() {
  const tempBoard = [];
  for (let j = 0; j < cardSize; j++) {
    tempBoard[j] = [];
    for (let i = 0; i < cardSize; i++) {
      const indexHolder = randomIndexPoolNumbers();
      tempBoard[j][i] = poolNumbers[indexHolder];
      poolNumbers.splice(indexHolder, 1);
    } // end for1
  } // end for2                                                 //I need to reset the Pool of Numbers
  bingoCard.board = tempBoard; // because when i create a new bingo card
  resetPoolNumber(); // I take the elements from there
} // end function
function randomIndexPoolNumbers() {
  // This number its the index of the poolNumbers
  return parseInt(Math.random() * poolNumbers.length, 10);
} // end function

const generateBall = () => {
  const indexHolder = randomIndexPoolNumbers(); // This variable hold the random Index to
  bingoBall = poolNumbers[indexHolder]; // Find the number in the pool of Numbers and to
  poolNumbers.splice(indexHolder, 1); // Delete the number from the pool of Numbers
  console.log(`Number ${bingoBall} someone has the number ${bingoBall}?`);
}; // end function

const checkBallinBingoCard = () => {
  // Checks the ball in the board
  for (let i = 0; i < cardSize; i++) {
    for (let j = 0; j < cardSize; j++) {
      if (bingoCard.board[i][j] === bingoBall) {
        bingoCard.board[i][j] = "x"; // And places and x if founded
      }
    }
  }
  console.table(bingoCard.board); // Feedback to the user
}; // end function

const scoreGenerator = () => {
  const Score = parseInt(1000 / turnCounter, 10);
  players.push({ Name, Score });
  console.table(players);
}; // end function

const checkLineinBingoCard = () => {
  let isBingo = true;
  for (let i = 0; i < cardSize; i++) {
    let isRowFull = true; // checks for a vertical line
    let isColumnFull = true; // checks for an horizontal line
    for (let j = 0; j < cardSize; j++) {
      isRowFull = isRowFull && bingoCard.board[i][j] === "x";
      isColumnFull = isColumnFull && bingoCard.board[j][i] === "x";
      isBingo = isBingo && bingoCard.board[i][j] === "x";
    }
    if (isRowFull && !foundLine) {
      foundLine = true;
      console.log("Ⓗⓞⓡⓘⓩⓞⓝⓣⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓗⓞⓡⓘⓩⓞⓝⓣⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓗⓞⓡⓘⓩⓞⓝⓣⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓗⓞⓡⓘⓩⓞⓝⓣⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓗⓞⓡⓘⓩⓞⓝⓣⓐⓛ ⓛⓘⓝⓔ");
    }
    if (isColumnFull && !foundLine) {
      foundLine = true;
      console.log("Ⓥⓔⓡⓣⓘⓒⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓥⓔⓡⓣⓘⓒⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓥⓔⓡⓣⓘⓒⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓥⓔⓡⓣⓘⓒⓐⓛ ⓛⓘⓝⓔ");
      console.log("Ⓥⓔⓡⓣⓘⓒⓐⓛ ⓛⓘⓝⓔ");
    }
  }
  if (isBingo) {
    win = true;
    scoreGenerator();
    console.log("🅱🅸🅽🅶🅾");
    console.log("🅱🅸🅽🅶🅾");
    console.log("🅱🅸🅽🅶🅾");
    console.log("🅱🅸🅽🅶🅾");
    console.log("🅱🅸🅽🅶🅾");
  }
}; // end function
const offerCard = () => {
  // This is a recursive function that keeps offering a card until you are happy
  cardSize = window.prompt("How Big you want your card (0-9)?", 4);
  createBingoCardBoard();
  console.table(bingoCard.board); // Shows to the user the new created Bingo card
  userCardAnswer = window.prompt("Are you happy with this card?", "yes");
  if (userCardAnswer === "yes") {
    window.alert("LETSS PLAY");
    while (confirm("Here comes the ball......") && !win) {
      turnCounter++;
      console.log(`Turn: ${turnCounter}`);
      generateBall();
      checkBallinBingoCard();
      checkLineinBingoCard();
    }
  } else {
    offerCard(); // Recursion lol
  }
}; // end function
// Main routine for the user
let Name = window.prompt("Wanna play some bingo? Mr. or Ms...", "Charlie");
window.alert(
  "Everyone starts with 1000 point but the more you take to complete your card the less points you have"
);
offerCard();
console.log("Thanks for playing");
