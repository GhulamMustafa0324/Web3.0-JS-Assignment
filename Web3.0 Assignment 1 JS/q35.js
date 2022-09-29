let animals = ["dog", "cat", "rabbit"];

for (let i = 0; i < animals.length; i++) {
  if (animals[i] == "dog") {
    console.log(`${animals[i]} is a very loyal animal`);
  }
  if (animals[i] == "cat") {
    console.log(`A ${animals[i]} would make a great pet `);
  }
  if (animals[i] == "rabbit") {
    console.log(`A cage is needed for a ${animals[i]}`);
  }
}

console.log("I would love to have any of these animals");
