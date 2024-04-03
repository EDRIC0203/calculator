const display = document.getElementById('display');

const numberButtons = document.querySelectorAll('.number');

const operatorButtons = document.querySelectorAll('.operator');

let currentInput = '';
let firstOperand = null;
let operator = null;

function updateDisplay(value) {
    display.textContent = value;
}

function handleNumberClick(number) {
    currentInput += number;
    updateDisplay(currentInput);
}

function handleOperatorClick(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = performCalculation(operator, firstOperand, inputValue);
        updateDisplay(result);
        firstOperand = result;
    }

    currentInput = '';
    operator = nextOperator;
}

function performCalculation(operator, firstOperand, secondOperand) {
    switch (operator) {
        case '+':
            return firstOperand + secondOperand;
        case '-':
            return firstOperand - secondOperand;
        case '*':
            return firstOperand * secondOperand;
        case '/':
            return firstOperand / secondOperand;
        default:
            return secondOperand;
    }
}

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleNumberClick(button.textContent);
    });
});

operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
        handleOperatorClick(button.textContent);
    });
});