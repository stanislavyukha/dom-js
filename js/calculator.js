document.querySelectorAll('.calculator .digits')
    .forEach( button => button.addEventListener('click', digitPressed) );
function digitPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    display.value += btn.innerText;
    if (display.value.length > 12) display.style.fontSize = '20px';
}
document.querySelectorAll('.calculator .operators')
    .forEach( button => button.addEventListener('click', operatorPressed) );
function operatorPressed(ev) {
    const btn = ev.target;
    const display = document.querySelector('.display');
    let lastChar = display.value.charAt(display.value.length - 1);
    lastChar = parseInt(check,10);
    if (btn.innerText != display.value.charAt(display.value.length - 1) && Number.isNaN(lastChar) === true) {
        display.value = display.value.replace(/.$/, btn.innerText);
    }
    else if (btn.innerText === "√х")  display.value = Math.sqrt(display.value);
    else if (btn.innerText === "х²") display.value = (Math.pow(display.value, 2));
    else if (btn.innerText === "x³") display.value = (Math.pow(display.value, 3));
    else if (btn.innerText === "1/x" && display.value != '0') display.value = (1 / display.value);
    else if (btn.innerText === "%") display.value = display.value + '/100';
    else if (btn.innerText === display.value.charAt(display.value.length-1)) display.value +='';
    else display.value += btn.innerText;
     if (display.value.length > 12) display.style.fontSize = '20px';
    
}

document.querySelector('.calculator .eq').addEventListener('click', eqPressed);
function eqPressed() {
    const display = document.querySelector('.display');
    if (eval(display.value) == 'Infinity') display.value = 'Не дозволено';
    if (eval(display.value) - eval(display.value).toFixed(2) != 0) {
        display.value = eval(display.value).toFixed(6);
    }
    else display.value = eval(display.value);
    
    display.style.fontSize = '40px'
}

document.querySelector('.calculator .clear').addEventListener('click', clearPressed);
function clearPressed() {
    const display = document.querySelector('.display');
    display.value = '';
    display.style.fontSize = '40px';
}

document.querySelector('.calculator .adjust').addEventListener('click', adjustPressed);
function adjustPressed() {
    const display = document.querySelector('.display');
    const array = display.value.split('');
    console.log(array);
    array.pop();
    display.value = array.join('');
    
}


