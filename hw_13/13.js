"use strict"

const notEmailSymbols = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const notPasswordSymbols = /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/iu;


const errorEmail = document.querySelector(".emailIsWrong");
const errorPassword = document.querySelector(".passIsWrong");
const inputEmail = document.querySelectorAll('input')[0];
const inputPassword = document.querySelectorAll('input')[1];

function isInput(element) {
    return element instanceof HTMLInputElement;
}

const form = document.querySelector("form");
const submit = document.querySelector('button');
submit.disabled = true;
form.addEventListener("submit", event => {
    event.preventDefault();

    const result = Array.from(form.elements).filter(element => isInput(element)).reduce((acc, element) => {
        const name = element.name;
        const value = element.type === "checkbox" ? element.checked : element.value;
        acc[name] = value;
        return acc;
    }, {});

    const customEvent = new CustomEvent("myFormCompleted", {detail: result});
    document.dispatchEvent(customEvent);

    submit.disabled = true;
    errorPassword.innerHTML="";
    errorEmail.innerHTML="";
    form.reset();
});


document.addEventListener("myFormCompleted", event => {
    console.log("myFormCompleted event", event.detail);
})


const email = document.querySelector("form input[type=\"text\"]");




email.addEventListener("blur", () => {
    if (notEmailSymbols.test(email.value) === false) {
        errorEmail.innerHTML = `wrong`;
        submit.disabled = true;
        inputEmail.focus();
    } else {
        errorEmail.innerHTML = `good`;
    }

});

const password = document.querySelector("form input[type=\"password\"]");

password.addEventListener("blur", () => {
    if (notPasswordSymbols.test(password.value) === false) {
        errorPassword.innerHTML = `wrong`;
        submit.disabled = true;
        inputPassword.focus();
    } else {
        errorPassword.innerHTML = `good`;
    }

});


document.addEventListener("click", (event) => {
    if ( (notPasswordSymbols.test(password.value) === true)&&(notEmailSymbols.test(email.value) === true) ) {
        submit.disabled = false;
    }
});







