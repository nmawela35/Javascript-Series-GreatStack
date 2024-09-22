//! Class expression - alternative way to define a new class

let Person = class {
    constructor(name){
        this.firstName =name
    }
    getName(){
        return this.firstName
    }
}

const person1 =new Person("Chris Mawela")

console.log(person1.getName())