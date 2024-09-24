//* classList - returns a collecton  of CSS classes, to remove, add new class

let title = document.getElementById('title')

//! add a new class
title.classList.add("newclass","anotherclass")
console.log(title.classList)

console.log(title)

//! remove a class

title.classList.remove("main", "newclass","second")

console.log(title)

//! replace a class
title.classList.replace("anotherclass","master")

console.log(title)

//! check if a class is available, returns true/false
console.log(title.classList.contains("anotherclass"))
console.log(title.classList.contains("master"))

//! toggle, remove class if exist, or add if doesn't exist

title.classList.toggle("master")
title.classList.toggle("master")
title.classList.toggle("main")

console.log(title)



