//*Getter and Setters

class Person {
    constructor(name,age){
        this.firstName = name;
        this.age = age;
    }

   get greet(){
        return "Hello " + this.firstName
    }
    set changeName(newName){
        this.firstName = newName;
    }

    set changeAge(newAge){
        this.age = newAge
    }
    get personAge(){
        return this.age
    }
}

const person1 = new Person("Sky", 65)

console.log(person1.greet)

person1.changeName = "Max";
console.log(person1.greet)

person1.changeAge = 70
console.log(person1)
console.log(person1.personAge)