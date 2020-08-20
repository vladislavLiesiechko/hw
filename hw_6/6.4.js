"use strict"

function mySome(arr, callback) {
    for (let item = 0; item < arr.length; item++) {

        if (callback(arr[item])) {
            return true;
        }
    }
    return false;
}


function callback (item) {
    return item === 5;
}

let newArray = [2, 5, 1];
let call  = mySome(newArray, callback);
console.log(call);
