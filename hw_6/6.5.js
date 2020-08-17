"use strict"


function myEvery(array, callback) {
    for (let item = 0; item < array.length; item++) {
        callback(array[item]);
    }
}

function callback(item) {

    if(item > 0) {
        console.log(true);
    }


}
let arr = [-1, -10, 10, -12, -36 ,-5];

myEvery(arr, callback);


