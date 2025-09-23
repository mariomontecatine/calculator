let operator;
let number1;
let number2 = 0;

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
    let solution = 10;
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
    console.log(`${solution}`)
    displayNumbers(solution);
}

// Event delegation
buttonsContainer.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        let numPressed = e.target.id.replace("btn", "");
        if (numPressed === "=") {
            operate(operator, Number(number1), Number(number2));
            number2 = 0;
        }
        else if (numPressed === "CLEAR") {
            number2 = 0;
            displayNumbers(number2);
        }
        // true si numPressed NO ES UN NUMERO
        else if (isNaN(numPressed)) {
            number1 = number2;
            operator = numPressed;
            number2 = 0;
            displayNumbers(number1);
        }

        else {
            if (number2 === 0) {
                number2 = numPressed;
                displayNumbers(number2);
            }
            else {
                number2 += numPressed;
                displayNumbers(number2);
            }

        }
        // se actualiza el display (y tambien intermediamente con cada numero) 
    }
});

let displayCurrentValue = 0;
function displayNumbers(num) {
    displayCurrentValue = num;
    display.textContent = displayCurrentValue;
}









