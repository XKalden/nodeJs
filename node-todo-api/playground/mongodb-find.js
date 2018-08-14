
// MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connect to MongoDB Server');
    const db = client.db('TodoApp');

    db.collection('User').find({name: 'Tony'}).count().then((count) => {
        console.log(`Todos count: ${count}`);

    }, (err) => {
        console.log('Unable to fetch tods', err);
    });
    client.close();
});

























