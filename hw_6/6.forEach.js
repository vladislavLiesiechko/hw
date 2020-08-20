"use strict"


function myForEach(array, callback) {
    for (let item = 0; item < array.length; item++) {
        callback(array[item]);
    }
}

function callback(item) {
    console.log(item)  ;

}

let arr = [2, 5, 1, 0 , 36 ,9];

let arr2 = myForEach(arr, callback);








