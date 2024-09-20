//! FUNCTIONS

//*PARAMETERS AND ARGUMENTS

//*  Parameters are variables declared in the function definition
//*  Arguments are value passed to the function when it is called

// function greet(firstName,lastName){
//     console.log(`Hello ${firstName} ${lastName}`)
// }
// greet("Chris", "Mawela")

//* default parameter - if an argument is not passed to the function, default value will be used.
// function greet(firstName= "Ndivhudza",lastName = "Masindi"){
//     console.log(`Hello ${firstName} ${lastName}`)
// }
// greet("Chris")
// greet()

// function sum (x,y=20){
//     console.log(x+y) 
// }
// // sum(50) //Nan, number + undefined
// sum(50) //70, assigned y=20 as default parameter

//*Return - can be used to return a value when a function is called, the function is ende, any code after return is not executed

// function add(x,y){
//     return x+y;
// }

// const result =add(50,100)
// console.log({result})

//* function can return another function

function sum(a) {
    function add(b){
        return a + b;
    }
    return add;
}

let result = sum(55)
console.log(result)

console.log(result(45))