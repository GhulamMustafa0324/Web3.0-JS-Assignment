let relatives = ["GrandDad", "GrandMom", "Uncle Saleem", "Aunt Kulsoom"];

relatives.unshift("Uncle Irfan")
let start = 3;
let deleteCount = 0;
relatives.splice(start, deleteCount, 'Cousin Shakir');
relatives.push("Aunt Najma")

for (let i = 0; i < relatives.length; i++) {
  console.log( '\n',relatives[i], `would you like to come over for a dinner with my family? `);
}
