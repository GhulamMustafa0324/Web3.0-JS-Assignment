let magicians = ["Ghulam Mustafa", "Sameer", "sami", "puff"];

function show_magicians(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function make_great(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The great ${arr[i]}`;
  }
  return arr;
}

let greatMagicians = make_great([...magicians]);

show_magicians(magicians);
show_magicians(greatMagicians);
