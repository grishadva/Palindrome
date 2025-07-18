const form = document.forms[0];
const input = form.elements[0];
let valueOld = input.value;
function FalsePalindrome() {
    let element = document.body.querySelector('.FalseContainer');
    element.style.display = 'block';
    let Exit = document.body.querySelector('.FalseContainer__Exit');
    Exit.onclick = function() {
        element.style.display = 'none';
        
    }
}
function CheckPalindrome(event) {
    event.preventDefault();
    let number = input.value;
    let nFalse = true;

    number = number.split('');
    
    for (let index = 0; index < number.length; index++) {
        if (Number(number[index]) !== Number(number[number.length - 1 - index])) {
            nFalse = false;
        } 
    }
    if (nFalse) {
        let element = document.body.querySelector('.Container');
        element.style.display = 'flex';
        setTimeout(() => {
            element.style.display = 'none';
        }, 3000);
    } else {
        FalsePalindrome();
    }
}
    



form.addEventListener('submit', CheckPalindrome);



