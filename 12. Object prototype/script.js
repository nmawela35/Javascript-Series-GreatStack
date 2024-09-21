//! Objects have an additional property called prototype

//!Prototype Inheritence
//* Prototype has its own prototype creating a prototype chain
//* Can use prototype to add properties and methods to a constructor function
//* Objects inherit properties and methods from a prototype

function Person(fname,lname){
    this.firstName =fname
    this.lastName =lname
}

Person.prototype.age ="35" //won't be able on new objects
Person.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const person1 = new Person("Chris","Mawela")

const person2 = new Person("Elon","Musk")
console.log(person1)
console.log(person1.age) //will only display
console.log(person1.getFullName()) //will only display
console.log(person2.getFullName())