let relatives = ["Grand Dad", "Grand Mom", "Uncle Saleem", "Aunt Kulsoom"];

console.log(`Sadly ${relatives[3]} can not make it to the dinner`)

relatives[3]="Aunt Najma"

for (let i = 0; i < relatives.length; i++) {
  console.log(relatives[i], `would you like to come over for a dinner with my family?`);
}
