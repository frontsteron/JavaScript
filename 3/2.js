"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function calculateSalary() {
    let inputElement = document.getElementById('numberInput');
    let inputValue = parseFloat(inputElement.value);

    if (!isNaN(inputValue)) {
        let netSalary = calculateNetSalary(inputValue);
        console.log('Размер заработной платы за вычетом налогов равен ' + netSalary);
    } else {
        console.log('Значение задано неверно');
    }
}

function calculateNetSalary(salary) {
    let taxPercentage = 13;
    let netSalary = salary * (1 - taxPercentage / 100);
    return netSalary;
}