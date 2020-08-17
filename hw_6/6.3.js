'use strict'


function myFilter(array, callback) {
    for (let item = 0; item < array.length; item++) {

        callback(array[item]);

    }
    console.log(arr);

}
let arr = new Array();



function callback(item) {
if(item % 2 === 0) {
    arr.push(item);
}

}

let MyArray = [2, 5, 1, 0 , 36 ,9];

myFilter(MyArray, callback);



