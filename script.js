'use strict';

const result = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        result.innerText += value;

        console.log(value);


    })
})

const add = function (a, b) {
    return a + b;
};

const subtract = function (a, b) {
    return a - b;
};

const multiply = function (a, b) {
    return a * b;
};

const divide = function (a, b) {
    return a / b;
};



const operate = function (operator, int1, int2) {


};






// Event listener -> avoid dragging the display result
result.addEventListener('dragstart', (e) => e.preventDefault());