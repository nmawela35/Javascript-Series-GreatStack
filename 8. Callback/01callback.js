//! Callback - function passed as an argument to another function

function display(result){
    console.log(result)
}

function add( num1,num2,myCallback){
    let sum = num1 + num2;
    myCallback(sum)
}

// console.log(add(105,15,display)) //prints sum and undefined, wrong approach.
add(65,75,display)