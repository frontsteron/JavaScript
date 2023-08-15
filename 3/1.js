"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

// Функция для возвведения числа в куб

// Функция для возвведения числа в куб
function cube(number) {
    return number ** 3;
}

function calculateCube() {
    let inputElement = document.getElementById('numberInput');
    let resultElement = document.getElementById('result');

    let inputNumber = parseFloat(inputElement.value);
    
    if (!isNaN(inputNumber)) {
        let result = cube(inputNumber);
        resultElement.textContent = 'Число ' + inputNumber + ' в кубе равно ' + result;
    } else {
        resultElement.textContent = 'Пожалуйста, введите корректное число.';
    }
}
