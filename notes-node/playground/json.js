// var obj = {
//     name :'kaldne'
// }

// var stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// console.log('-------');


// var covnertStringObj = JSON.parse(stringObj);
// console.log(typeof covnertStringObj);
// console.log(covnertStringObj);


// console.log(JSON);

// var person  = '{"name":"12" }';
// var kalden = JSON.parse(person);
// console.log(kalden);


const fs = require('fs');
var originalNote = {
    title: 'kalden',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json', originalNoteString);

// READ File
var nodeString = fs.readFileSync('notes.json');

var note = JSON.parse(nodeString);

console.log(typeof note);
console.log(note.title);

