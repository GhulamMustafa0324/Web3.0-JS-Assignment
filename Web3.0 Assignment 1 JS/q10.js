// This program is written by Ghulam Mustafa
// Date is 29/9/2022 and Time is 12:51 AM

let author = "Marilyn Monroe";
let quote = "The nicest thing for me is sleep, then at least I can dream.";

console.log(`${author} once said, "${quote}"`);

//This is other program is written for piaic
let lowerCase = "Ghulam Mustafa";
let upperCase = "Mohammad Ali";

console.log(`This is lowerCase :`, lowerCase.toLowerCase());

console.log(`This is upperCase :`, upperCase.toUpperCase());

function titleize(string) {
  let upper = true;
  let newString = "";
  for (let i = 0, l = string.length; i < l; i++) {
    // Note that you can also check for all kinds of spaces  with
    // string[i].match(/\s/)
    if (string[i] == " ") {
      upper = true;
      newString += string[i];
      continue;
    }
    newString += upper ? string[i].toUpperCase() : string[i].toLowerCase();
    upper = false;
  }
  return newString;
}

console.log(`This is titleCase : ${titleize("hEllO wORLd")} `);
