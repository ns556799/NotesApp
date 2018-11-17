console.log('Starting app');

const fs = require('fs');
const os = require('os');
const userInfo = os.userInfo();
const notes = require('./notes');

let res = notes.addNote();
console.log(res);

// fs.appendFileSync('greetings.txt', `Hello ${userInfo.username}, you are ${notes.age}`);