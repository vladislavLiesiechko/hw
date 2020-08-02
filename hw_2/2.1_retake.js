let userName = prompt("Как тебя зовут?");
let userYear = prompt("Какого ты года рождения?");

if (userName === null) {
  alert("Вы не ввели имя, повторите попытку");
} else if (userYear === null) {
  alert("Вы не ввели год рождения, повторите попытку");
} else {
  let userResult = Number(userYear);
  let userAge = 2020 - userYear;
  alert(userName + " " + userAge);
}
