const addNote = (title, body) => {
  console.log(`Title: ${title}
Body: ${body}`);
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
