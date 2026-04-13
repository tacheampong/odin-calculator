function createCalculator() {
  var outerBox = document.createElement("div");
  outerBox.className = "calculator";
  outerBox.style.width = "300px";
  outerBox.style.height = "400px";
  outerBox.style.border = "1px solid grey";
  outerBox.style.boxShadow = "0 0 1px 0px";
  outerBox.style.borderRadius = "5px";
  outerBox.style.backgroundColor = "#f0f0f0";
  return outerBox;
}
function createScreen() {
  var screen = document.createElement("div");
  screen.className = "screen";
  screen.style.width = "250px";
  screen.style.height = "50px";
  screen.style.border = "1px solid grey";
  screen.style.backgroundColor = "white";
  screen.innerText = "1000";
  screen.style.fontSize = "30px";
  screen.style.textAlign = "end";
  screen.style.borderRadius = "2px";
  return screen;
}
function createButton() {
  var button = document.createElement("div");
  button.className = "button";
  button.style.width = "50px";
  button.style.height = "50px";
  button.style.border = "1px solid grey";
  button.style.borderRadius = "8px";
  button.style.backgroundColor = "white";
  button.style.textAlign = "center";
  button.style.fontSize = "30px";
  return button;
}

function createDigits() {
  var container = document.createElement("div");
  var digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "CL"];
  container.className = "digit-container";
  container.style.display = "flex";
  container.style.flexWrap = "wrap";
  container.style.gap = "5px";
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
  container.style.display = "flex";
  container.style.flexDirection = "column";
  container.style.gap = "5px";
  operators.forEach((operator) => {
    var button = createButton();
    button.style.backgroundColor = "orange";
    button.style.fontWeight = "bold";
    button.innerText = `${operator}`;
    container.append(button);
  });
  return container;
}
//TODO: clean up/abstract the containers
//TODO: move styling to css file
window.addEventListener("load", () => {
  var calculator = createCalculator();
  var screen = createScreen();
  var digits = createDigits();
  var operators = createOperators();
  var innerContainer = document.createElement("div");
  var buttonContainer = document.createElement("div");
  buttonContainer.style.display = "flex";
  buttonContainer.style.alignItems = "flex-start";
  innerContainer.style.display = "flex";
  innerContainer.style.flexDirection = "column";
  innerContainer.style.gap = "10px";
  innerContainer.style.margin = "25px";
  buttonContainer.append(digits);
  buttonContainer.append(operators);
  innerContainer.append(screen);
  innerContainer.append(buttonContainer);

  calculator.append(innerContainer);
  document.body.append(calculator);
});
