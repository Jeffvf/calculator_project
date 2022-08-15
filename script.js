const add = (a,b) => a + b;

const subtract = (a,b) => a - b;

const multiply = (a,b) => a * b;

const divide = (a,b) => a / b;

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
        return 'Invalid operator'
    }
};

let operator, num;

function populateDisplay(e){
    const spn = document.querySelector("#display");

    spn.textContent += e.srcElement.innerHTML;
}

const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener('click', populateDisplay));