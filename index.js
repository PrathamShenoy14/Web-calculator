const display =  document.getElementById("display");


function appendToDisplay(input) {
    display.value += input;
}

function calculate(input) {

    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }

    
}

function clearDisplay(input) {
    display.value = ''
}