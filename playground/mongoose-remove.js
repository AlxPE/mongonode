const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

// Todo.findByIdAndRemove('5c50b4c86acfdc906146ede9').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({text: 'Working on Remove Route 33'}).then((doc) => {
    console.log(doc);
});
