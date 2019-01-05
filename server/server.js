const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 3,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

// const newTodo = new Todo({
//     text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//     console.log('Saved todo', doc);
// }, (e) => {
//     console.log('Unable to save todo');
// });

// const bestTodo = new Todo({
//     text: 'Great thing to do'
// });
//
// bestTodo.save().then((document) => {
//     console.log('Saved todo', JSON.stringify(document, undefined, 2));
// }, (e) => {
//     console.log('Unable to save the document (Todo)', e);
// });


// Mongoose User model
// email - required - trimmed - string - minlength = 1
const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
});

const firstUser = new User({
    email: 'johny_d@johny.d'
});

firstUser.save().then((document) => {
    console.log('User created ', JSON.stringify(document, undefined, 2));
}, (e) => {
    console.log('Unable to save the document (user) ', e);
});






//
