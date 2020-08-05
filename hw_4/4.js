"use strict"

function calc(x, y, action) {
    switch (action) {
        case "+":
            return (x + y) ;
            break;
        case "-":
            return (x - y);
            break;
        case "*":
            return (x * y);
            break;
        case "/":
            return (x / y);
            break;
        case "%":
            return (x % y);
            break;
        case "^":
            return (x ** y);
            break;
    }
}

calc(12,2, "*");




//function calc(x, y, action) {
//    let userOperation = prompt("Choose action(+; -; *; /)")
//     if(userOperation === "+"){
//         let actionPlus = +(x+y);
//         return actionPlus;
//     }
//     else if(userOperation === "-"){
//         let actionMinus = x-y;
//         return actionMinus;
//     }
//     else if(userOperation === "*"){
//         let actionDivide = x*y;
//         return actionDivide;
//     }
//     else if(userOperation === "/"){
//         let actionMultiply = x/y;
//         return actionMultiply;
//     }
// }
