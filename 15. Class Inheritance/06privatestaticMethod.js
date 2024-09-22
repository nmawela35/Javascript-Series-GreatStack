
class Person{
    constructor(firstName,lastName){
        this.firstName = firstName;
        this.lastName = lastName
    }

   static #fullName(x){
        return `${x.firstName}  ${x.lastName}`
    }

    display(){
        console.log(Person.#fullName(this))
    }
}

const person1 = new Person("Chris", "Mulaudzi")
person1.display()