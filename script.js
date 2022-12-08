//VARIABLES
const displayEl = document.querySelector('.displayResult');
let numberValOne;
let numberValTwo;

console.log('numberVal on load ' + numberValOne);

const numbers = document.querySelectorAll('.numbers');
numbers.forEach((number) => {
    number.addEventListener('click', () => {
        displayEl.textContent = number.textContent;
        numberVal = number.textContent;
        console.log('clicked # ' + numberVal);
    })
});

const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', () => {
    console.log('clicked equal');
});

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


