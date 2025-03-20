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
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const operate = (firstNumber, operator, secondNumber) => {
    switch (operator) {
        case "+":
            result = add(firstNumber, secondNumber)
            break
        case "-":
            result = subtract(firstNumber, secondNumber)
            break
        case "*":
            result = multiply(firstNumber, secondNumber)
            break
        case "/":
            result = divide(firstNumber, secondNumber)
            break
        default:
            result = "Invalid operator"
    }
    const finalResult = result;
    softResetCalculator(result);
    return finalResult;
}

const buttonClicked = (value) => {
    console.log(value)

    if (value === "=") {
        displayValue = operate(Number(firstNumber), operator, Number(secondNumber))
        updateDisplay(displayValue)
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
    operator = "";
    nextNumber = false;
    result;
}
