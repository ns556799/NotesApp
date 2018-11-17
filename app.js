console.log('Starting app');

const fs = require('fs');
const os = require('os');
const userInfo = os.userInfo();

console.log(userInfo);

fs.appendFileSync('greetings.txt', `Hello ${userInfo.username}`);