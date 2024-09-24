//* prepend() - will add new nodes as the first child to parent node

//! element.insertAdjacentHTML(position, text), postion can be beforeBegin, afterBegin, beforeEnd, afterEnd

let menu = document.getElementById('menu')

menu.insertAdjacentHTML("beforebegin", "<p>injected by insertAdjacentHTML</p>")
menu.insertAdjacentHTML("beforeend", "<li>injected by insertAdjacentHTML</li>")
