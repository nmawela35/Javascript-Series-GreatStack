//! Constructor functions to creates similar objects, similar to regular function but capitalized

//* create an object with the new keyword
function Person(first,last){
    this.firstName = first
    this.lastName =last,
    this.getFullName= function(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person2 = new Person("Elon","Must")
person2["Employment"] = "IT Specialist"
person2.fn =function greet() {
    console.log("New method")
}

const person3 = new Person("Chris", "Mawela")
person3.age =45

console.log({person2})
console.log({person3})

// person2.fn()
console.log(person2.getFullName())
console.log(person3.getFullName())
