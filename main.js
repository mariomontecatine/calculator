let operator;
let number1;
let number2 = "0";
let solution;

const buttonValues = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "0",
  "-",
  "*",
  "/",
  ".",
  "AC",
  "DEL",
  "=",
];
const validKeys = new Set([
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
  ".",
  "Enter",
  "=",
  "Backspace",
  "Escape",
]);
const buttonsContainer = document.getElementById("buttonsContainer");
const display = document.getElementById("display");
const alert = document.getElementById("alert");

buttonValues.forEach((val) => {
  const btn = document.createElement("button");
  if (val === "/") {
    btn.setAttribute("id", `btnDivision`);
  } else if (val === "*") {
    btn.setAttribute("id", `btnMultiply`);
  } else if (val === "+") {
    btn.setAttribute("id", `btnAddition`);
  } else if (val === "=") {
    btn.setAttribute("id", `btnEqual`);
  } else if (val === ".") {
    btn.setAttribute("id", `btnDot`);
  } else if (val === "-") {
    btn.setAttribute("id", `btnSubtract`);
  } else {
    btn.setAttribute("id", `btn${val}`);
  }
  btn.textContent = val;
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
  } else if (type === "-") {
    solution = subtract(num1, num2);
  } else if (type === "*") {
    solution = multiply(num1, num2);
  } else {
    solution = divide(num1, num2);
  }
  displayNumbers(solution);
}

buttonsContainer.addEventListener("click", handleInput);
document.addEventListener("keydown", function (e) {
  if (!validKeys.has(e.key)) return;
  handleInput(e);
});

// Event delegation
function handleInput(e) {
  let numPressed;
  const keyMap = {
    Division: "/",
    Multiply: "*",
    Addition: "+",
    Subtract: "-",
    Equal: "=",
    Dot: ".",
    Enter: "=",
    Backspace: "DEL",
    Escape: "AC",
  };
  if (e.type === "click") {
    if (!(e.target && e.target.nodeName === "BUTTON")) return;
    numPressed = keyMap[e.target.id.replace("btn", "")] || e.target.textContent;
  } else if (e.type === "keydown") {
    if (!validKeys.has(e.key)) return;
    numPressed = keyMap[e.key] || e.key;
  }

  alert.textContent = "";
  if (numPressed === "=" || numPressed === "Enter") {
    if (operator && number1 !== "" && number2 !== "") {
      if (number2 === "0" && operator === "/") {
        alert.textContent =
          "You should not ask that type of questions...";
        number2 = "0";
        number1 = "";
        operator = null;
        displayNumbers(number2);
        return;
      } else {
        operate(operator, Number(number1), Number(number2));
        number2 = String(solution);
        number1 = "";
        operator = null;
        return;
      }
    } else {
      operator = null;
    }
    return;
  } else if (numPressed === "AC") {
    number2 = "0";
    number1 = "";
    operator = null;
    displayNumbers(number2);
    return;
  } else if (numPressed === ".") {
    if (!number2.includes(".")) {
      number2 += numPressed;
      displayNumbers(number2);
    }
    return;
  } else if (numPressed === "DEL" || numPressed === "Backspace") {
    number2 = number2.slice(0, -1);
    if (number2.length === 0) {
      number2 = "0";
    }
    displayNumbers(number2);
  }
  // true si numPressed NO ES UN NUMERO
  else if (isNaN(numPressed)) {
    if (operator && number1 !== "" && number2 !== "") {
      if (number2 === "0" && operator === "/") {
        alert.textContent =
          "You should not ask that type of questions...";
        number2 = "0";
        number1 = "";
        operator = null;
        displayNumbers(number2);
        return;
      } else {
        operate(operator, Number(number1), Number(number2));
        operator = numPressed;
        number2 = "0";
        number1 = String(solution);
      }
    } else {
      number1 = number2 === "" ? "0" : number2;
      operator = numPressed;
      number2 = "0";
      displayNumbers(number1);
    }
    return;
  } else {
    if (number2 === "0" || String(solution) === number2) {
      number2 = numPressed;
    } else {
      number2 += numPressed;
    }
    displayNumbers(number2);
  }
}

let displayCurrentValue = "0";
function displayNumbers(num) {
  displayCurrentValue = String(num); 
  if (displayCurrentValue.length >= 12) {
    display.textContent = "OVERFLOW!!";
    number2 = "0";
    number1 = "";
    operator = null;
    alert.textContent = "DoN't Do ThAt!";
  }
  else {
    display.textContent = displayCurrentValue;
  }
}

// Keyboard support

// document.addEventListener("keydown", (e) => {
//     if (e.key === ) {

//     }
// })
