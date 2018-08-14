
// MongoDB module v3
// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    const db = client.db('TodoApp');

    // delete Many
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) => {
    //     console.log(result);
    // });

    // delete One 
    // db.collection('Todos').deleteOne({text: 'eat dog'}).then((result) => {
    //     console.log(result);
    // });

    // FindOneAndUpdate
    db.collection('Todos').findOneAndUpdate(
        { _id: new ObjectID('5b7341c5547ade23a775f58d')}, 
        { $set: { completed: true }},
        { returnOriginal: false }).then((result) => {
        console.log(result);
    });


    db.collection('User').findOneAndUpdate(
        {_id: new ObjectID('5b72d72553a2141b64ac539e')},
        { $set: { 
            name: 'Kalden'},
          $inc: {age: -2}},
        { returnOriginal: false }).then((result) => {
            console.log(result);
    });


    




    client.close();
});

























