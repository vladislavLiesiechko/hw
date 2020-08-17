"use strict"


function myMap(array, callback) {
   for (let item = 0; item < array.length; item++) {

      callback(array[item]);

    }
    console.log(arr);


}
let arr = new Array();



function callback(item) {

  arr.push(item+10);


}

let MyArray = [2, 5, 1, 0 , 36 ,9];

myMap(MyArray, callback);

