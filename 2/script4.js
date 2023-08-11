'use strict';

// Получение числа от пользователя
function getNumberFromUser(promptText) {
    let input = prompt(promptText);
    let number = parseInt(input);
    return number;
}

let userInput = getNumberFromUser('Введите целое число:');

let hundreds = Math.floor(userInput / 100);      // Количество сотен
let tens = Math.floor((userInput % 100) / 10);   // Количество десятков
let ones = userInput % 10;                       // Количество единиц

console.log('В числе ' + userInput + ' количество сотен: ' + hundreds + ', десятков: ' + tens + ', единиц: ' + ones);