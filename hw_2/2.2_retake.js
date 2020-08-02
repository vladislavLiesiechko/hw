let firstNumber = +prompt("Введите первое число");
let secondNumber = +prompt("Введите второе число");
let thirdNumber = +prompt("Введите третье число");
let sumNumber = firstNumber + secondNumber + thirdNumber;
let numAverage = sumNumber / 3;

alert(`Сумма ваших чисел ${sumNumber}, среднее арифметическое чисел ${numAverage}`);

let firstRemainder = firstNumber % 2;
let secondRemainder = secondNumber % 2;
let thirdRemainder = thirdNumber % 2;

if(!firstRemainder === true){
    alert("Первое число четное");
}else if(!firstRemainder === false){
    alert("Первое число нечетное");
}
if(!secondRemainder === true){
    alert("Первое число четное");
}else if(!secondRemainder === false){
    alert("Первое число нечетное");
}
if(!thirdRemainder === true){
    alert("Первое число четное");
}else if(!thirdRemainder === false){
    alert("Первое число нечетное");
}


