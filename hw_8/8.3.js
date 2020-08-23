"use strict"

function getNumberOfEven(n) {
    let result = 0;
    n = String(n);
    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 === 0){
            result++;
        }
    }
    return result;
}

console.log(getNumberOfEven(223344));
console.log(getNumberOfEven(111));

