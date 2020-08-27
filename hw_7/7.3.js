'use strict'

let letters = "aabbccdd";

function numberOfLetters(str) {
    let newObj = {};
    for (let i = 0; i < str.length; i++) {
        let a = str[i];
        newObj[a] = newObj[a] ? newObj[a] + 1 : 1;
    }
    return newObj;
}
console.log(numberOfLetters(letters));
