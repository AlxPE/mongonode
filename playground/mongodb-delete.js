const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    ////////// deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result);
    // });

    ////////// deleteOne
    // db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
    //     console.log(result.result);
    // });

    ////////// findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name: "Alex"}).then((result) => {
    //     console.log(result.result);
    // });

    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('5c256375f4a6e46a54ee89c9')
    }).then((result) => {
        console.log(result);
    });

    // db.close();
});
