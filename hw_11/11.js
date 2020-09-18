"use strict"
const wrapper = document.querySelector("#wrapper");
if (wrapper !== null) {
    const list = createList();
    const form = createForm((value) => {
        const li = createListItem({ text: value });
        list.appendChild(li);
    });

    wrapper.appendChild(form);
    wrapper.appendChild(list);
}

function createForm(onAdd) {
    const container = document.createElement("div");
    container.className = "form";
    const okButton = createButton({
        text: "OK",
        className: "primary",
        disabled: true
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
        text: "Delete",
        className: "delete-btn"
    });

    element.appendChild(deleteBtn);

    deleteBtn.addEventListener("click", () => {
        text = confirm("Are you sure?!");
        if (text === true) {
            element.remove();
        } else {
            return;
        }
    });

    const editBtn = createButton({
        text: "Edit",
        className: "edit-btn",
    });
    element.appendChild(editBtn);

    editBtn.addEventListener("click", () => {
        text = prompt("Edit, Please");
        element.innerHTML = text;
        element.appendChild(deleteBtn);
        element.appendChild(editBtn);
    });
    return element;
}




