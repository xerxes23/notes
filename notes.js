const fs = require("fs");

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
});

const fetchNotes = () => {
  try {
    const notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

const saveNotes = notes =>
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));

const logNote = note => {
  console.log(`---
Title: ${note.title}
Body: ${note.body}`);
};

const addNote = (title, body) => {
  let notes = [];
  const note = {
    title,
    body
  };
  notes = fetchNotes();
  const duplicateNotes = notes.filter(note => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

const getAll = () => {
  return fetchNotes();
};

const getNote = title => {
  const notes = fetchNotes();
  return notes.filter(note => note.title === title)[0];
};

const removeNote = title =>
  Box()
    .map(() => fetchNotes())
    .map(notes => notes.filter(note => note.title !== title))
    .fold(notes => {
      if (fetchNotes().length !== notes.length) {
        saveNotes(notes);
        return true;
      } else {
        return false;
      }
    });

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
