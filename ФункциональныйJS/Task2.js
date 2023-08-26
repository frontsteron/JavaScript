﻿// Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
   let count = 0;
 
   return {
     increment: () => {
       count++;
     },
     decrement: () => {
       count--;
     },
     getCount: () => {
       return count;
     }
   };
 }
 
 const counter = createCounter();
 counter.increment();
 counter.increment();
 counter.decrement();
 console.log(counter.getCount()); // Вывод: 1 