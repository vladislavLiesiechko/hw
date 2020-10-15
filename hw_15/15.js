"use strict"


function createFormat1() {

    let dateUnit = new Date();
    let hoursUnit = dateUnit.getHours();
    let minutesUnit = dateUnit.getMinutes();
    minutesUnit = minutesUnit < 10 ? '0' + minutesUnit : minutesUnit;
    let secondsUnit = dateUnit.getSeconds();
    secondsUnit = secondsUnit < 10 ? '0' + secondsUnit : secondsUnit;
    let clockDigits = `${hoursUnit}:${minutesUnit}:${secondsUnit}`;
    const div = document.createElement('div');
    return clockDigits;
}


function createFormat2() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let AmPm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    let clockDigits = `${hours}:${minutes}:${AmPm}`;
    return clockDigits;
}
createFormat1();
createFormat2();


const selection = document.querySelector('select');
const wrapper = document.querySelector('.wrapper');


console.log();
selection.addEventListener('change', ()=> setInterval(changeOption,100));


function changeOption() {


    if (selection.options[selection.selectedIndex].value === 'firstFormat') {
        wrapper.innerHTML = createFormat1();

    } else if (selection.options[selection.selectedIndex].value === 'secondFormat') {
        wrapper.innerHTML = createFormat2()

    }
}




