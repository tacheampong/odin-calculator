
// Add
function add(num1, num2){
    return num1 + num2;
}

// Subtract
function subtract(num1, num2){
    return num1 - num2;
}

// Multiply
function multiply(num1, num2){
    return num1 * num2;
}

// Divide
function divide(num1, num2){
    return num1 / num2;
}
export function registry(operator){
    switch (operator){
        case "+":
            return add;
        case "-":
            return subtract;
        case "*":
            return multiply;
        case "/":
            return divide;    
    }
}

// Operate
export function operate(operator, num1, num2){
    if (num2 == 0 & operator == "/") {
        return NaN
    }
    var value = operator(num1, num2)
    var factor = Math.pow(10, 8)
    return Number.isInteger(value) ? value : Math.round(value * factor) / factor;
}