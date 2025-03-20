// DECLARE FUNCTIONS    
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber)
        case "-":
            return subtract(firstNumber, secondNumber)
        case "*":
            return multiply(firstNumber, secondNumber)
        case "/":
            return divide(firstNumber, secondNumber)
        default:
            return "Invalid operator"
    }
}

// DECLARE VARIABLES
let firstNumber;
let secondNumber;
let operator;



