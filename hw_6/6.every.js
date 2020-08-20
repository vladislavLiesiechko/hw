"use strict"


function myEvery(arr, callback) {
    for (let item = 0; item < arr.length; item++) {
        if (callback(arr[item])) {
            return false;
        }
    }
    return true;
}


function callback (item) {
    return item === "Andrew";
}

let newArray = ["John", "Alex", "Andrew"];
let call  = myEvery(newArray, callback);
console.log(call);

