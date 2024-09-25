//* AddEventListener(event,function,useCapture) - useCapture optional, by default it is false, its a boolean

let btn = document.getElementById('Btn')

btn.addEventListener('click', displayMsg)

function displayMsg(){
    console.log("Display Message")
}