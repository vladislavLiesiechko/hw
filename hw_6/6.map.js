"use strict"


function myMap(array, callback) {
    let newArray = [];
   for (let item = 0; item < array.length; item++) {
      let a = callback(array[item]);
      newArray.push(a);

    }
    console.log(newArray);


}

function callback(item) {
    return item + 10;
}


    let MyArray = [2, 5, 1, 0 , 36 ,9, 7];
myMap(MyArray, callback);


