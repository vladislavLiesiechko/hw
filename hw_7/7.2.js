let usersAge1 = {
    Alex:"15yo",
    Ben:"23yo",
    John:"18yo",
    Andrew:"18yo"
};

let usersAge2 = {
    Alex:"15yo",
    Ben:"23yo",
    John:"18yo",
    Andrew:"18yo"
};




function compareObjects(firstObject, secondObject) {
    if (Object.keys(firstObject).length !==  Object.keys(secondObject).length) {
        return false;
    }

    for (let objKey of Object.keys(firstObject)) {
        if (firstObject[objKey] !== secondObject[objKey]) {
            return false;
        }
    }

    return true;
}
console.log(compareObjects(usersAge1, usersAge2));