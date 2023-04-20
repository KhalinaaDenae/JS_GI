// Write a program to tell if someone is shouting (typing in all caps), whispering (typing in all lowercase), or neither. Use prompt to get user input, and then console log whether the user was shouting, whispering, or talking normally.
function determineCase(input){
    if (input === input.toUpperCase()){
        return "shouting"
    } else if (input === input.toLowerCase()){
        return "whispering"
    } else {
        return "neither all caps or all lowercase"
    }
}

const userInput = prompt("enter your text")
const caseType = determineCase(userInput)

console.log(`the input ${userInput} is ${caseType}`)