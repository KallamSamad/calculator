let operators = ["x","+","-","÷"]
let a = null;
let b = null;
let operator = null;


const outer = document.createElement("div")
outer.classList.add("outer")
document.body.appendChild(outer)

const calc = document.createElement("div")
calc.classList.add("calc")
outer.appendChild(calc)

const input = document.createElement("div")
input.classList.add("textBox");
calc.prepend(input);



const buttonCont = document.createElement("div")
buttonCont.classList.add("buttonCont")
calc.appendChild(buttonCont)
calc.insertBefore(input, buttonCont);

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
equalBtn.classList.add("equal")
bottomCont.appendChild(equalBtn)

const acBtn = document.createElement("button");
acBtn.textContent = "AC";
acBtn.classList.add("ac");
bottomCont.appendChild(acBtn);

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
const numberButton = document.querySelectorAll(".numberBtns");
const operatorButton = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const acButton = document.querySelector(".ac");    


function operation(a,b,operator){
    if (operator==="+"){
        return a+b
    }
    if (operator==="-"){
        return a-b
    }
    if (operator==="÷"){
        return a/b
    }
    if (operator==="x"){
        return a*b
    }
}


numberButton.forEach(btn => {
    btn.onclick = () => {
        if (operator === null) {
            a = a === null ? Number(btn.textContent) : a * 10 + Number(btn.textContent);
        } else {
            b = b === null ? Number(btn.textContent) : b * 10 + Number(btn.textContent);
        }
        input.innerHTML = a + (operator || "") + (b || "");
    };
});


operatorButton.forEach(op => {
    op.onclick = () => {
        if (b !== null) { 
            a = operation(a, b, operator);
            b = null;
        }
        operator = op.textContent;
        input.innerHTML = a + operator;
    };
});

acButton.onclick = () => {
    a = null;
    b = null;
    operator = null;
    input.innerHTML = "";
};