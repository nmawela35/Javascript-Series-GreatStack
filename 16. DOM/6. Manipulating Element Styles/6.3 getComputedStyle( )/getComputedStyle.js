//* getComputedStyle(), window object, read all CSS properties of an element

//! syntax: window.getComputedStyle(element, pseudoElement)

let inputBox = document.getElementById('csstext')

let styles = window.getComputedStyle(inputBox)

console.log(styles.fontFamily)
console.log(styles.fontSize)
console.log(styles.width)