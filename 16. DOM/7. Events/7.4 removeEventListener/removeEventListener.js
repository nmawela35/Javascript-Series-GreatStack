//* 2 removeEventListener - use external named function, not anonymous

let btn = document.getElementById('Btn')


function displayMsg(){
    console.log("Display Message")
}

btn.addEventListener('click', displayMsg)

btn.removeEventListener('click',displayMsg)



