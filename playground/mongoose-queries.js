const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


const userId = "5c3679a9250744fc76eec80e";

// const id = '5c3671f433439a7072f89e6a';
//
// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', JSON.stringify(todos, undefined, 2));
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', JSON.stringify(todo, undefined, 2));
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo using findById', JSON.stringify(todo, undefined, 2));
// }).catch((e) => console.log(e));


if (!ObjectID.isValid(userId)) {
    console.log('User id is not valid!');
} else {
    User.findById(userId).then((user) => {
        if (!user) {
            return console.log('User was not found');
        }
        console.log('User found: ' + JSON.stringify(user, undefined, 2));
    }).catch((e) => {
        console.log(e);
    });
}


















//
