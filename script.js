//VARIABLES
let firstNumber = '';
let secondNumber = '';
let operator = null;
let firstOperator = null;
let secondOperator = null;

const displayNum = document.querySelector('.displayNumber');
const displayRes = document.querySelector('.displayResult');
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
    inputEqual(equalButton.textContent);
});

operators.forEach((operator) => {
    operator.addEventListener('click', () => {
        inputOperator(operator.textContent);
    })
});

//FUNCTIONS
function inputNumber(number) {
    displayNum.textContent = displayNum.textContent === '0' ? number : displayNum.textContent + number;
};

function inputDecimal(dot) {
    if (!displayNum.textContent.includes(dot)) {
        displayNum.textContent += dot;
    }
};

function clear() {
    displayRes.hidden = false;
    displayNum.hidden = false;
    displayNum.textContent = 0;
    displayRes.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    operator = null;
};

function del() {
    if (displayNum.textContent == 0 || displayNum.textContent.length == 1) {
        displayNum.textContent = 0;
    } else {
        displayNum.textContent = displayNum.textContent
            .toString()
            .slice(0, -1)
    }
};

function inputEqual(equalButton) {
    inputOperator(equalButton);
};

function inputOperator(operator) {
    if (firstNumber == '' && firstOperator != '') {
        firstNumber = parseFloat(displayNum.textContent);
        displayRes.textContent = firstNumber;
        firstOperator = operator;

        displayNum.textContent = 0;

    } else if (firstNumber != '' && secondNumber == '') {
        secondNumber = parseFloat(displayNum.textContent);
        displayRes.textContent = firstNumber;
        secondOperator = operator;

        const result = operate(firstOperator, firstNumber, secondNumber);

        if (operator == '=') {
            displayRes.hidden = false;
            displayNum.hidden = true;
            displayNum.textContent = result;
            displayRes.textContent = result;
            firstNumber = result;
            firstOperator = secondOperator;
            secondNumber = '';
            secondOperator = null;
        } else {
            displayRes.hidden = false;
            displayNum.hidden = false;
            displayNum.textContent = 0;
            displayRes.textContent = result;
            firstNumber = result;
            firstOperator = secondOperator;
            secondNumber = '';
            secondOperator = null;
        }
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
    if (secondNumber === 0) {
        result = 'oops, try again!';
        return result;
    } else {
        result = firstNumber / secondNumber;
        return result;
    }
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