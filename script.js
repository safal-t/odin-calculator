// DECLARE VARIABLES
let firstNumber = "";
let secondNumber = "";
let operator = "";
let nextNumber = false;
let result;

const display = document.querySelector(".calculator-screen")
const buttons = document.querySelectorAll("button");

// ADD EVENT LISTENERS
buttons.forEach((button) => button.addEventListener("click", button => buttonClicked(button.target.innerHTML)))

// DECLARE FUNCTIONS    
const add = (a, b) => Math.round((a + b) * 100) / 100;
const subtract = (a, b) => Math.round((a - b) * 100) / 100;
const multiply = (a, b) => Math.round((a * b) * 100) / 100;
const divide = (a, b) => Math.round((a / b) * 100) / 100;

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
            result = "Invalid operator"
    }
}

const buttonClicked = (value) => {
    console.log(value)

    if (value === "=") {
        result = operate(Number(firstNumber), operator, Number(secondNumber))
        updateDisplay(result)
        softResetCalculator(result)
        return
    }

    if (value === "+" || value === "-" ||value === "*" || value === "/") {
        operator = value
        nextNumber = true
        return
    } 

    if (nextNumber === true) {
        secondNumber += value
    } else {
        firstNumber += value
    }
    
    return value
}

const updateDisplay = (value) => display.innerText = value

const softResetCalculator = (result) => {
    firstNumber = result;
    secondNumber = "";
    operator = null;
    nextNumber = false;
    result = null;
}
