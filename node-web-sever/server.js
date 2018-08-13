const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials');


app.use((req,res,next) => {
    var now = new Date().toString();

    var log = `${now}: ${req.method} ${req.url}`;

    console.log(log);

    fs.appendFile('server.log', log + '\n', (err) => {
        if(err) {
            console.log('Unable to append to server.log')
        }
    })
    next();
});

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) =>{
    // res.render('maintenance.hbs');
    next();
});

// Must be below app middleware to have access to maintenance

app.get('/', (req, res) => {
    res.render('home.hbs', {
        pagetitel: 'Home Page',
        welcomeMessage: 'Welcome to my website',
        currentYear: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pagetitel: 'aboutPage',
        currentYear: new Date().getFullYear()
    });
});

app.get('/bad', (req, res) => {
    // res.send('<h1> hello</h1>');

    res.send({
        errorMessage: 'error'
    })

});


app.listen('3000');