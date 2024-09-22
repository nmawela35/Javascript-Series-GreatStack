//!shadowing or overriding method

class Person {
    constructor(name){
        this.firstName = name
    }

    greet(){
        console.log("Hello Person " + this.firstName)
    }
}

class Student extends Person{
    greet(){
        console.log("Hello Student " + this.firstName)
    }
}

const student1 = new Student("Chris")

student1.greet()