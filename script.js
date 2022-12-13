//VARIABLES
let firstNumber = '';
let secondNumber = '';
let operator = null;
let firstOperator = null;
let secondOperator = null;

const displayEl = document.querySelector('.displayNumber');
const displayNew = document.querySelector('.displayResult');
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
    inputEqual();
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        inputOperator(operator.textContent);
    })
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
    displayNew.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    operator = null;
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
    inputOperator();
};

function inputOperator(operator) {
    if (firstNumber == '' && firstOperator != '') {
        firstNumber = parseFloat(displayEl.textContent);
        displayNew.textContent = firstNumber;
        firstOperator = operator;

        displayEl.textContent = 0;

    }else if (firstNumber != '' && secondNumber == '') {
        secondNumber = parseFloat(displayEl.textContent);
        displayNew.textContent = firstNumber;
        secondOperator = operator;

        const result = operate(firstOperator, firstNumber, secondNumber);

        displayEl.textContent = 0;
        displayNew.textContent = result;
        firstNumber = result;
        firstOperator = secondOperator;
        secondNumber = '';
        secondOperator = null;
    } 
};

//FUNCTIONS
function add(firstNumber, secondNumber) {
    result = firstNumber + secondNumber;
    return result;
};

function subtract(firstNumber, secondNumber) {
    result = firstNumber - secondNumber;
    return result;
};

function multiply(firstNumber, secondNumber) {
    result = firstNumber * secondNumber;
    return result;
}

function divide(firstNumber, secondNumber) {
    result = firstNumber / secondNumber;
    return result;
};

function power(firstNumber, secondNumber) {
    result = Math.pow(firstNumber, secondNumber);
    return result;
};

function operate(operator, firstNumber, secondNumber) {
    if (operator === '+') {
        return (add(firstNumber, secondNumber));
    } else if (operator === '-') {
        return (subtract(firstNumber, secondNumber));
    } else if (operator === '*') {
        return (multiply(firstNumber, secondNumber));
    } else if (operator === '/') {
        return (divide(firstNumber, secondNumber));
    }
    return secondNumber;
};