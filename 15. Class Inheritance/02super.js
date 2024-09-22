class Person {
    constructor(name){
        this.firstName = name
    }

    greet(){
        console.log("Hello " + this.firstName)
    }
}

class Student extends Person{
    constructor(name){
        super(name)
    }
}

const student1 = new Student("Chris")

student1.greet()