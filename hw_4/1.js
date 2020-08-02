"use strict"


function getAreaRound(radius) {
    return Math.round(Math.PI * radius**2);
}

let result = getAreaRound(12);

console.log(result);

