
// ./mongod --dbpath ~/onedrive/cdg/materials/node/mongo-data

// c:\Program Files\MongoDB\Server\4.0\bin>
// mongod.exe –dbpath C:\Users\Alex-Station\OneDrive\CDG\Materials\Node\mongo-data
const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

// const firstUser = new User({
//     email: 'masya@masya.com'
// });
// firstUser.save().then((document) => {
//     console.log('User created ', JSON.stringify(document, undefined, 2));
// }, (e) => {
//     console.log('Unable to save the document (user) ', e);
// });

app.post('/todos', (req, res) => {
    const todo = new Todo({
        text: req.body.text
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {
    app
};


//
