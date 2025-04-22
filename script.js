'use strict';

const result = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let number1 = '';
let number2 = '';
let operator = '';
const operators = ['+', '-', '*', '/'];
const numbers = [...Array(11).keys()];
const equalStr = ' = ';

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        const value = e.target.dataset.value;
        const splitResult = result.innerText.split('+');

        if (value === '=') {}

        if (value === '.') {}
        if (value === 'clear') clearResult();

        appendValue(value);
    })
})

// -- -- -- -- -- -- -- - Functions math operators-- -- -- -- -- -- 

const add = function (int1, int2) {
    return `${equalStr}${(int1 + int2)}`;
};

const subtract = function (int1, int2) {
    return `${equalStr}${(int1 - int2)}`;
};

const multiply = function (int1, int2) {
    return `${equalStr}${(int1 * int2)}`;
};

const divide = function (int1, int2) {
    if (int2 === 0) {
        return "No way!";
    };

    return `${equalStr}${(int1 / int2).toFixed(2)}`;
};


// -- -- -- -- -- -- -- - Functions -- -- -- -- -- -- -- -- -- 

const operate = function (operator, int1, int2) {
    int1 = +int1;
    int2 = +int2;
    if (operator === '+') return add(int1, int2);
    if (operator === '-') return subtract(int1, int2);
    if (operator === '*') return multiply(int1, int2);
    if (operator === '/') return divide(int1, int2);
    return "Error";
};

const appendValue = function (buttonValue) {
    result.innerText += buttonValue;
};

const clearResult = function () {
    result.innerText = '';
};

// Event listener -> load 0 on display when first loading
// document.addEventListener('DOMContentLoaded', () => {
//     result.innerText = "welcome";
// });

// Event listener -> avoid dragging the display result
result.addEventListener('dragstart', (e) => e.preventDefault());








// if (value === '=') {
//     if (result.innerText.includes('+')) {
//         const splitResult = result.innerText.split('+');
//         appendValue(operate('+', splitResult[0], splitResult[1]));
//     }
//     if (result.innerText.includes('-')) {
//         const splitResult = result.innerText.split('-');
//         appendValue(operate('-', splitResult[0], splitResult[1]));
//     }
//     if (result.innerText.includes('*')) {
//         const splitResult = result.innerText.split('*');
//         appendValue(operate('*', splitResult[0], splitResult[1]));
//     }
//     if (result.innerText.includes('/')) {
//         const splitResult = result.innerText.split('/');
//         appendValue(operate('/', splitResult[0], splitResult[1]));
//     }

// } else {
//     appendValue(value);
// }


// const appendValue = function (buttonValue) {
//     result.innerText += buttonValue;
// };