function buttonClick(buttonVal) {
    console.log("buttonclick");
}

function evaluateExpression() {
    console.log("eval click");
}

function clearLastDisplay() {
    console.log("clear click");
}

document.getElementById("eval-button").addEventListener("click", evaluateExpression);
document.getElementById("clear-button").addEventListener("click", clearLastDisplay);
let elements = document.getElementsByClassName("default-button");
for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("click", buttonClick);
}