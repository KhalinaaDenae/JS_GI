//  Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"


function calculate(num1, operator, num2){
    let result;
    if (operator === "+" ){
           result = num1 + num2
    } else if (operator === "-"){
     result = num1 - num2  
    } else if (operator === "*") {
       result = num1 * num2
    } else if (operator === "/"){
        result = num1 / num2
    }
    return `${num1} ${operator} ${num2} = ${result}` 
}


const num1 = parseInt(prompt("enter your first number"))
const operator = prompt("operator")
const num2 = parseInt(prompt("enter your second number"))
const result = calculate(num1, operator, num2)


console.log(result)
