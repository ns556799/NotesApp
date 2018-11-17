console.log('Starting notes.js');
const fs = require('fs');

const addNote = (title, body) => {
    let notes = [];
    const note = {title, body}

try {
    const notesString = fs.readFileSync('notes-data.json');
    notes = JSON.parse(notesString)
} catch(e) {
}  
    const duplicateNotes = notes.filter((note) => note.title === title )
    if (duplicateNotes.length === 0) {
        notes.push(note)
        fs.writeFileSync('notes-data.json', JSON.stringify(notes))
    }
}

const getAll = () => {
    console.log('Lisiting all notes');
}

const removeNote = (title) => {
    console.log(`The Title is ${title} is removed`);
}

const readNote = (title) => {
    console.log(`Reading note with the title ${title}`);
}

module.exports = { addNote, getAll, removeNote, readNote }