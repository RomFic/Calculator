'use strict';

const result = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let number1 = '';
let number2 = '';
let operator = '';
const operators = '+-*/';
const numbers = '1234567890.'

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const buttonValue = e.target.dataset.value;

        if (buttonValue === 'clear') {
            clearResult();
        } else if (buttonValue === '=') {
            operate();
        } else {
            appendValue(buttonValue);
        }
    })
})

// -- -- -- -- -- -- -- - Functions math operators-- -- -- -- -- -- 

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


// -- -- -- -- -- -- -- - Function operate-- -- -- -- -- -- -- -- -- 

const operate = function (operator, int1, int2) {
    if (operator === '+') return add(int1, int2)
    if (operator === '-') return subtract(int1, int2)
    if (operator === '*') return multiply(int1, int2)
    if (operator === '/') return divide(int1, int2)
};


// -- -- -- -- -- -- -- - Function clear-- -- -- -- -- -- -- -- -- 

const clearResult = function () {
    result.innerText = 0;
};


// -- -- -- -- -- -- -- - Function append value-- -- -- -- -- -- -- -- -- 

const appendValue = function (buttonValue) {
    result.innerText += buttonValue;
};

// Event listener -> avoid dragging the display result
result.addEventListener('dragstart', (e) => e.preventDefault());