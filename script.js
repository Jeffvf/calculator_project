const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => b != 0 ? a / b : "Error! Can't divide by zero";

const operate = (operator, a, b) => {
    if(operator == '+'){
        return add(a,b);
    }

    else if(operator == '-'){
        return subtract(a,b);
    }

    else if(operator == '*'){
        return multiply(a,b);
    }

    else if(operator == '/'){
        return divide(a,b);
    }

    else{
        return 'Invalid operator';
    }
};

const operator = [];
const array = [];
let dotCounter = 0;

function resetVariables(){
    operator.length = 0;
    array.length = 0;
    dotCounter = 0;
}

function populateDisplay(e){
    const spn = document.querySelector("#display");
    const total = document.querySelector("#total");

    if(e.srcElement.value == 'Clear'){
        resetVariables();
        spn.textContent = '';
        total.textContent = '';
    }
    else if(e.srcElement.value == 'Delete' && spn.textContent){
        spn.textContent = spn.textContent.slice(0, -1);
    }
    else if(e.srcElement.value == 'operator'){
        if(spn.textContent != ''){
            operator[operator.length] = e.srcElement.name;
            array[array.length] = spn.textContent;
        }
        spn.textContent = '';
        dotCounter = 0;
    }
    else if(e.srcElement.value == "equals"){
        array[array.length] = spn.textContent;

        if(array.length == 2 && operator.length && spn.textContent != ''){
            let result = operate(operator.shift(), parseFloat(array[0]), parseFloat(array[1]));
            total.textContent = result;
            
            array.length = 0;
            array[0] = result;
        }
        spn.textContent = '';
    }
    else if(e.srcElement.value == "dot"){
        if(!dotCounter){
            spn.textContent += e.srcElement.innerHTML;
            dotCounter++;
        }
    }
    else{
        spn.textContent += e.srcElement.innerHTML;
    }

    if(array.length == 2 && operator.length){
        let result = operate(operator.shift(), parseFloat(array[0]), parseFloat(array[1]));
        total.textContent = result;

        array.length = 0;
        array[0] = result;
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', populateDisplay));