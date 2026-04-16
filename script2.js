function createCalculator() {
  var outerBox = document.createElement("div");
  outerBox.className = "calculator";
  return outerBox;
}
function createScreen() {
  var screen = document.createElement("div");
  screen.className = "screen";
  return screen;
}
function createButton() {
  var button = document.createElement("div");
  button.className = "button";
  button.addEventListener("click", (event) => {
     handleUpdates(screen, event)
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
// the text of the current button
function handleUpdates(screen,button){
    screen.innerText = screen.innerText + button.innerText
}
//TODO: clean up/abstract the containers
//TODO: move styling to css file
//TODO: FIX so that screen is in the dom and the button can access it
window.addEventListener("load", () => {
  var calculator = createCalculator();
  var screen = createScreen();
  var digits = createDigits();
  var operators = createOperators();

  var innerContainer = document.createElement("div");
  var buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container"
  innerContainer.className = "inner-container"
  buttonContainer.append(digits);
  buttonContainer.append(operators);
  innerContainer.append(screen);
  innerContainer.append(buttonContainer);

  calculator.append(innerContainer);
  document.body.append(calculator);


});
