let hoverBox = document.getElementById("hover-box");
let originalColor = "#f8fafc";
let hoverColor = "#dbeafe";

if (hoverBox) {
  hoverBox.addEventListener("mouseover", function() {
    hoverBox.style.backgroundColor = hoverColor;
    hoverBox.textContent = "Mouse is OVER the box!";
  });

  hoverBox.addEventListener("mouseout", function() {
    hoverBox.style.backgroundColor = originalColor;
    hoverBox.textContent = "Hover over me!";
  });
}

let liveInput = document.getElementById("live-input");
let liveOutput = document.getElementById("live-output");

if (liveInput && liveOutput) {
  liveInput.addEventListener("keyup", function() {
    if (liveInput.value.trim() === "") {
      liveOutput.textContent = "(Waiting for input...)";
    } else {
      liveOutput.textContent = liveInput.value;
    }
  });
}

let calcNum1 = document.getElementById("calc-num1");
let calcNum2 = document.getElementById("calc-num2");
let calcResult = document.getElementById("calc-result");

function calculate(operation) {
  let val1 = parseFloat(calcNum1.value);
  let val2 = parseFloat(calcNum2.value);

  if (isNaN(val1) || isNaN(val2)) {
    calcResult.textContent = "Result: Please enter valid numbers in both fields.";
    calcResult.className = "fs-5 fw-bold text-danger";
    return;
  }

  let res = 0;
  if (operation === "add") {
    res = val1 + val2;
  } else if (operation === "subtract") {
    res = val1 - val2;
  } else if (operation === "multiply") {
    res = val1 * val2;
  } else if (operation === "divide") {
    if (val2 === 0) {
      calcResult.textContent = "Result: Error (Cannot divide by zero)";
      calcResult.className = "fs-5 fw-bold text-danger";
      return;
    }
    res = val1 / val2;
  }

  calcResult.textContent = "Result: " + res;
  calcResult.className = "fs-4 fw-bold text-primary";
}

let btnAdd = document.getElementById("btn-add");
if (btnAdd) {
  btnAdd.addEventListener("click", function() {
    calculate("add");
  });
}

let btnSubtract = document.getElementById("btn-subtract");
if (btnSubtract) {
  btnSubtract.addEventListener("click", function() {
    calculate("subtract");
  });
}

let btnMultiply = document.getElementById("btn-multiply");
if (btnMultiply) {
  btnMultiply.addEventListener("click", function() {
    calculate("multiply");
  });
}

let btnDivide = document.getElementById("btn-divide");
if (btnDivide) {
  btnDivide.addEventListener("click", function() {
    calculate("divide");
  });
}

let btnClear = document.getElementById("btn-clear");
if (btnClear) {
  btnClear.addEventListener("click", function() {
    calcNum1.value = "";
    calcNum2.value = "";
    calcResult.textContent = "Result: --";
    calcResult.className = "fs-4 fw-bold text-muted";
  });
}
