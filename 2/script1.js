"use strict";

// Получение числа от пользователя
function getNumberFromUser(promptText) {
  let input = prompt(promptText);
  let number = parseFloat(input);
  if (isNaN(number)) {
    console.log('Одно или более значений некорректно.');
    return null;
  }
  return number;
}

// Получаем положительное и отрицательное число от пользователя
let positive = getNumberFromUser('Введите положительное число: ');
let negative = getNumberFromUser('Введите отрицательное число: ');

// Проверяем, что пользователь ввел корректные значения
if (positive !== null && negative !== null && positive > 0 && negative < 0) {
  console.log('Все значения верные.');
} else {
  console.log('Одно или более значений некорректно.');
}