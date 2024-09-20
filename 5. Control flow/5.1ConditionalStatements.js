
//! Conditional Statements

//* if - if condition is true

// if (true){
//     console.log("Execute")
// }

//* if else - if a block of code if condition is true and another if is false, else executed no matter what

// let age =17;

// if (age < 20){
//     console.log("Less than 20")
// } else {
//     console.log("More or 20")
// }

//* else if

// let age =19;

// if (age >= 18){
//     console.log("You are an adult")

// } else if (age >=16) {
//     console.log("You are a teenager")

// } else  {
//     console.log("You are minor")
// }

//* Switch - execute a block of code based on the value of an expression

// let value;

// switch (typeof value){
    
//     case "number":
//         console.log("number")
//         break;

//     case "string":
//         console.log("String")
//         break;

//     case "boolean":
//         console.log("Boolean")
//         break;
//     case "object":
//         console.log("Object")
//         break;

//     case "undefined":
//     console.log("undefined")
//     break;

//     default: 
//         console.log("Other")
// }

// let age =6;

// switch (true){
//     case (age >= 16 ):
//         console.log("Minor")
//         break
//     case (age >=18):
//         console.log("teenager")
//         break;

//     case ( age >=21):
//         console.log("Adult")

//     default:
//         console.log("Very young")
// }

// let dayName =3;

// switch (dayName) {
//     case 1: 
//     dayName ="Monday";
//     break;

//     case 2: 
//     dayName ="Tuesday";
//     break;

//     case 3: 
//     dayName ="Wednesday";
//     break;

//     default:
//         dayName = "Enter dayName"
// }
// console.log(dayName)

//* Ternary Operator

let age =18;

let message =(age >= 18) ? "You are Adult": "You are Minor"

console.log(message)
