console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');


const argv = yargs.argv;
var command = process.argv[2]
console.log(`Command: ${command}`);
console.log('process', process.argv);
console.log('Yargs', argv);

if(command == 'add'){    
    notes.addNote(argv.title, argv.body);
} else if (command == 'list'){
    notes.getAll();
} else if(command == 'read'){
    notes.getNote(argv.title);
} else if(command == 'remove'){
    notes.removeNote(argv.title);
} else {
    console.log('not recognized')
}

// console.log(_.isString(true));
// console.log(_.isString('true'));
// console.log(_.uniq([1,1,2,3,4,5,6,6, ]));
// console.log(user);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);