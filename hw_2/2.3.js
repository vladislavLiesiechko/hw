let fiveDigitNumber = +prompt("Введите пятизначное число");

if (fiveDigitNumber < 10000) {
  alert("Вы ввели число меньше 10000, повторите попытку");
} else {
  let firstNumber = fiveDigitNumber % 10;
  let secondNumber = ((fiveDigitNumber % 100) - firstNumber) / 10;
  let thirdNumber =
    ((fiveDigitNumber % 1000) - firstNumber - secondNumber * 10) / 100;
  let fourthNumber =
    ((fiveDigitNumber % 10000) -
      firstNumber -
      secondNumber * 10 -
      thirdNumber * 100) /
    1000;
  let fifthNumber = (fiveDigitNumber % 100000-firstNumber -secondNumber * 10 -thirdNumber * 100- fourthNumber*1000)/10000;

  alert(
    ` ${fifthNumber}, ${fourthNumber}, ${thirdNumber}, ${secondNumber}, ${firstNumber}`
  );
}
