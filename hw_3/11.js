"use strict"

let num=Math.floor(Math.random() * 11);
console.log(num);
let userNumber;
do {
    userNumber = +prompt("Введите число от 0 до 10" );
} while (userNumber!==num);