'use strict'

let usersAge = {
    Alex:"15yo",
    Ben:"23yo",
    John:"18yo",
    Andrew:"18yo"
}

function copy(origin,target) {
    for (let objectKey in origin) {
        target[objectKey]= origin[objectKey];
    }
    return target;
}
let newUsersObj ={};
console.log(copy(usersAge, newUsersObj));

