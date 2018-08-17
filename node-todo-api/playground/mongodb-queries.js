const {ObjectID} = require('mongodb');




// I need mongoose to connect with MOngoDB
const {mongoose} = require('./../server/db/server');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b736365ad8e94286a163547';

if(!ObjectID.isValid(id)){
    console.log('ID not valid');

    console.log('it workkkkkkkkkk <<<<<<<<<<<<<<<<<<<<<<,')
}


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });


// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });


// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });


User.findById(id).then((users) => {
    if(!users){
        return console.log('no used found by id');
    }
    console.log('User', users);

});




