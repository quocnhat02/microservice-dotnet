let loggedInUsername: string;

const users = [
  { name: "Orgy", age: 18 },
  { name: "Jack", age: 22 },
];

const loggedInUser = users.find((user) => user.name === loggedInUsername);

let saveButton: HTMLElement | null = document.getElementById("save");

if (saveButton !== null) {
  // do something
}
