//!Objects store multiple collections of data in key-value pairs called properties, Object created with object literal

//*key always stored as a string
//function declared as a value is refered to as method
const person = {
  "First name": "Chris",
  "age": 35,
  "companies": ["spaceX","Tesla","OpenAI"],
    
};
console.log(person)
console.log(person["First name"]) //Chris

// //* Modifies property
// person["First name"] = "Elon" 
// console.log(person["First name"]) //Elon, changed to Elon

// //*Add new property
// person["last name"] = "Mawela" 
// console.log(person) //updated object with 4 properties

// //*delete properties
// delete person["companies"];
// console.log(person)

//! Nested objects
// const person = {
//     "First name": "Chris",
//     age: 35,
//     "companies": ["spaceX","Tesla","OpenAI"],
//     "address":{
//         street: "Lehadima",
//         city: "Germiston",
//         code: "1832"
//     }
//   };
//   console.log(person["address"].city)

//   //! Check if property exist
//   console.log("age" in person)
//   console.log("companies" in person)