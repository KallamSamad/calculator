const calc = document.createElement("div")
document.body.appendChild(calc)

const buttonCont = document.createElement("div")
calc.appendChild(buttonCont)

for (let x=0; x<11; x++){
    const numbers = document.createElement("button")
    numbers.classList.add("numberBtns")
    buttonCont.appendChild(numbers)
}
