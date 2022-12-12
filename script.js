//VARIABLES
let firstNumber = ''
let secondNumber = ''
let currentOperation = null

const displayEl = document.querySelector('.displayResult');
const numbers = document.querySelectorAll('.numbers');
const decimal = document.querySelector('.dot');
const operators = document.querySelectorAll('.operators');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');
const delButton = document.querySelector('.del');

//EVENT LISTENERS
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        inputNumber(number.textContent);
    })
});

decimal.addEventListener('click', () => {
    inputDecimal(decimal.textContent);
});

clearButton.addEventListener('click', () => {
    clear();
});

delButton.addEventListener('click', () => {
    del();
});

equalButton.addEventListener('click', () => {
    console.log('clicked equal');
});

//FUNCTIONS
function inputNumber(number) {
    displayEl.textContent = displayEl.textContent === '0' ? number : displayEl.textContent + number;
};

function inputDecimal(dot) {
    if (!displayEl.textContent.includes(dot)) {
        displayEl.textContent += dot;
    }
};

function clear() {
    displayEl.textContent = 0;
};

function del() {
    if (displayEl.textContent == 0 || displayEl.textContent.length == 1) {
        displayEl.textContent = 0;
    } else {
        displayEl.textContent = displayEl.textContent
            .toString()
            .slice(0, -1)
    }
};

function inputEqual() {
    // placeholder
};

//FUNCTIONS
function add(a, b) {
    result = a + b;
    return result;
};

function subtract(a, b) {
    result = a - b;
    return result;
};

function multiply(a, b) {
    result = a * b;
    return result;
}

function divide(a, b) {
    result = a / b;
    return result;
};

function power(a, b) {
    result = Math.pow(a, b);
    return result;
};

function operate(operator, a, b) {
    if (operator == '+') {
        displayEl.textContent = (add(a, b));
    } else if (operator == '-') {
        displayEl.textContent = (subtract(a, b));
    } else if (operator == '*') {
        displayEl.textContent = (multiply(a, b));
    } else if (operator == '/') {
        displayEl.textContent = (divide(a, b));
    }
};


