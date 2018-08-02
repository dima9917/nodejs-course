// var obj = {
//     name: 'Dima'
// };

// var stringObj = JSON.stringify(obj);

// console.log(typeof(stringObj));
// console.log(stringObj);
// console.log(typeof(obj));
// console.log(obj);

// var personString = '{"name": "Dima" ,"age": 29}';
// var person = JSON.parse(personString);
// console.log(typeof(person));
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'Some title',
    body: 'Some body'
}

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString)

var noteString = fs.readFileSync('notes.json');

var note = JSON.parse(noteString)

console.log(typeof(note));
console.log(note.title);