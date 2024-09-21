//! Recursive functiona is a function that calls itself

// function myFunction(){
//     console.log("recursive function")
//     myFunction();
// }
// myFunction()

function countDown(num){
    console.log(num)
    num--;
   if (num >=0){
    countDown(num)
   }
}
countDown(10)