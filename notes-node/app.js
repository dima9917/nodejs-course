console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
var user = os.userInfo();

var a = 1, b = 2;

console.log(notes.add(a, b));

// console.log(user);

// fs.appendFileSync('greetings.txt', `Hello ${user.username}! You are ${notes.age}`);