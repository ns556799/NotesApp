console.log('Starting app');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes');

const argv = yargs.argv;
const command = argv._[0];

const { title, body } = argv;

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