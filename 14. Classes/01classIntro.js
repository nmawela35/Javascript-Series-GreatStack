//! JAVASCRIPT CLASSES

//*JavaScript Classes - a template for creating Objects
class Person {
    constructor(name,age){
        this.firstName = name;
        this.age = age;
    }

    greet(){
        return "Hello " + this.firstName
    }
    changeName(newName){
        this.firstName = newName;
    }
}

const person1 = new Person("Chris",55)
const person2 = new Person("Ndivhudza",65)

// console.log({person1})
// console.log(person1.greet())
// console.log(person2.greet())

person1.changeName("Mavin");

console.log(person1)
console.log(person1.greet())