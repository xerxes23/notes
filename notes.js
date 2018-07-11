console.log("Starting notes.js");

const fs = require("fs");

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };

  try {
    const notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (error) {}

  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
    console.log("Note added");
  } else {
    console.log(`Error: a note with the title ${note.title} already exists`);
  }
};

const getAll = () => {
  console.log(`Getting all notes!`);
};

const getNote = title => {
  console.log(`Getting ${title}`);
};

const removeNote = title => {
  console.log(`Removing ${title}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};
