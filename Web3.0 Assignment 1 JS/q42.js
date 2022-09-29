let magicians = ["Ghulam Mustafa", "Sameer", "sami", "puff"];

function show_magicians(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

show_magicians(magicians);

function make_great(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = `The great ${arr[i]}`;
  }
}

make_great(magicians);
show_magicians(magicians);
