const display = document.getElementById('display');

let prev = '';  // Store previous value
let curr = '';  // Store current value
let operator = '';  // Store the operator

function appendToDisplay(num) {
    
    if (num === '.' && curr.includes('.')) {
        return;
    }
    
    display.value += num;
    curr += num;  
}

function handleOperator(op) {
    if (prev && curr) {
        calculate(); // If there's a previous and current value, calculate before switching operator
    }

    if (curr === '') {
        return; // Prevent operator input if no number is entered yet
    }

    operator = op;  // Set the operator
    prev = curr;    // Store the current value as previous for the next operation
    curr = '';      // Reset the current number
    display.value += op;  // Append the operator to the display
}

// Perform calculation based on the operator
function calculate() {
    let result;

    // Only calculate if we have both prev and curr values
    if (prev === '' || curr === '') {
        return; // Do nothing if there's no valid input
    }

    // Perform calculation based on the operator
    switch (operator) {
        case '+':
            result = parseFloat(prev) + parseFloat(curr);
            break;
        case '-':
            result = parseFloat(prev) - parseFloat(curr);
            break;
        case '*':
            result = parseFloat(prev) * parseFloat(curr);
            break;
        case '/':
            if (parseFloat(curr) === 0) {
                result = "Error"; // Handle division by zero
            } else {
                result = parseFloat(prev) / parseFloat(curr);
            }
            break;
        default:
            return;
    }

    // Display the result and reset the operands
    if (result === "Error") {
        display.value = result;
    } else {
        display.value = result.toString();
    }
    
    prev = result.toString();  // Store the result as the previous value for further calculations
    curr = '';  // Reset current value
    operator = '';  // Reset the operator
}

// Clear the display
function clearDisplay() {
    display.value = "";
    prev = '';
    curr = '';
    operator = '';
}

// Delete the last character in the display
function del() {
    display.value = display.value.slice(0, -1);
    curr = display.value; // Update the current value after deletion
}
