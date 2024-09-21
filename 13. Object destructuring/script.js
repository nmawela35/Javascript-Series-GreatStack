//!Object destructuring allows to extract properties of an object into variables in single statement 

const person = {
    name:"Elon",
    surname: "Must",
    age:25
}

// const {name:fname,surname:lname,age:age} = person
// console.log({fname, lname, age})

const {name,surname,age, id="750805"} = person //add id property on the fly
console.log({name, surname, age,id})

