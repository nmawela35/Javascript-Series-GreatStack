//* cloneNode() - to clone element with a new one, (true) will clone descendents or contents, false by default


let menu = document.getElementById('menu')

let newMenu = menu.cloneNode(true); 
console.log(newMenu)