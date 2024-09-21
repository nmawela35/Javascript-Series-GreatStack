//! Javascipt method is a method property that contains a function definition

//* Declare function inside a method
// const person ={
//     name: "Chris",
//     lastName: "Mawela",
//     fn: function greet(){
//         console.log("Hello Chris")
//     }
// }
// // person.fn()
// person["fn"]()

//* Declare function outside a method
// const person ={
//     name: "Chris",
//     lastName: "Mawela",

// }

// function greet(){
//     console.log("Hello Chris")
// }
// person.fn = greet;
// // console.log(person)
// person.fn() //result "Hello Chris"

//* Declare function inside a method, another options

const person ={
    name: "Chris",
    lastName: "Mawela",
    greet(){
        console.log("Hi Ndivhudza")
    }
}
person.greet()