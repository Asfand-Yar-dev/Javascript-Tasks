const prompt = require("prompt-sync")({ sigint: true });
let operation = prompt("Enter Operation (+, -, /, *):");
let num1 =parseInt(prompt("Enter 1st number:"));
let num2 = parseInt(prompt("Enter 2nd number:"));

let result;

switch(operation){
    case '+':
        result = num1 + num2;
        break;
    case '-':
        result = num1 - num2;
        break;
    case '/':
        if (num2 !==0){
            result = num1 / num2;
    }
        else{
            result = "Error";
    }
    break;
    case '*':
        result = num1 * num2;
        break;
    case '%':
    result = num1 % num2;
    break;
    default:
    result = "Invalid operation";
    break;
}

alert("Result: " + result)