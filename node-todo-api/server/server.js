var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/server');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');



var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todos = new Todo({
        text: req.body.text
    });

    let wow = req.body.text;

    console.log(typeof wow); 

    todos.save().then(doc => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Start on port 3000');
});


module.exports = {app};
