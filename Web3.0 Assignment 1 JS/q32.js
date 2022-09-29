let current_users = ["Ghulam Mustafa", "Sameer", "sami", "puff"];

let new_users = ["Ghulam Mustafa", "Sameer", "hasham", "talha"];

for (let i = 0; i < new_users.length; i++) {
  let err = true;
  for (let j = 0; j < current_users.length; j++) {
    if (current_users[j].toLowerCase() === new_users[i].toLowerCase()) {
      console.log(`user name ${new_users[i]} is not available`);
      err = false;
      break;
    }
  }
  if (err) {
    console.log(`the username ${new_users[i]} is available.`);
  }
}
