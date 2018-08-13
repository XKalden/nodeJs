console.log('Start note.js');
const fs = require('fs');


// check if there is file name 
var fetchNotes = (notes) => {

    try{
        var noteString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(noteString);
        return notes;
    } catch (e) { 
        return [];
    }

};

// save note to JSON file
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};



var addNode = (title, body) => {
    let notes = fetchNotes();
    const note = {
        title,
        body
    };

    
    var duplicatedNotes  = notes.filter( note => note.title === title );

    if(duplicatedNotes.length === 0){
        notes.push(note);
        saveNotes(notes);
        
        return note;
        

    }

};

var getAll = () => {

    return fetchNotes();

}

let read = () => {
    console.log('reading');
}

const deletes = () => {
    console.log('I am deleted');
}

var getNote = (title) => {
    var notes = fetchNotes();

    var filterTitle = notes.filter(note => note.title === title);
    return filterTitle[0];
}

var removeNote = (title) => {
    var notes = fetchNotes();
    var filterdNotes = notes.filter((note) => note.title !== title);
    saveNotes(filterdNotes);

    // return bool if note removes or not
    return notes.length !== filterdNotes.length;
}


var logNote = (note) => {
    // break on liken
    debugger;

    console.log('----');
    console.log(`title: ${note.title}`);
    console.log(`body: ${note.body}`);
    console.log('----');
}


module.exports = {
    addNode,
    getAll,
    deletes,
    read,
    getNote,
    removeNote,
    logNote
}