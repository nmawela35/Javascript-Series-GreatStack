//* Create object with new Keyword

const person = new Object({
  ["first Name"]: "Chris",
  ["Age"]: 45,
  address: { city: "JHB", street: "Lehadima", "Postal Code": "1832" },
});

// const person = new Object();

// person["first Name"] = "Chris";
// person["Age"] = 45;
// person.address = { city: "JHB", street: "Lehadima", "Postal Code": "1832" };

// console.log(person);

for (let i in person) {
  console.log(i)
//   console.log(person[i]);
}
