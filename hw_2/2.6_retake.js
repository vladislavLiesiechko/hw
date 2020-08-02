let userAge = +prompt("Введите свой возраст");
let result = confirm("Алкоголь употребляем?");



// if (userAge > 40) {
//   alert("Не злоупотребляйте");
// } else if (userAge < 18) {
//   alert("Ты что?! Маме расскажу!");
// }
// else if(result===false){
//   alert("Молодец!")
// }
// else if(40 18) {
//   alert("Только водку с пивом не мешай!");
// }


 if(result === true){
  if(userAge < 18){
    alert("Ты что?! Маме расскажу!");
  }
  else if (userAge <= 40){
    alert("Только водку с пивом не мешай!");
  }
  else if(userAge > 40){
    alert("Не злоупотребляйте");
  }
}
 else if(result === false){
   alert("Так держать!");
 }