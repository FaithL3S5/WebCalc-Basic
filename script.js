let prevNumber = '';
let calculationOperator = '';
let currentNumber = '0';

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const decimal = document.querySelector(".decimal");
const percent = document.querySelector(".percentage");
const calculatorScreen = document.querySelector(".calculator-screen");
const clearBtn = document.querySelector(".all-clear");

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else {
        currentNumber += number;
    };
};

const inputOperator = (operator) => {
    if (calculationOperator === '') {
        prevNumber = currentNumber;
    };
    calculationOperator = operator;
    currentNumber = '';
};

const inputDecimal = (point) => {
    if (currentNumber.includes('.')) {
        return;
    };
    currentNumber += point;
};

const updateScreen = (number) => {
    calculatorScreen.value = number;
};

const calculate = () => {
    let result = '';
    switch (calculationOperator) {
        case '+':
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case '-':
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case '*':
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case '/':
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
            break;
        case '%':
            result = parseFloat(currentNumber) / 100;
            break;
        default:
            return;
    };
    currentNumber = result;
    calculationOperator = '';
};

const clearAll = () => {
    prevNumber = '';
    calculationOperator = '';
    currentNumber = '0';
};

operators.forEach((operator) => {
    operator.addEventListener("click", (e) => {
        inputOperator(e.target.value);
    });
});

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
        inputNumber(e.target.value)
        updateScreen(currentNumber);
    });
});

equalSign.addEventListener("click", () => {
    calculate();
    updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
});

percent.addEventListener("click", (e) => {
    calculationOperator = e.target.value;
    calculate();
    updateScreen(currentNumber);
});

decimal.addEventListener("click", (e) => {
    inputDecimal(e.target.value);
    updateScreen(currentNumber);
});