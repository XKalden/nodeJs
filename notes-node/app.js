console.log('Start app.js');

const os = require('os');
const fs = require('fs');
const notes = require('./notes.js');
const _ = require('lodash');
const yargs = require('yargs');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
}

const bodyOptions = {
    describe: 'Body of note',
    demand: true,
    alias: 'b'

}

const argv = yargs
    .command('add', 'Add a new note', {
        title: titleOptions,
        body: bodyOptions
    })
    .command('list', 'List all notes')
    .command('read', 'Read a note', {
        title: titleOptions
    })
    .command('delete', 'Remove a note',{
        title: titleOptions
    })
    .help()

    .argv;
// use it node app.js <command>
// var command = process.argv[2];
// console.log(process.argv);



var command = argv._[0];
console.log('Command: ', command);
console.log('yargs', argv);



if (command === 'add' ){
    console.log('readdd');


    let note = notes.addNode(argv.title, argv.body);

    if(note){
        notes.logNote(note);
    } else {
        console.log('Note Title is taken :C')
    }


} else if(command ==='list'){

    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);

    allNotes.forEach(note => notes.logNote(note));

} else if(command ==='read'){

    var note = notes.getNote(argv.title);
    
    if(note){

        notes.logNote(note);
    } else {
        console.log('Not NOT FOUND')
    }


} else if(command === 'delete'){
    var noteRemoves = notes.removeNote(argv.title);
    var message = noteRemoves ? 'Note was Removed' : 'Note not found';
    console.log(message);
} else {
    console.log('Command not Recognized');
}







