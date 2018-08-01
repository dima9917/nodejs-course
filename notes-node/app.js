console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');


console.log(_.isString(true));
console.log(_.isString('true'));
console.log(_.uniq([1,1,2,3,4,5,6,6]));
// console.log(user);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);