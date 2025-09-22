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

buttonsContainer.addEventListener("click", function(e) {
    if (e.target && e.target.nodeName == "BUTTON") {
        let numPressed = e.target.id.replace("btn","");
        displayNumbers(numPressed);
    }
});

let displayCurrentValue = 0;
function displayNumbers(num) {
    display.textContent = num;
    displayCurrentValue = num;
}







