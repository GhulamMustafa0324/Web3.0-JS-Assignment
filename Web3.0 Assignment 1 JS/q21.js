// Store all name and information
var details = [
  {
    username: "xyz name",
    password: "dog123",
  },
  {
    username: "abc name",
    password: "password123",
  },
];

// Create new user or proceed to sign in
var task = prompt("Do you have an name? (Yes or No)");
if (task.toLowerCase() === "no") {
  var newUsername = prompt("Enter your first and last name:");
  var newName = { username: newUsername };
  newName.password = prompt("Enter a new password:");
  details.push(newName);
}

// log all name
console.log(details);
