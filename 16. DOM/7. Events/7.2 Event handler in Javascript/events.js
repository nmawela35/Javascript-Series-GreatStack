//* Events - Action that occurs in the browser

let btn = document.getElementById('Btn')

btn.onclick = function(){
    // console.log("button clicked 2")
    console.log(this.className)
}

//! remove event handler

btn.onclick = null