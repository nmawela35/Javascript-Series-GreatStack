
//!Arithmetic Operators - perform mathematical operations

//*addition
// let sum = 5 + 3;
// console.log({sum})

//*subtraction
// let subtraction = 5 - 3;
// console.log({subtraction})

//*multiplication
// let multiplication = 5 * 3;
// console.log({multiplication})

//*division
// let division = (53 / 3);
// console.log({division})

//*modulus - 
// let remainder = 15 %4
// console.log({remainder})

//*exponentiation
// let exponentiation = 3**3
// console.log({exponentiation})


//!Assignment Operators

//* addition assignment
// var x =5;
// x+=7
// console.log(x); //x+7

//*subtraction assignment
// let x = 10;
// x -= 8
// console.log(x)

//*multiplication assignment
// let x = 10;
// x *= 8
// console.log(x)

//*division assignment
// let x = 100;
// x /= 2
// console.log(x)

//*modulus assignment
// let x =10;
// x %= 3;
// console.log(x);

//*multiplication assignment
// let x = 5;
// x **=3;
// console.log(x);

//*division assignment
// let x = 15;
// x /=3;
// console.log(x);

//!Increment / decrement Operator

//*prefix increment
// let a = 10;
// console.log(++a) //11 ie. 10+1 increased before it is used
// console.log(a) //11 

//*prefix decrement
// let a = 20;
// console.log(--a) //19  decreased before it is used
// console.log(a) //19 ie. a-1,

//* postfix increment
// a = 15;
// console.log(a++) //15, value used before incremented
// console.log(a) //16 ie. 15+1 updated value

//* post-fixed decrement
// a = 7;
// console.log(a--) //7,  value used before incremented
// console.log(a) //6 ie. 7-1  updated value

//!Comparison Operators -true/false
// let a =10;
// let b = 20;

// console.log(a<b) //true
// console.log(a>b) //false
// console.log(a <=b) //true
// console.log(a >=b) //false

// console.log(a == b) //false
// console.log(a != b) //true

// console.log(a === b) //false
// console.log(a !== b) //true

//!Logical Operators

//* && both operands must be true
// let x = 5;
// let y = 10;

// console.log(x > 0 && y > 0) //true
// console.log(x > 0 && y < 0) //false
// console.log(x < 0 && y > 0) //false
// console.log(x < 0 && y < 0) //false

//* || - one of the operands is true
// let a = 5;
// let b = 10;

// console.log(a > 0 || b > 0) //true
// console.log(a > 0 || b < 0) //true
// console.log(a < 0 || b > 0) //true
// console.log(a < 0 || b < 0) //false

//* ! Logical NOT - convert operator to boolean and returns flipped value
let YES = true;
let NO =false;
let x = 5;
let emptyString =""
let nothing =null
let notAssigned = undefined;

console.log(!YES); //false
console.log(!NO)    //true
console.log(!x) //false
console.log(!emptyString) //true
console.log(!nothing) //true
console.log(!notAssigned) //true

//!String Operators
