const MAX_LENGTH = 9;
var displayScreen = document.getElementById("calculation-space");

var calculator = {
    operandOne: "0",
    operandTwo: "",
    operator: "",
    accumulator: ""
};

/**
 * clearDisplay()
 * Clears the display and all calculator properties.
 */
function clearDisplay() {
    calculator.operandOne = "0";
    calculator.operandTwo = "";
    calculator.operator = "";
    calculator.accumulator = "";
    displayScreen.innerHTML = "0";
}

/**
 * updateDisplay()
 * Updates the display.
 */
function updateDisplay() {
    // If neither operands nor operator is stored:
    if (calculator.operandOne == "0" && calculator.operandTwo == "" && calculator.operator == "") {
        displayScreen.innerHTML = calculator.accumulator;
    }

    // If operandOne and operator are stored (but operandTwo isn't):
    if (calculator.operandOne != "0" && calculator.operator != "" && calculator.operandTwo == "") {

        // If accumualator is zero, don't display it.
        if (calculator.accumulator == "") {
            displayScreen.innerHTML = calculator.operandOne + " " + calculator.operator;
        // If accumulator isn't zero, display it.
        } else {
            displayScreen.innerHTML = calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator;
        }
    }

    // If operandOne is stored, but operandTwo and operator aren't stored (after calculation).
    if (calculator.operandOne != "0" && calculator.operator == "" && calculator.operandTwo == "") {
        displayScreen.innerHTML = calculator.operandOne;
    }

} // End of updateDisplay().

/**
 * keyPress()
 * Determines which key has been pressed.
 * @param {String} value: Key's value
 */
function keyPress(value) {

    // If key pressed is a digit:
    if (value == "1" || value == "2" || value == "3" || value == "4" || value == "5" || value == "6" || value == "7" || value == "8" || value == "9" || value == "0") {

        // Check to make sure display is smaller than max allowed.
        if (calculator.accumulator.length < MAX_LENGTH) {
            // If the accumulator is empty (or equal to zero):
            if (calculator.accumulator == "" || calculator.accumulator == "0") {
                // If zero is clicked, don't add another.
                if (value == "0") {
                    calculator.accumulator = "0";
                    updateDisplay();
                // If digit isn't zero, add digit.
                } else {
                    calculator.accumulator = value;
                    updateDisplay();
                }
            // If the accumulator isn't empty, append the digit.
            } else {
                calculator.accumulator = calculator.accumulator + value;
                updateDisplay();
            }
        }
    } // End of if (digit).

    // If key pressed is a decimal point:
    if (value == ".") {
        
        // If accumulator already contains a decimal:
        if (calculator.accumulator.includes(".")) {
            // Leave accumulator the same (can't have two decimals).
            calculator.accumulator = calculator.accumulator;
            // Update display.
            updateDisplay();
        // If accumulator doesn't contain a decimal:    
        } else {
            // If decimal is first button pressed:
            if (calculator.accumulator == "") {
                // Add zero in front of decimal.
                calculator.accumulator = "0.";
            // If decimal isn't first button pressed:    
            } else {
                // Add decimal to accumulator.
                calculator.accumulator = calculator.accumulator + ".";
            }
            // Update display.
            updateDisplay();
        }

    } // End of if (decimal).

    // If key pressed is an operator:
    if (value == "/" || value == "*" || value == "+" || value == "-") {

        // Is operandOne stored? --> No
        if (calculator.operandOne == "0") {

            // UNECCESSARY
            // Is accumulator empty? --> Yes
            if (calculator.accumulator == "") {
                // Leave the accumulator the same.
                calculator.accumulator = calculator.accumulator;
                // Update display.
                updateDisplay();
            // Is accumualtor empty? --> No
            } else {
                // Store accumualator as a number in operandOne.
                calculator.operandOne = calculator.accumulator;
                // Store operator value.
                calculator.operator = value;
                // Reset accumulator.
                calculator.accumulator = "";
                // Update display.
                updateDisplay();
            }
        }

        // Is operandOne stored? --> Yes
        if (calculator.operandOne != "0") {

            // Is operandTwo stored? --> No
            if (calculator.operandTwo == "") {

                // Is accumulator empty? --> Yes
                if (calculator.accumulator == "") {
                    // Store new operator.
                    calculator.operator = value;
                    // Update display.
                    updateDisplay();
                } 
                
                 // Is accumulator empty? --> No
                if (calculator.accumulator != "") {
                    // Store accumulator in operandTwo.
                    calculator.operandTwo = calculator.accumulator;
                    // Run calculation and store in operandOne.
                    calculator.operandOne = calculate(calculator.operator); 
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // Update operator.
                    calculator.operator = value;
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    updateDisplay();
                }

            }
        }
    } // End of if (operator).

    // If key pressed is equals button:
    if (value == "=") {

        // Is operandOne stored? --> Yes
        if (calculator.operandOne != "0") {

            // Is operator stored? --> Yes
            if (calculator.operator != "") {

                // Is accumulator empty? --> Yes
                if (calculator.accumulator == "") {
                    // Store operandOne in operandTwo.
                    calculator.operandTwo = calculator.operandOne;
                    // Run calculation and store result in operandOne.
                    calculator.operandOne = calculate(calculator.operator); 
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // Reset operator.
                    calculator.operator = "";
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    updateDisplay();
                }

                // Is accumulator empty? --> No
                if (calculator.accumulator != "") {
                    calculator.operandTwo = calculator.accumulator;
                    // Run calculation and store result in operandTwo.
                    calculator.operandOne = calculate(calculator.operator);
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // Reset operator.
                    calculator.operator = "";
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    updateDisplay();
                }
            }
            
        }
    } // End of if (=).

    // If key pressed is clear:
    if (value == "clear") {
        // Clear all variables.
        clearDisplay();
    } // End of it (clear).

    // If key pressed is sign-switch:
    if (value == "sign-switch") {
        // Pass accumulator into signSwitch() method to switch the sign.
        calculator.accumulator = signSwitch(calculator.accumulator).toString();
        // Update display.
        updateDisplay();
    } // End of if (sign-switch).

    // If key pressed is percentage:
    if (value == "%") {
        // Case: One number in display, no calculations have occured yet.
        if (calculator.operandOne == "0" && calculator.operator == "") {
           calculator.accumulator = percentage(calculator.accumulator).toString();
           calculator.operandOne = calculator.accumulator;
           calculator.accumulator = "";
           updateDisplay();
        // Case: One number in display, calculation has occurred.
        } else if (calculator.operandOne != "0" && calculator.operator == "") {
            calculator.operandOne = percentage(calculator.operandOne).toString();
            updateDisplay();
        // Case: Two numbers in display, no calculations have occured yet.
        } else if (calculator.accumulator != "0" && calculator.operator != "") {
            calculator.accumulator = percentage(calculator.accumulator).toString();
            updateDisplay();
         }
       
    } // End of if (percentage).
} // End of keyPress(value).

