var obj = {
  name: "Joseph"
};

// Using JSON stringify method

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

// Using JSON parse method

var personString = '{"name": "Joe", "age": 26 }';
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

// Writing to JSON file

const fs = require("fs");

var originalNote = {
  title: "Some title",
  body: "Some body"
};

const originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync("notes.json", originalNoteString);

const noteString = fs.readFileSync("notes.json");

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note);
