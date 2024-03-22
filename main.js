"use strict";
//STARTING WITH NAME OF ALLAH
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1. Computer Will generate a random number.
// 2. User input for guessing number.
// 3. Compare user input with computer generated number and show result.
var randomNumber = Math.floor(Math.random() * 9 + 1);
console.log("Welcome to number Guesing Game");
var answers = await inquirer_1.default.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-9: ",
    },
]);
if (answers.userGuessedNumber === randomNumber) {
    console.log("Congtratulations! you guessed right number.");
}
else {
    console.log("You guessed wrong number");
}
