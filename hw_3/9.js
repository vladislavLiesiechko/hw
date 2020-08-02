"use strict"


let sum = 0;
let number = 42;
for (let i = 1; i <= number; i++) {
    if (number % i == 0 || number ==! number || number ==! 1) {
        console.log(i);
        sum += i;
    }
}
console.log( `Сумма делителей ${sum}` );