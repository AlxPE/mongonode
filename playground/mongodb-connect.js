// MondoDB module v2
//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

// const obj = new ObjectID();
// console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Prepare for the New Years eve',
    //     completed: true
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo ', err);
    //     }
    //
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // insert new doc into Users (name, age, location)

    db.collection('Users').insertOne({
        name: 'John',
        age: 35,
        location: 'Albany, NY'
    }, (err, result) => {
        if (err) {
            return console.log('Unable to insert User ', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
        console.log(result.ops[0]._id.getTimestamp());
    });

    db.close();
});
