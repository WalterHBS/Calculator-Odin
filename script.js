function add(a, b){
    console.log(a, b)
    return (parseFloat(a) + parseFloat(b))
}
function subtract(a, b){
    return (a - b)
}
function divide(a, b){
    if(b == 0){
        alert("You can't divide by zero dummy")
        return 0
    } else{
        return (a / b)
    }
}
function multiply(a, b){
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
function isInt(n){
        return n % 1 === 0; 
}

let firstNumber 
let operation
let secondNumber

const numbersBtn = document.querySelectorAll(".data-number")
const operatorBtn = document.querySelectorAll(".operator")
const displayNumber = document.querySelector('p')
const clearBtn = document.querySelector("#clearBtn")
const equal = document.querySelector("#equalBtn")
const dot = document.querySelector(".dot-number")
const deleteBtn = document.querySelector("#deleteBtn")

deleteBtn.addEventListener('click', () => {
    if(displayNumber.innerHTML != ""){
       let delNum = displayNumber.innerHTML.slice(0, -1)
       displayNumber.innerHTML = delNum
    }
})
clearBtn.addEventListener('click', () => {
    firstNumber = undefined
    operation = undefined
    secondNumber = undefined
    displayNumber.innerText =""
})
numbersBtn.forEach(button => {
    button.addEventListener('click',()=>{
        if(secondNumber == true){
            displayNumber.innerText = "";
            displayNumber.append(button.innerText)
            secondNumber = false
        }else{displayNumber.append(button.innerText);}
  })
  
})
dot.addEventListener('click', () => {
    if (displayNumber.innerHTML.indexOf(".") != -1){}
    else{displayNumber.append(dot.innerHTML)}
    
  })
operatorBtn.forEach(button => {
    button.addEventListener('click', ()=> {
        if(operation != undefined ){
            let newFirstNumber = operator(firstNumber, displayNumber.innerText, operation)
            displayNumber.innerHTML = newFirstNumber
            firstNumber = newFirstNumber
            operation = button.innerHTML
            secondNumber = true
        }else{
        firstNumber = displayNumber.innerHTML
        operation = button.innerHTML 
        displayNumber.innerText = ""
        }
        
    })
})
equal.addEventListener('click', () => {
    let operationResult = operator(firstNumber, displayNumber.innerText, operation)
       if(displayNumber.innerHTML == ""){
        displayNumber.innerHTML = ""
       } else if(isInt(operationResult)){
            displayNumber.innerHTML = operationResult
        }else{
            displayNumber.innerHTML = operationResult.toFixed(2)
        }
    
})