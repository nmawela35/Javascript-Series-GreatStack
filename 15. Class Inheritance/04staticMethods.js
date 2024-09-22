//! Static methods are bound to a class, not instances of that class, you cannot call a static method on an object, may pass an object as a parameter

class Person{
    constructor(name){
        this.name = name
    }
   static greet(x){
        console.log("Hello " + x.name )
    }
}

const person1 = new Person("Chris Mawela")

Person.greet(person1)
