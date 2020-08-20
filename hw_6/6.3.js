"use strict"

function mySome(arr, callback) {
    for (let item = 0; item < arr.length; item++) {
        let a = callback(arr[item]);
        if (a) {
            return true;
        }
    }
    return false;
}


function callback (item) {
    return item === 5;
}

let newArray = [2, 5, 1];
let a  = mySome(newArray, callback);
console.log(a);
