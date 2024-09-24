//* cssText, will override current CSS styles, otherwise concatenate += to add to current styles

let inputBox = document.getElementById('csstext')

inputBox.style.cssText += "width:200px; font-size:32px; height:30px"

console.log(inputBox)