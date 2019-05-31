
// ./mongod --dbpath ~/onedrive/knowledge/materials/node/mongo-data

// c:\Program Files\MongoDB\Server\4.0\bin>
// mongod.exe –dbpath C:\Users\Alex-Station\OneDrive\Knowledge\Materials\Node\mongo-data
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const {ObjectID} = require('mongodb');

const {mongoose} = require('./DB/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// const firstUser = new User({
//     email: 'masya@masya.com'
// });
// firstUser.save().then((document) => {
//     console.log('User created ', JSON.stringify(document, undefined, 2));
// }, (e) => {
//     console.log('Unable to save the document (user) ', e);
// 0});

app.get('/', (req, res) => {
    res.send();
});

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

app.post('/users', (req, res) => {
    const user = new User({
        email: req.body.email
    });

    user.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});

// Remove by id route
app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id is not valid');
    }

    Todo.findByIdAndRemove(id).then(todo => {
        if (!todo) {
            return res.status(404).send(`There is no todo with such id`);
        }
        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos,
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

app.get('/users', (req, res) => {
    User.find().then((users) => {
        res.send({
            users,
        });
    }, (e) => {
        res.status(400).send(e);
    });
});

// GET /todos/1234324
// test_id = 5c3671f433439a7072f89e6a

app.get('/todos/:id', (req, res) => {
    const id = req.params.id;

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id is not valid');
    }

    Todo.findById(id).then(todo => {
        if (!todo) {
            return res.status(404).send(`Todo not found :(`);
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

    // res.send({
    //     id: req.params.id,
    //     type: typeof req.params.id
    // });
});

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;
    const body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectID.isValid(id)) {
        return res.status(404).send('Id is not valid');
    }

    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }

        res.send({todo});
    }).catch((e) => {
        res.status(400).send();
    });

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app
};


//
