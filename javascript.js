const MAX_LENGTH = 9;
var displayScreen = document.getElementById("calculation-space");

/**
 * calculator()
 * Creates a calculator object.
 */
var calculator = {
    operandOne: "",
    operandTwo: "",
    operator: "",
    accumulator: ""
};

/**
 * clearDisplay()
 * Clears the display and all calculator properties.
 */
function clearDisplay() {
    calculator.operandOne = "";
    calculator.operandTwo = "";
    calculator.operator = "";
    calculator.accumulator = "";
    displayScreen.innerHTML = "0";
}

/**
 * updateDisplay()
 * Updates the display.
 */
function updateDisplay(display) {
    displayScreen.innerHTML = display;
}

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
                    // Update display.
                    // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                    // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        // If accumualator is blank, don't display it.
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                            // If accumulator isn't zero, display it.
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                    // If digit isn't zero, add digit.
                } else {
                    calculator.accumulator = value;
                    // Update display.
                    // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                     // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                }
                // If the accumulator isn't empty, append the digit.
            } else {
                calculator.accumulator = calculator.accumulator + value;
                // Update display.
                // If neither operands nor operator is stored:
                if (calculator.operandOne == "" && calculator.operator == "") {
                    updateDisplay(calculator.accumulator);
                }
                 // If operandOne and operator are stored:
                if (calculator.operandOne != "" && calculator.operator != "") {
                    if (calculator.accumulator == "") {
                        updateDisplay(calculator.operandOne + " " + calculator.operator);
                    } else {
                        updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                    }
                }
                // If operandOne is stored, but operator isn't stored (after calculation):
                if (calculator.operandOne != "" && calculator.operator == "") {
                    updateDisplay(calculator.operandOne);
                }
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
            // If neither operands nor operator is stored:
            if (calculator.operandOne == "" && calculator.operator == "") {
                updateDisplay(calculator.accumulator);
            }
             // If operandOne and operator are stored:
            if (calculator.operandOne != "" && calculator.operator != "") {
                if (calculator.accumulator == "") {
                    updateDisplay(calculator.operandOne + " " + calculator.operator);
                } else {
                    updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                }
            }
            
            if (calculator.operandOne != "" && calculator.operator == "") {
                updateDisplay(calculator.operandOne);
            }
            
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
            // If neither operands nor operator is stored:
            if (calculator.operandOne == "" && calculator.operator == "") {
                updateDisplay(calculator.accumulator);
            }
             // If operandOne and operator are stored:
            if (calculator.operandOne != "" && calculator.operator != "") {
                if (calculator.accumulator == "") {
                    updateDisplay(calculator.operandOne + " " + calculator.operator);
                } else {
                    updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                }
            }
            // If operandOne is stored, but operator isn't stored (after calculation):
            if (calculator.operandOne != "" && calculator.operator == "") {
                updateDisplay(calculator.operandOne);
            }
        }
    } // End of if (decimal).

    // If key pressed is an operator:
    if (value == "/" || value == "*" || value == "+" || value == "-") {

        // Is operandOne stored? --> No
        if (calculator.operandOne == "") {
            // UNECCESSARY
            // Is accumulator empty? --> Yes
            if (calculator.accumulator == "") {
                // Leave the accumulator the same.
                calculator.accumulator = calculator.accumulator;
                // Update display.
                // // If neither operands nor operator is stored:
                if (calculator.operandOne == "" && calculator.operator == "") {
                    updateDisplay(calculator.accumulator);
                }
                 // If operandOne and operator are stored:
                if (calculator.operandOne != "" && calculator.operator != "") {
                    if (calculator.accumulator == "") {
                        updateDisplay(calculator.operandOne + " " + calculator.operator);
                    } else {
                        updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                    }
                }
                // If operandOne is stored, but operator isn't stored (after calculation):
                if (calculator.operandOne != "" && calculator.operator == "") {
                    updateDisplay(calculator.operandOne);
                }
            // Is accumualtor empty? --> No
            } else {
                // If accumaltor evaluates to any form of zero, store 0 in operandOne.
                if (Number(calculator.accumulator) == 0) {
                    calculator.operandOne = "0";
                    // If accumulator is anything other than zero, store accumulator in operandOne
                } else {
                    calculator.operandOne = calculator.accumulator;
                }
                // Store operator value.
                calculator.operator = value;
                // Reset accumulator.
                calculator.accumulator = "";
                // Update display.
                // If neither operands nor operator is stored:
                if (calculator.operandOne == "" && calculator.operator == "") {
                    updateDisplay(calculator.accumulator);
                }
                 // If operandOne and operator are stored:
                if (calculator.operandOne != "" && calculator.operator != "") {
                    if (calculator.accumulator == "") {
                        updateDisplay(calculator.operandOne + " " + calculator.operator);
                    } else {
                        updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                    }
                }
                // If operandOne is stored, but operator isn't stored (after calculation):
                if (calculator.operandOne != "" && calculator.operator == "") {
                    updateDisplay(calculator.operandOne);
                }
            }
        }

        // Is operandOne stored? --> Yes
        if (calculator.operandOne != "") {

            // Is operandTwo stored? --> No
            if (calculator.operandTwo == "") {

                // Is accumulator empty? --> Yes
                if (calculator.accumulator == "") {
                    // Store new operator.
                    calculator.operator = value;
                    // Update display.
                    // // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                     // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                }

                // Is accumulator empty? --> No
                if (calculator.accumulator != "") {
                    // Store accumulator in operandTwo.
                    calculator.operandTwo = calculator.accumulator;
                    // Run calculation and store in operandOne.
                    calculator.operandOne = calculate(calculator.operator).toString();
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // If there is a division by zero error:
                    if (calculator.operandOne === "Error: Division by Zero") {
                        // Reset operator.
                        calculator.operator = "";
                    } else {
                        // Update operator.
                        calculator.operator = value;
                    }
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                     // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                }
            }
        }
        // If there is a division by zero error:
        if (calculator.operandOne === "Error: Division by Zero") {
            // Reset operandOne (after displaying message).
            calculator.operandOne = "";
        }
    } // End of if (operator).

    // If key pressed is equals button:
    if (value == "=") {

        // Is operandOne stored? --> Yes
        if (calculator.operandOne != "") {

            // Is operator stored? --> Yes
            if (calculator.operator != "") {

                // Is accumulator empty? --> Yes
                if (calculator.accumulator == "") {
                    // Store operandOne in operandTwo.
                    calculator.operandTwo = calculator.operandOne;
                    // Run calculation and store result in operandOne.
                    calculator.operandOne = calculate(calculator.operator).toString();
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // Reset operator.
                    calculator.operator = "";
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                     // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                }

                // Is accumulator empty? --> No
                if (calculator.accumulator != "") {
                    calculator.operandTwo = calculator.accumulator;
                    // Run calculation and store result in operandOne.
                    calculator.operandOne = calculate(calculator.operator).toString();
                    // Reset operandTwo.
                    calculator.operandTwo = "";
                    // Reset operator.
                    calculator.operator = "";
                    // Reset accumulator.
                    calculator.accumulator = "";
                    // Update display.
                    // If neither operands nor operator is stored:
                    if (calculator.operandOne == "" && calculator.operator == "") {
                        updateDisplay(calculator.accumulator);
                    }
                     // If operandOne and operator are stored:
                    if (calculator.operandOne != "" && calculator.operator != "") {
                        if (calculator.accumulator == "") {
                            updateDisplay(calculator.operandOne + " " + calculator.operator);
                        } else {
                            updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                        }
                    }
                    // If operandOne is stored, but operator isn't stored (after calculation):
                    if (calculator.operandOne != "" && calculator.operator == "") {
                        updateDisplay(calculator.operandOne);
                    }
                }
            }
        }
        // If operandOne isn't stored:
        if (calculator.operandOne == "") {
            // Store accumulator in operandOne.
            calculator.operandOne = calculator.accumulator;
            // Reset accumulator.
            calculator.accumulator = "";
        }
        // If there is a divison by zero error:
        if (calculator.operandOne === "Error: Division by Zero") {
            // Reset operandOne (after displaying error message).
            calculator.operandOne = "";
            // Reset operator.
            calculator.operator = "";
        }
    } // End of if (=).

    // If key pressed is clear:
    if (value == "clear") {
        // Clear all variables.
        clearDisplay();
    } // End of it (clear).

    // If key pressed is sign-switch:
    if (value == "sign-switch") {
        // If operandOne is stored, but operator isn't: 
        if (calculator.operandOne != "" && calculator.operator == "" && calculator.accumulator == "") {
            calculator.operandOne = signSwitch(calculator.operandOne).toString();
            // If operandOne isn't stored:
        } else {
            // Pass accumulator into signSwitch() method to switch the sign.
            calculator.accumulator = signSwitch(calculator.accumulator).toString();
        }
        // Update display.
        // If neither operands nor operator is stored:
        if (calculator.operandOne == "" && calculator.operator == "") {
            updateDisplay(calculator.accumulator);
        }
         // If operandOne and operator are stored:
        if (calculator.operandOne != "" && calculator.operator != "") {
            if (calculator.accumulator == "") {
                updateDisplay(calculator.operandOne + " " + calculator.operator);
            } else {
                updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
            }
        }
        // If operandOne is stored, but operator isn't stored (after calculation):
        if (calculator.operandOne != "" && calculator.operator == "") {
            updateDisplay(calculator.operandOne);
        }
    } // End of if (sign-switch).

    // If key pressed is percentage:
    if (value == "%") {
        // Case: One number in display, no calculations have occured yet.
        if (calculator.operandOne == "" && calculator.operator == "") {
            // Calculate the percentage and store in the accumulator.
            calculator.accumulator = percentage(calculator.accumulator).toString();
            // Store accumulator in operandOne
            calculator.operandOne = calculator.accumulator;
            // Reset accumulator.
            calculator.accumulator = "";
            // Update display.
            // If neither operands nor operator is stored:
            if (calculator.operandOne == "" && calculator.operator == "") {
                updateDisplay(calculator.accumulator);
            }
             // If operandOne and operator are stored:
            if (calculator.operandOne != "" && calculator.operator != "") {
                if (calculator.accumulator == "") {
                    updateDisplay(calculator.operandOne + " " + calculator.operator);
                } else {
                    updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                }
            }
            // If operandOne is stored, but operator isn't stored (after calculation):
            if (calculator.operandOne != "" && calculator.operator == "") {
                updateDisplay(calculator.operandOne);
            }
            // Case: One number in display, calculation has occurred.
        } else if (calculator.operandOne != "" && calculator.operator == "") {
            // Calculate the percentage and store in operandOne.
            calculator.operandOne = percentage(calculator.operandOne).toString();
            // Update display.
            // If neither operands nor operator is stored:
            if (calculator.operandOne == "" && calculator.operator == "") {
                updateDisplay(calculator.accumulator);
            }
             // If operandOne and operator are stored:
            if (calculator.operandOne != "" && calculator.operator != "" ) {
                if (calculator.accumulator == "") {
                    updateDisplay(calculator.operandOne + " " + calculator.operator);
                } else {
                    updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                }
            }
            // If operandOne is stored, but operator isn't stored (after calculation):
            if (calculator.operandOne != "" && calculator.operator == "") {
                updateDisplay(calculator.operandOne);
            }
            // Case: Two numbers in display, no calculations have occured yet.
        } else if (calculator.accumulator != "0" && calculator.operator != "") {
            // Calculate percentage and store in accumulator.
            calculator.accumulator = percentage(calculator.accumulator).toString();
            // Update display.
            // If neither operands nor operator is stored:
            if (calculator.operandOne == "" && calculator.operator == "") {
                updateDisplay(calculator.accumulator);
            }
             // If operandOne and operator are stored:
            if (calculator.operandOne != "" && calculator.operator != "") {
                if (calculator.accumulator == "") {
                    updateDisplay(calculator.operandOne + " " + calculator.operator);
                } else {
                    updateDisplay(calculator.operandOne + " " + calculator.operator + " " + calculator.accumulator);
                }
            }
            // If operandOne is stored, but operator isn't stored (after calculation):
            if (calculator.operandOne != "" && calculator.operator == "") {
                updateDisplay(calculator.operandOne);
            }
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

            try {
                // If operandTwo is zero:
                if (numOperandTwo == 0) {
                    // Throw "Division by Zero" error.
                    throw "Division by Zero";
                    // If operandTwo isn't zero, compute answer. 
                } else {
                    answer = numOperandOne / numOperandTwo;
                    return answer;
                }
                // Catch block-Resets everything other than the display.
            } catch (err) {
                return "Error: " + err;
            }
    } // End of switch-case.
} // End of calculate() method.