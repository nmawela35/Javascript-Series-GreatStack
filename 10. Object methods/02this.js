//!this keyword

//* To access the other properties of an object within a method of the same object, we can use this keyword

const person ={
    name: "Chris",
    lastName: "Mawela",
    getFullname: function greet(){
        console.log(`Hi Ndivhudza  ${this.lastName} ${this.name} ${this}`)
    }
}

// person.getFullname()

//* this outside of an object

// console.log(this)