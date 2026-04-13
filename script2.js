function createCalculator(){
    var outerBox = document.createElement("div")
    outerBox.className = "calculator"
    outerBox.style.display = "flex"
    outerBox.style.justifyContent = "center"
    outerBox.style.width = "300px"
    outerBox.style.height = "400px"
    outerBox.style.border = "1px solid grey"
    outerBox.style.boxShadow = "0 0 1px 0px"
    outerBox.style.borderRadius = "5px"
    outerBox.style.backgroundColor = "#f0f0f0"
    return outerBox
}
function createScreen(){
    var screen = document.createElement("div")
    screen.className = "screen"
    screen.style.width = "300px"
    screen.style.height = "50px"
    screen.style.border = "1px solid grey"
    screen.style.backgroundColor = "white"
    screen.style.margin = "10px"
    return screen
}
window.addEventListener("load", () => {
    var calculator = createCalculator()
    var screen = createScreen()
    calculator.append(screen)
    document.body.append(calculator)
})