console.log('starting notes.js');

const fs = require('fs');

var addNote = (title, body) => {
    var notes = [];
    var note = {    //create note object
        title,
        body
    };



    //workaround for isfileexists
    try {
        var notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString); //read note objects into array
        
    } catch (error) {
        
    }

    var duplicateNotes = notes.filter((note) => note.title == title);

    if(duplicateNotes.length == 0) {
        notes.push(note);
        fs.writeFileSync('notes-data.json', JSON.stringify(notes));    
    }

    console.log('Adding note' ,title,body)
}

var getNote = (title) => {
    console.log('Getting note', title);
}

var removeNote = (title) => {
    console.log('removing note', title);
}

var getAll = () => {
    console.log('Getting all notes');
}


module.exports = {
    addNote,
    removeNote,
    getNote,
    getAll
};