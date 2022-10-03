let magicians = ["Ghulam Mustafa", "Sameer", "sami", "puff"];

let show_magicians = (magicians) =>
  magicians.map((eachMagician) => console.log(`${eachMagician} is a good magician`));

function make_great([...magicians]) {
  for (let i = 0; i < magicians.length; i++) {
    magicians[i] = `The great ${magicians[i]}`;
  }
  return magicians;
}


make_great(magicians);
show_magicians(magicians);
