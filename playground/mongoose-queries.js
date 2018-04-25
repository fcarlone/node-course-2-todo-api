const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

var userID = '5adf78689123c9116f60c586';

var id = '5ae0d0f528a86e0762e2af7b';
//
// if (!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//     _id: id
//   }).then((todo) => {
//     console.log('Todo', todo);
//   });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));


// User.findById
User.findById(userID).then((user) => {
  if(!user) {
    return console.log('User ID not found');
  }
  console.log('User by ID', user);
}).catch((e) => {
  console.log(e)
});
