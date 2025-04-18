'use strict';

const result = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

const number1 = 0;
const number2 = 0;
const operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        result.innerText += value;




    })
})

//////////////// Functions math operators /////////////////////////////

const add = function (int1, int2) {
    return parseInt(int1) + parseInt(int2);
};

const subtract = function (int1, int2) {
    return parseInt(int1) - parseInt(int2);
};

const multiply = function (int1, int2) {
    return parseInt(int1) * parseInt(int2);
};

const divide = function (int1, int2) {
    return parseInt(int1) / parseInt(int2);
};



const operate = function (operator, int1, int2) {


};





// Event listener -> avoid dragging the display result
result.addEventListener('dragstart', (e) => e.preventDefault());