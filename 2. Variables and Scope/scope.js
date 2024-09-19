//! Scope in Javascript

//* Global Scope

// var $x = "hello Chris";
// let _y = "Ndivhudza"

// const example =() =>{
//     console.log($x)
//     console.log(_y)
// }
// example();
// console.log($x)
// console.log(_y)


//* Function Scope

// const example =() =>{
//   var fs ="Hi Chris"
//   console.log(fs)
// }
// example();
// console.log(fs) declared inside a function, Error

//* Block Scope
function Example(){
    if (true){
        var bv= "GreatStack"
        console.log(bv)
    }
    // console.log(bv) wont work, declared in {}
}
Example()
// console.log(bv) 


