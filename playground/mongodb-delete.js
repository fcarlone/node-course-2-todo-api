// const MongoClient = require('mongodb').MongoClient;

// es6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
  //   console.log(result);
  // });
  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
  //   console.log(result);
  // });

  // deleteMany
  // db.collection('Users').deleteMany({name: 'Frank Carlone'}).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteOne({_id: new ObjectID('5ade06a4fc811b0e64116d04')}).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
