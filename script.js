function add(a, b){
    return (parseInt(a) + parseInt(b))
}
function subtract(a, b){
    return (a - b)
}
function divide(a, b){
    if(b === 0){
        prompt("You can't divide by zero dummy")
        return 0
    } else{
        return (a / b)
    }
}
function multiply(a, b){
    console.log (a,b)
    return a * b
}

function operator(a, b, op){
    switch(op){
        case "-":
            return subtract(a,b)
        case "+":
            return add(a,b)
        case "x":
            return multiply(a,b)
        case "÷":
        return divide(a, b)
    }
}
let firstNumber 
let operation
let secondNumber

const numbersBtn = document.querySelectorAll(".data-number")
const operatorBtn = document.querySelectorAll(".operator")
const displayNumber = document.querySelector('p')
const clearBtn = document.querySelector("#clearBtn")
const equal = document.querySelector("#equalBtn")

clearBtn.addEventListener('click', () => displayNumber.innerText ="")
numbersBtn.forEach(button => {
    button.addEventListener('click',()=>{
        displayNumber.append(button.innerText);
/*         displayNumber.updateDisplay();
 */    })
})
console.log(operatorBtn)
operatorBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        firstNumber = displayNumber.innerHTML
        operation = button.innerHTML 
        displayNumber.innerText = ""
        console.log(firstNumber)
    })
})
equal.addEventListener('click', () => {
    console.log(firstNumber, operation)
        let operationResult = operator(firstNumber, displayNumber.innerText, operation)
        console.log(operationResult)
        displayNumber.innerHTML = operationResult
    
})