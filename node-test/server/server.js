const express = require('express');

var app = express();

app.get('/', (req,res) =>{
    res.send('hellow kalden');

});








app.listen(3000);



module.exports.app = app;
