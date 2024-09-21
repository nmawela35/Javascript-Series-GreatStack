function Person(){
    this.name = "Elon Must"
}

Person.prototype.age =35
Person.prototype = {age:75}
Person.prototype = {Employment:"Programmer", Place:"Venda",age:65} //override the object
Person.prototype.age =75 //override age in object above

const person1 = new Person();
// person1.age = 57
console.log(person1.age)
console.log(person1.Place)
console.log(person1.Employment)

Person.prototype = {age:65}

