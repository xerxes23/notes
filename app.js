console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes");

const argv = yargs.argv;
const command = argv._[0];
console.log("Command: ", command);
console.log("Yargs: ", argv);

if (command === "add") {
  const note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log(`Note created
---
Title: ${note.title}
Body: ${note.body}`);
  } else {
    console.log(`Error: note with that title already exists`);
  }
} else if (command === "list") {
  notes.getAll();
} else if (command === "read") {
  notes.getNote(argv.title);
} else if (command === "remove") {
  notes.removeNotes(argv.title);
} else {
  console.log("Command not recognized");
}
