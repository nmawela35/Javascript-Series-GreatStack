//* inset one or more nodes after the element

let menu = document.getElementById('menu')

let para = document.createElement("p")
menu.after(para)
para.textContent = "Hi Chris"
