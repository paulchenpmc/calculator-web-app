function checkDisplayState() {
    display_tag = document.getElementById("display");
    display_text = display_tag.textContent;
    switch (display_text) {
        case "Error":
            display_tag.textContent = "";
            break;
    }
}

function buttonClick(buttonVal) {
    checkDisplayState();
    display_tag = document.getElementById("display");
    display_tag.textContent += buttonVal;
}

function evaluateExpression() {
    checkDisplayState();
    display_tag = document.getElementById("display");
    expression = display_tag.textContent;
    try {
        result = eval(expression);
    } catch (e) {
        if (e instanceof SyntaxError) {
            display_tag.textContent = "Error";
        }
        return;
    }
    display_tag.textContent = result;
}

function clearLastDisplay() {
    checkDisplayState();
    display_tag = document.getElementById("display");
    display_tag.textContent = display_tag.textContent.slice(0, -1);
}

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("eval-button").addEventListener("click", evaluateExpression);
    document.getElementById("clear-button").addEventListener("click", clearLastDisplay);
});
