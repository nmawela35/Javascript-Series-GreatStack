//* ParentNodes
let txt = document.querySelector(".text")
// console.log(txt.parentNode)

let parent = document.querySelector('.parent')

//* child elements

// console.log(parent.firstChild) //text, thereis space btn parent and elements
//! console.log(parent.firstElementChild)
//! console.log(parent.lastElementChild)

//!console.log(parent.childNodes)

//* Siblings

let third = document.querySelector(".third")
console.log(third.previousElementSibling)
console.log(third.nextElementSibling)