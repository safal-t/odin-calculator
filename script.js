// DECLARE VARIABLES
let firstNumber = "";
let secondNumber = "";
let operator = "";
let nextNumber = false;
let result = null;

const display = document.querySelector(".calculator-screen")
const buttons = document.querySelectorAll("button");
const equalsBtn = document.querySelector(".equals-btn");

// ADD EVENT LISTENERS
buttons.forEach((button) => button.addEventListener("click", event => buttonClicked(event.target.innerHTML)))
equalsBtn.disabled = true;
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

    display.innerText += value

    if (value === "=") {
        result = operate(Number(firstNumber), operator, Number(secondNumber))
        updateDisplay(result)
        softResetCalculator(result)
        return
    } else if (value === "+" || value === "-" ||value === "*" || value === "/") {
        operator = value
        nextNumber = true
        return
    } else if (value === "AC") {
        hardResetCalculator()
        return
    }
    

    if (nextNumber === true) {
        secondNumber += value
        equalsBtn.disabled = false;
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

const hardResetCalculator = () => {
    firstNumber = "";
    secondNumber = "";
    operator = "";
    nextNumber = false;
    result = null;
    updateDisplay(0);
}
