import {registry, operate } from "./script.js";

var n1 = ""
var n2 = ""
var operator = ""

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
    if (event.target.innerText == "CL"){
        screen.innerText = "";
        n1 = ""
        n2 = ""
        operator = ""
        return button
    }
    if (event.target.innerText == "="){
        return button;
    } 
    
     
  })
  return button;
}

function createDigits() {
  var container = document.createElement("div");
  var digits = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "CL"];
  var screen = document.querySelector(".screen")
  container.className = "digit-container";
  digits.forEach((digit) => {
    var button = createButton();
    button.innerText = `${digit}`;
    button.addEventListener("click", (event) =>{
    if (digit != "CL"){
        handleUpdates(screen, button.innerText)
        if (operator == ""){
            n1 = n1 + digit
            console.log("n1", n1)
            return button
        }
        else {
            n2 = n2 + digit
            screen.innerText = ""
            handleUpdates(screen, n2)
            console.log("n2",n2)
        }
    }
    })
 

    container.append(button);
  });

  return container;
}

function createOperators() {
  var container = document.createElement("div");
  var operators = ["+", "-", "*", "/", "="];
  var screen = document.querySelector(".screen")
  container.className = "operators-container";
  operators.forEach((op) => {
    var button = createButton();
    button.style.backgroundColor = "orange";
    button.style.fontWeight = "bold";
    button.innerText = `${op}`;
    button.addEventListener("click", (event) =>{
        if (op == "="){
            if (n2 != ""){
                n1 = operate(registry(operator), Number(n1), Number(n2))
                screen.innerText = n1
                n2 = ""
                return
            }
        }
        if (operator == ""){
            operator = op
        }
        if (operator != "" & n2 == ""){
            operator = op
        }
        else {
            if (n2 != ""){
                n1 = operate(registry(operator), Number(n1), Number(n2))
                screen.innerHTML = n1
                operator = op
                n2 = ""
            }
        }
    })
    container.append(button);
  });
  return container;
}

// when the event listeners is activated 
// handle updates is called the screen updates with
function handleUpdates(screen,button){
    screen.innerText = screen.innerText + button
}

window.addEventListener("load", () => {
    createCalculator();
});

//TODO cleanup if conditions