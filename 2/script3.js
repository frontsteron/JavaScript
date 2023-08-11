'use strict';

// Получение числа от пользователя
function getNumberFromUser(promptText) {
    let input = prompt(promptText);
    let number = parseInt(input);
    if (isNaN(number)) {
        console.log('Неверное значение');
        return null;
    }
    return number;
}

let dayNumber = getNumberFromUser('Введите целое число в интервале [1, 32):');

if (dayNumber !== null && dayNumber >= 1 && dayNumber < 32) {
    let decade = Math.ceil(dayNumber / 10); // Определение декады
    console.log('Число ' + dayNumber + ' попадает в ' + decade + ' декаду месяца.');
} else {
    console.log('Неверное значение');
}
