"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

'use strict';

function findMax() {
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);
    let number3 = parseFloat(document.getElementById('number3').value);

    let maxNumber = Math.max(number1, number2, number3);
    console.log('Максимальное значение среди чисел ' + number1 + ', ' + number2 + ', ' + number3 + ' равно ' + maxNumber + '.');
}
