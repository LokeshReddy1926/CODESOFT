let display = document.getElementById("display");
let currentValue = "";

function appendValue(value) {
  currentValue += value;
  updateDisplay();
}

function clearScreen() {
  currentValue = "";
  updateDisplay();
}

function calculate() {
  try {
    currentValue = eval(currentValue).toString();
    updateDisplay();
  } catch (error) {
    currentValue = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  display.textContent = currentValue;
}
