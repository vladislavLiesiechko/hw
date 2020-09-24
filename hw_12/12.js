'use strict'
//// 1,2 task
const wrapper = document.querySelector(".wrapper");


function createSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    return square;
}

const colors = ["blue", "green", "yellow",];

function changeSquareColor(square) {
    let colorIndex = 0;
    square.style.backgroundColor = colors[colorIndex];
    square.addEventListener("click", () => {
        colorIndex = colorIndex + 1 === colors.length ? 0 : colorIndex + 1;
        square.style.backgroundColor = colors[colorIndex];
    });
}

function squareEvent(square) {
    let index = 0;
    square.innerHTML = `${index}`;
    square.addEventListener('click', () => {
        index++;
        square.innerHTML = `${index}`;
    })
}

for (let i = 0; i < 5; i++) {
    const squareElement = createSquare();
    const resultSquare = squareEvent(squareElement);
    const colorSquare = changeSquareColor(squareElement);
    wrapper.appendChild(squareElement);
}

// 3 task
createList();


function createList() {
    let ul = document.createElement('ul');
    ul.classList.add('list');

    const usersArray = ['Alex', 'Robert', 'Andrew', 'John'];

    wrapper.appendChild(ul);

    usersArray.forEach(createElementList);

    function createElementList(element, index, arr) {
        const li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = li.innerHTML + element;

        wrapper.querySelector('.list').addEventListener('click', (event)=> {
            let click = wrapper.querySelector(' .click');
            if (click) {
                click.classList.remove('click');
            }
            event.target.classList.add('click');
        });
    }

}




