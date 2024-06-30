
// define a variable
let name = "pedro";
console.log(name);

let firstName = "pedro";
let lastName = "garcia";
console.log(firstName, lastName);

let interestRate = 0.3;
interestRate = 1;
console.log(interestRate);

const changeRate = 0.1;
console.log(changeRate)



const display = document.getElementById('display');
function appendToDisplay(input){
    display.value += input
}
function clearDisplay(){
    display.value = ''
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Error";
    }
}