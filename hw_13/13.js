"use strict"

const notEmailSymbols = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;


const errorEmail = document.querySelector(".emailIsWrong");
const errorPassword = document.querySelector(".passIsWrong");


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
});


document.addEventListener("myFormCompleted", event => {
    console.log("myFormCompleted event", event.detail);
})


const email = document.querySelector("form input[type=\"text\"]");
const password = document.querySelector("form input[type=\"password\"]");

email.addEventListener("blur", () => {
        if (notEmailSymbols.test(email.value) === false) {
            errorEmail.innerHTML = `wrong`;
            submit.disabled = true;
        } else {
            errorEmail.innerHTML = `good`;
        }


    });
password.addEventListener("blur", () => {
        if (notEmailSymbols.test(password.value) === false) {
            errorPassword.innerHTML = `wrong`;
            submit.disabled = true;
        } else {
            errorPassword.innerHTML = `good`;
        }

    });




