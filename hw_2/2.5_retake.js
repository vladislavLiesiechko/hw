let userNumber = +prompt("введите число");

// (userNumber % 2 === 0 && alert("Ваше число четное")) ||
//   (userNumber % 2 !== 0 && alert("Ваше число нечетное"));

if(userNumber % 2 === 0){
  alert("Ваше число четное");
}else if(userNumber % 2 !== 0 ){
  alert("Ваше число нечетное");
}

let numRemainder = userNumber % 10;
alert(`Ваше число заканивается на ${numRemainder}`);
