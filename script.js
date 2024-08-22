// Selecting the textarea element to display the calculator's result
const display = document.querySelector('textarea');

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to append a value to the display
function appendToDisplay(value) {
    display.value += value;
}

// Function to calculate the result
function calculate() {
    if(display.value==''){
        display.value=''
    }
    else{
   
        // Evaluate the expression in the display
    display.value = eval(display.value);}}
    

function clearValue() {
    display.value = display.value.slice(0, -1);
}


// Function to handle button clicks
function handleButtonClick(event) {
    const buttonValue = event.target.innerText;

    if (buttonValue === 'AC') {
        clearDisplay();
    } else if (buttonValue === '=') {
        calculate();
    } else if (buttonValue=='⌫'){
        clearValue();
    }
        else if(buttonValue=='+/-'){
        if(display.value.startsWith('-')){
            display.value=display.value.slice(1);
        }
        else{
            display.value='-'+display.value;
        }
    }
    else {
        appendToDisplay(buttonValue);
    }
}

// Adding event listeners to each table cell (button)
const buttons = document.querySelectorAll('td');
buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
