// DECLARE FUNCTIONS    
const add = (a, b) => console.log(a + b);
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

const buttonClicked = (value) => {
    console.log(value)

    if (value === "=") {
        operate(Number(firstNumber), operator, Number(secondNumber))
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

// DECLARE VARIABLES
let firstNumber = "";
let secondNumber = "";
let operator = "";
let nextNumber = false;


const buttons = document.querySelectorAll("button");



// ADD EVENT LISTENERS
buttons.forEach((button) => button.addEventListener("click", button => buttonClicked(button.target.innerHTML)))
