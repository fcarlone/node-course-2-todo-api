const {ObjectID} = require ('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js');

Todo.remove({}).then((result) => {
  console.log(result);
});

// Todo.findOneAndRemove
Todo.findOneAndRemove({_id: '5ae8b6947b8d35c92d7cd553'}).then((todo) => {
  console.log(todo);
});

// Todo.findByIdAndRemove
Todo.findByIdAndRemove('5ae8b6947b8d35c92d7cd553').then((todo) => {
  console.log(todo);
});
