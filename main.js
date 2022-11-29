

var displayValue = ""
var previousNum = ''
var operator = ''
let equation = (previousNum, operator, displayValue )

// clear function

document.getElementById("clearbtn").onclick = function () {clear()};
function clear() { 
    answer.innerHTML = ''
    previous.innerHTML = ''
    displayValue = ''
    previousNum = ''
    operator = ''
    console.log('youcleared')
}

//remove function

document.getElementById("removebtn").onclick = function() { 
    displayValue = Math.floor(displayValue / 10);
    answer.innerHTML = displayValue;
}




// display numbers on screen and add to display value
const screen = document.getElementById("answer")
const allNumberButtons = document.getElementsByClassName('buttonNum');

Array.prototype.forEach.call(allNumberButtons, (e) => e.addEventListener('click', () => answer.innerHTML += e.innerHTML));
Array.prototype.forEach.call(allNumberButtons, (e) => e.addEventListener('click', () => displayValue += e.innerHTML));


// when operator button is is clicked: 
    //store id=answer as previous number
    //

const allFunButtons = document.getElementsByClassName('buttonFun');

Array.prototype.forEach.call(allFunButtons, (e) => e.addEventListener('click', () => {  
    if (displayValue == '') {
        return
    } else 
    previousNum = displayValue
    previous.innerHTML = previousNum;
    displayValue = ''
    answer.innerHTML = ''
    operator = e.innerHTML  //is there another way to feth the operator so i can use the real math signs in the html??
}))

    


    /* document.getElementById("button/").onclick = function() {
        if (displayValue == '') {
            return
        } else 
        previousNum = displayValue
        previous.innerHTML = previousNum;
        displayValue = ''
        answer.innerHTML = ''
        operator = "/"
        
        console.log('prev' + previousNum + 'disp' + displayValue + 'oper' + operator)
    };
*/


//point button 
document.getElementById("button.").onclick = function() { 
    if ((displayValue.includes('.')) || (displayValue == '')) { return }
    else 
    {displayValue += '.';
    answer.innerHTML += '.'; 
}}








 //operator function
 document.getElementById("button=").onclick = function() { 
     if (operator == '/') {
        displayValue = (previousNum / displayValue);
        answer.innerHTML = displayValue;

    }
    else if (operator == '*') { 
        displayValue = (previousNum * displayValue);
        answer.innerHTML = displayValue;
    }
    else if (operator == '+') { 
        displayValue = parseFloat(previousNum) + parseFloat(displayValue);
        answer.innerHTML = displayValue;
    }
    else if (operator == '-') { 
        displayValue = parseFloat(previousNum) - parseFloat(displayValue);
        answer.innerHTML = displayValue;
    }

}


// add keyboard button function 

document.addEventListener('keypress', (e) => { 
    if (e.key == 1) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 2) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 3) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 4) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 5) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 6) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 7) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 8) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 9) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == 0) { displayValue += e.key; answer.innerHTML += e.key;}
    else if (e.key == '.') { 
        if ((displayValue.includes('.')) || (displayValue == '')) { return }
        else 
        {displayValue += '.';
        answer.innerHTML += '.'; 
    }}
    else if (e.key == 'Enter') {  
        if (operator == '/') {
           displayValue = (previousNum / displayValue);
           answer.innerHTML = displayValue;
   
       }
       else if (operator == '*') { 
           displayValue = (previousNum * displayValue);
           answer.innerHTML = displayValue;
       }
       else if (operator == '+') { 
           displayValue = parseFloat(previousNum) + parseFloat(displayValue);
           answer.innerHTML = displayValue;
       }
       else if (operator == '-') { 
           displayValue = parseFloat(previousNum) - parseFloat(displayValue);
           answer.innerHTML = displayValue;
       }}
       else if (e.key == 'Backspace') {  
        displayValue = Math.floor(displayValue / 10);
        answer.innerHTML = displayValue;}
    else { return }
})


