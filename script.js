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

let operator = "";
const array = []

function populateDisplay(e){
    const spn = document.querySelector("#display");

    if(e.srcElement.value == 'Clear'){
        operator = "";
        array.length = 0;
        spn.textContent = '';
    }
    else if(e.srcElement.value == 'Delete' && spn.textContent){
        spn.textContent = spn.textContent.slice(0, -1);
    }
    else if(e.srcElement.value == 'operator'){
        operator = e.srcElement.name;
        array[array.length] = spn.textContent;
        spn.textContent = '';
    }
    else if(e.srcElement.value == "equals"){
        array[array.length] = spn.textContent;
        console.log(array[0], array[1], operator);

        if(array.length == 2 && operator){
            let result = operate(operator, parseFloat(array[0]), parseFloat(array[1]));
            spn.textContent = result;
            
            operator = "";
            array.length = 0;
        }
    }
    else{
        spn.textContent += e.srcElement.innerHTML;
    }

}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', populateDisplay));