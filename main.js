let operator;
let number1;
let number2;

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
        displayNumbers(add(num1,num2));
    }
    else if (type === "-") {
        displayNumbers(subtract(num1,num2));
    }
    else if (type === "*") {
        displayNumbers(multiply(num1,num2));
    }
    else {
        displayNumbers(divide(num1,num2));
    }
}

const buttonValues = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "+", "-", "*", "/", "CLEAR"];
const buttonsContainer = document.getElementById("buttonsContainer");
const display = document.getElementById("display");

buttonValues.forEach(val => {
    const btn = document.createElement("button");
    btn.textContent = val;
    btn.setAttribute("id", `btn${val}`);
    buttonsContainer.appendChild(btn);
});

// Event delegation
buttonsContainer.addEventListener("click", function (e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        let numPressed = e.target.id.replace("btn", "");
        // si es numero permitir acoplarlos (en plan si pones 1 y luego 2: 12)
        // true si numPressed NO ES UN NUMERO
        // cuando se le de a "=" se llama a operate
        if (isNaN(numPressed) && numPressed === "=") {
            operate(operator, number1, number2);
        }
        // cuando se presione un operator se almacena el numero anterior y se lee otro
        else if (isNaN(numPressed)) {
            number1 = number2;
            operator = numPressed;
        }
        else {
            if (number2 === undefined) {
                number2 = numPressed;
            }
            else {
                number2 += numPressed;
            }
            
        }
        // se actualiza el display (y tambien intermediamente con cada numero) 
        displayNumbers(number2);
    }
});

let displayCurrentValue = 0;
function displayNumbers(num) {
    display.textContent = num;
    displayCurrentValue = num;
}









