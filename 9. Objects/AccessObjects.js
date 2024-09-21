//* for in loop - display properties of an object without knowing product name

const person = {
    "First name": "Chris",
    age: 35,
    "companies": ["spaceX","Tesla","OpenAI"],
    // "address":{
    //     street: "Lehadima",
    //     city: "Germiston",
    //     code: "1832"
    // }
  };

  for (let prop in person){
    // console.log(prop) //prints key 
    // console.log(person[prop]) //* display values stored in a key
    console.log(`${prop} ${person[prop]}`)
  }

  