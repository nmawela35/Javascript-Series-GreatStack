//* Create element, document.createElement() accepts an HTML tag name and returns a new node with the Element type

let newDiv = document.createElement("div");
newDiv.innerHTML = "<p>Welcome to GreatStack</p>";
document.body.appendChild(newDiv);
newDiv.id="new"

console.log(newDiv);
