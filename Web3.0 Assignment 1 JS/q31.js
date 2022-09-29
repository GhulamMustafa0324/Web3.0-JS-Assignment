let users = ["Ghulam Mustafa", "admin", "Sameer", "sami", "puff"];

let currentUser = "admin";

for (let i = 0; i < users.length; i++) {
  if (users[i] == "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${users[i]}, thank you for logging in again.`);
  }
}

while (users.length) {
  users.pop();
  console.log(users)
}

if (users.length == 0) {
  console.log("We need to find some users!");
}
