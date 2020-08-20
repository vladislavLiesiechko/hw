'use strict'


function myFilter(array, callback) {
    let newArray = [];
    for (let item = 0; item < array.length; item++) {
         let a = callback(array[item]);
          if(a){
               newArray.push(a);
           }
    }
    console.log(newArray);
}
function callback(item) {
           return item > 10;
}

let MyArray = [2, 5, 1, 36 ,12, 15];

myFilter(MyArray, callback);

