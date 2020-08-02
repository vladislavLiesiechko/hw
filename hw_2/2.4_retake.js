
let firstNumber = +prompt("Введите первое число", 10);
let secondNumber = +prompt("Введите второе число", 5);

if (firstNumber > secondNumber) {
  alert("Первое число больше");
}
else if((firstNumber < secondNumber)){
 alert("Второе число больше");
}
else{
  alert("Числа равны");
}

// (firstNumber > secondNumber && alert("Первое число больше")) ||
//   (firstNumber < secondNumber && alert("Второе число больше")) ||
//   (firstNumber === secondNumber && alert("Числа равны"));
