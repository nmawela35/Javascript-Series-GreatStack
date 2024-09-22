//! Private methods # are only accessible within the class, you cannot call the method outside the class, by default methods are public.

class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }
    #fullName(){
        return `${this.firstName}  ${this.lastName}`
    }
    display(){
        console.log(this.#fullName())
    }
}

const person1 = new Person("Chris", "Mawela")
person1.display()