let  theSwitch = false, operator = '', firstNumber = '', secondNumber = ''; 

const number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
const operators = ['+', '-', '*', '/'];

const display = document.getElementsByClassName('display-input')[0];

function clearDisplay() {
    firstNumber = '';
    secondNumber = '';
    operator = ''
    theSwitch = false;
    display.innerHTML = 0
    console.log('Clear display')
}

function changeMinus() {
    if (display.innerHTML.charAt(0) === '-') {
        if (firstNumber !== '' ) {
            display.innerHTML = `${Number(display.innerHTML) * (-1)}`
            
        }    
    }
    else {
        display.innerHTML = `-${display.innerHTML}`
    }
}

function addButtons(button) {
    console.log(`Add on display - ${button}`)
    if (number.includes(button)) {
        if (secondNumber === '' && operator === '') {
            firstNumber += button;
            display.innerHTML = firstNumber;
        }
        else if (firstNumber !== '' && secondNumber !== '' && theSwitch) {
            secondNumber = button;
            theSwitch = false;
            display.innerHTML = secondNumber;
        }
        else {
            secondNumber += button;
            display.innerHTML = secondNumber;
        }
        console.log(firstNumber, secondNumber, operator)
        return;
    }

    if (operators.includes(button)) {
        operator = button;
        return;
    }

    if (button === '=') { 
        if (secondNumber === '') { 
            secondNumber = firstNumber;
        }

        switch (operator) {
            case '+':
                firstNumber = Number(firstNumber) + Number(secondNumber);
                break;
            case '-':
                firstNumber = Number(firstNumber) - Number(secondNumber);
                break;
            case '*':
                firstNumber = Number(firstNumber) * Number(secondNumber);
                break;
            case '/':
                if (secondNumber === '0') {
                    display.innerHTML = 'Ошибка'
                    firstNumber = '';
                    secondNumber = '';
                    operator = '';
                    return;
                }
                firstNumber = firstNumber / secondNumber;
                break;         
        }
    }

    theSwitch = true;
    display.innerHTML = firstNumber;
}