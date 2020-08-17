"use strict"


function mySome(array, callback) {
    for (let item = 0; item < array.length; item++) {
        callback(array[item]);

    }
}

function callback(item) {

        if(item % 2 !== 0) {
            console.log(false);
        }

}
let arr = [10,41,3 ,2];

mySome(arr, callback);

