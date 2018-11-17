console.log('Starting notes.js');

const addNote = (title, body) => {
    console.log(`The Title is ${title} and the body is ${body}`);
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