/**
 * percentage()
 * Calculates the percentage form of a number.
 * @param {String} num: Number to use in percentage calculation
 * @returns {Number} answer: Input number's percentage form
 */
function percentage(num) {
    var numSqRoot = Number(num);
    var answer = numSqRoot / 100;
    return answer; 
}

/**
 * signSwitch()
 * Switches a number's sign.
 * @param {String} num: String form of number (to be sign-switched)
 * @returns {Number} numberSwitch: Number form of number (with new sign)
 */
function signSwitch(num) {
    var numberSwitch = 0;
    numberSwitch = Number(num) * -1;
    return numberSwitch;
}

/**
 * calculate()
 * Calculates answer based on the operator
 * @param {String} oper: Operator to be used for calculation
 * @returns {number} answer: Answer to calculation 
 */
function calculate(oper) {

    var answer = 0; // Answer to calculation (return variable)
    var numOperandOne = Number(calculator.operandOne); // Convert operandOne to a number.
    var numOperandTwo = Number(calculator.operandTwo); // Convert operandTwo to a number.

    // Switch-case for operator:
    switch (oper) {

        // Case: Addition
        case "+":
        answer = numOperandOne + numOperandTwo;
        return answer;

        // Case: Subtraction
        case "-":
        answer = numOperandOne - numOperandTwo;
        return answer;

        // Case: Multiplication
        case "*":
        answer = numOperandOne * numOperandTwo;
        return answer;

        // Case: Division
        case "/":

        if (numOperandTwo === 0) {
            answer = "ERROR: PRESS CLEAR";
            return answer;
        } else {
            answer = numOperandOne / numOperandTwo;
            return answer;
        }
    } // End of switch-case.
} // End of calculate() method.