'use strict'

const wrapper = document.querySelector("#wrapper");
if (wrapper !== null) {
    const list = createList();
        getLocal().forEach(item => {
                const li = createListItem({text: item});
                list.appendChild(li);
            }
        );
    const form = createForm((value) => {
        const li = createListItem({text: value});
        list.appendChild(li);
    });

    wrapper.appendChild(form);
    wrapper.appendChild(list);
}

function saveLocal() {
    const items = document.querySelectorAll(" li");
    const users = Array.from(items).map(item => item.innerText);
    const usersJson = JSON.stringify(users);
    localStorage.setItem('usersNames', usersJson);
}

const usersUl = document.querySelectorAll(" li");
const usersArray = Array.from(usersUl).map(item => item.innerText);
const userArrayJson = JSON.stringify(usersArray);
localStorage.setItem('usersNames', userArrayJson);

function createForm(onAdd) {
    const container = document.createElement("div");
    container.className = "form";
    const okButton = createButton({
        text: "OK",
        className: "primary",
        disabled: true,
    });

    const input = createInput({
        placeholder: "Enter text"
    });

    okButton.addEventListener("click", () => {
        if (typeof onAdd === "function") {
            onAdd(input.value);
            input.value = "";
            okButton.disabled = true;
            input.focus();
            saveLocal();

        }
    });


    input.addEventListener("input", (event) => {
        const value = event.target.value;
        okButton.disabled = value === "";
    });

    container.appendChild(input);
    container.appendChild(okButton);

    return container;
}

function createButton(props) {
    const text = props.text || "";
    const className = props.className || "";
    const disabled = props.disabled || false;

    const button = document.createElement("button");

    button.type = "button";
    button.innerHTML = text;
    button.className = className;
    button.disabled = disabled;

    return button;
}

function createInput(props) {
    const placeholder = props.placeholder || "";

    const input = document.createElement("input");
    input.placeholder = placeholder;

    return input;
}

function createList() {
    return document.createElement("ul");
}

function createListItem(props) {
    let text = props.text || "";

    const element = document.createElement("li");
    element.innerHTML = text;


    const deleteBtn = createButton({
        className: "delete-btn",
    });

    element.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        const text = confirm("Are you sure?!");
        localStorage.clear();
        if (text === true) {
            element.remove();
            saveLocal();
        }
    });

    return element;
}

function getLocal() {
    return JSON.parse(localStorage.getItem('usersNames'));
}