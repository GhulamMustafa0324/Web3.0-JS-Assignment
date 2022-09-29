let relatives = ["GrandDad", "GrandMom", "Uncle Saleem", "Aunt Kulsoom"];

relatives.unshift("Uncle Irfan");
let start = 3;
let deleteCount = 0;
relatives.splice(start, deleteCount, "Cousin Shakir");
relatives.push("Aunt Najma");

console.log("I can now invite only 2 person");

let poppedElements = new Array(5);
for (let i = 0; i < relatives.length; i++) {
  if ((relatives.length = 2)) {
    poppedElements.push(relatives.pop(i));
    for (let j = 0; j < poppedElements.length; j++) {
      console.log(
        "\n",
        poppedElements[j],
        `could not be invited due to less space `
      );
    }
    console.log(
      "\n",
      relatives[i],
      `would you like to come over for a dinner with my family? `
    );
    relatives.pop();
    relatives.pop();
    console.log(relatives)
  }
}
