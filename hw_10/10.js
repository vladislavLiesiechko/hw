"use strict"

const button = document.querySelector(".button");
const wrapper = document.querySelectorAll("#wrapper *");
const paragraphs = document.querySelectorAll("#wrapper p");
const spans =  document.querySelectorAll("#wrapper span");

function wrapperLength(object) {
    return object.length;
}

function getNumber(wrapper) {
    let num = 0;
    for (let i = 0; i < wrapper.length; i++){
        let element = wrapper[i].innerText;

        if(isNaN(element)){
            num++;
        }
    }
    return (num) ;
}


function getString(wrapper) {
    let str = 0;
    for (let i = 0; i < wrapper.length; i++){
        let element = wrapper[i].innerText;

        if(!isNaN(element)){
            str++;
        }
    }
    return (str);
}

const SelectorsCount = wrapperLength(wrapper);
const paragraphsCount = paragraphs.length;
const spanCount = spans.length;
const numberCount = getNumber(wrapper);
const stringCount = getString(wrapper);


function getInfo() {
    const result = document.querySelector ("#result");
    result.innerText = `
        Общее кол-во всех тегов разных типов внутри wrapper ${SelectorsCount}
        Кол-во тегов типа p внутри wrapper ${paragraphsCount}
        Кол-во тегов типа span внутри wrapper ${spanCount}
        Кол-во тегов, в которых содержимое - число ${numberCount}
        Кол-во тегов, в которых содержимое - строка ${stringCount}
    `;
}


if(button !== null){
    button.addEventListener( "click", getInfo);

}

