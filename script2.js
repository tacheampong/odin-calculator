function createCalculator() {
  var digits = createDigits();
  var operators = createOperators();

  var buttonContainer = document.querySelector(".button-container");
  var screen = document.querySelector(".screen")
  screen.innerText = ""
  buttonContainer.append(digits);
  buttonContainer.append(operators);
}

function createButton() {
  var button = document.createElement("div");
  var screen = document.querySelector(".screen")
  button.className = "button";
  button.addEventListener("click", (event) => {
     handleUpdates(screen, event.target)
  })
  return button;
}

function createDigits() {
  var container = document.createElement("div");
  var digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "CL"];
  container.className = "digit-container";
  digits.forEach((digit) => {
    var button = createButton();
    button.innerText = `${digit}`;

    container.append(button);
  });
  return container;
}
function createOperators() {
  var container = document.createElement("div");
  var operators = ["+", "-", "*", "/", "="];
  container.className = "operators-container";
  operators.forEach((operator) => {
    var button = createButton();
    button.style.backgroundColor = "orange";
    button.style.fontWeight = "bold";
    button.innerText = `${operator}`;
    container.append(button);
  });
  return container;
}

// when the event listeners is activated 
// handle updates is called the screen updates with
function handleUpdates(screen,button){
    screen.innerText = screen.innerText + button.innerText
}

window.addEventListener("load", () => {
    createCalculator();
});
