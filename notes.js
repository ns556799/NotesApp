console.log('Starting notes.js');

module.exports.addNote = () => {
    console.log('addNote');
    return 'AddedNote';
};

module.exports.addNumbers = (a,b) => {
    return `The addition of ${a} and ${b} = ${a+b}`;
};