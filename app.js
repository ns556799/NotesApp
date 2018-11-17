console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

const { title, body } = argv;

const originalNote = {
    title: 'This is my title',
    body: 'This is my body'
}

const originalNoteString = JSON.stringify(originalNote)

fs.writeFileSync('notes.json', originalNoteString)

const noteString = fs.readFileSync('notes.json')
const note = JSON.parse(noteString)

console.log(typeof note)
console.log(note.title)

switch (command) {
    case 'add':
     notes.addNote(title, body);
     break;
     case 'list':
        notes.getAll();
        break;     
     case 'remove':
        notes.removeNote(title);
        break;  
     case 'remove':
        notes.readNote(title);
        break;       
     default:
       console.log('Command not recognised');
        break;    
} 