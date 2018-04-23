// const MongoClient = require('mongodb').MongoClient;

// es6 Object Destructuring
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5addfee2560ebe0c59ecc3be')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err) => {
  //   console.log('Unabel to fetch todos', err);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unabel to fetch todos', err);
  // });

  db.collection('Users').find({name: 'Frank Carlone'}).toArray().then((docs) => {
    console.log('Users:');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unabel to fetch users', err);
  });

  // db.close();
});
