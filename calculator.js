let operators = ["x","+","-","÷"]

const outer = document.createElement("div")
outer.classList.add("outer")
document.body.appendChild(outer)

const calc = document.createElement("div")
calc.classList.add("calc")
outer.appendChild(calc)


const buttonCont = document.createElement("div")
buttonCont.classList.add("buttonCont")
calc.appendChild(buttonCont)


const numberWrapper = document.createElement("div");
numberWrapper.classList.add("numberWrapper");
buttonCont.appendChild(numberWrapper);


const numberCont = document.createElement("div")
numberCont.classList.add("numberCont")
buttonCont.appendChild(numberCont)


const bottomCont = document.createElement("div")
bottomCont.classList.add("bottomCont")
buttonCont.appendChild(bottomCont)

const zeroBtn = document.createElement("button")
zeroBtn.textContent = "0"
zeroBtn.classList.add("numberBtns")
bottomCont.appendChild(zeroBtn)

const equalBtn = document.createElement("button")
equalBtn.textContent = "="
equalBtn.classList.add("operator")
bottomCont.appendChild(equalBtn)

numberWrapper.appendChild(numberCont);
numberWrapper.appendChild(bottomCont);



for (let x=1; x<10; x++){
    const numbers = document.createElement("button")
    numbers.textContent= `${x}`
    numbers.classList.add("numberBtns")
    numberCont.appendChild(numbers)
}

const operatorCont =document.createElement("div")
operatorCont.classList.add("operatorCont")
buttonCont.appendChild(operatorCont)

for (let x=0; x<4;x++){
    const operator=document.createElement("button")
    operator.classList.add("operator")
    operator.textContent = `${operators[x]}`
    operatorCont.appendChild(operator)
}