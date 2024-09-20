//! Used to repeat a block of code

//* for loop

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//! Array and for loop
// let languages = ["JS", "Python", "C++"];

// for (let i = 0; i < languages.length; i++) {
//   console.log(i,languages[i]);
// }

//! Loop inside a loop

// for (let i = 1; i <= 5; i++){
//     console.log(i)

//     for (let j = 1; j <= 3; j++){
//         console.log({j})
//     }
// }

//* While loop

// let i =0;

// while (i <= 10){
//     console.log(i)
//     i++
// }

//* do...while loop - executes first and the checks the condition
// let i =10;

// do {
//     console.log(i)
//     i++;
   
// } while (i <=10)

//*break/continue 

//!break terminates the loop immediately
// for (let i = 1; i <= 5; i++){
//     if (i==4)
//         break;
//     console.log(i + " Break")
// }

//!continue skips the current iteration
for (let i = 1; i <= 5; i++){
    if (i==1)
        continue;
    console.log(i + " Continue")
}

