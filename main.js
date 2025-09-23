let operator;
let number1;
let number2 = "0";
let solution;

const buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "+", "-", "*", "/", "CLEAR"];
const buttonsContainer = document.getElementById("buttonsContainer");
const display = document.getElementById("display");

buttonValues.forEach(val => {
    const btn = document.createElement("button");
    btn.textContent = val;
    btn.setAttribute("id", `btn${val}`);
    buttonsContainer.appendChild(btn);
});

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(type, num1, num2) {
    if (type === "+") {
        solution = add(num1, num2);
    }
    else if (type === "-") {
        solution = subtract(num1, num2);
    }
    else if (type === "*") {
        solution = multiply(num1, num2);
    }
    else {
        solution = divide(num1, num2);
    }
    displayNumbers(solution);
}

// Event delegation
buttonsContainer.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName === "BUTTON") {
        let numPressed = e.target.id.replace("btn", "");
        if (numPressed === "=") {
            if (operator && number1 !== "" && number2 !== "") {
                operate(operator, Number(number1), Number(number2));
                number2 = String(solution);
                number1 = "";
                operator = null;
            }
            else {
                operator = null;
            }
            return;
        }
        else if (numPressed === "CLEAR") {
            number2 = "0";
            number1 = "";
            operator = null;
            displayNumbers(number2);
            return;
        }
        // true si numPressed NO ES UN NUMERO
        else if (isNaN(numPressed)) {
            if (operator && number1 !== "" && number2 !== "") {
                operate(operator, Number(number1), Number(number2));
                operator = numPressed;
                number2 = "0";
                number1 = String(solution);
            }
            else {
                number1 = number2 === "" ? "0" : number2;
                operator = numPressed;
                number2 = "0";
                displayNumbers(number1);
            }
            return;
        }
        else {
            if (number2 === "0") {
                number2 = numPressed;
            }
            else {
                number2 += numPressed;

            }
            displayNumbers(number2);

        }
    }
});

let displayCurrentValue = 0;
function displayNumbers(num) {
    displayCurrentValue = num;
    display.textContent = displayCurrentValue;
}









