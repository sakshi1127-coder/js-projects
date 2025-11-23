let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /, %, **):");
let result; // define variable

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 === 0) {
        result = "Error: Division by zero not allowed!";
    } else {
        result = num1 / num2;
    }
} else if (operator === "%") {
    result = num1 % num2;
} else if (operator === "**") {
    result = num1 ** num2;
} else {
    result = "Invalid operator!";
}

console.log("Result:", result);
document.write("Result: " + result);
