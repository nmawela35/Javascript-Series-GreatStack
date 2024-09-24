//* className - returns a list of classes separated by space, can use it to add new class, use += to add to existing classes


let title = document.getElementById('title')

// title.className = "new" //overrides existing classes

title.className += " new"; //!keep existing classes, add space before before new class name

console.log(title)