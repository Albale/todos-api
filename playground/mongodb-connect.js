// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
  if (err){
    return console.log('Failed to connect to MongoDB');
  }
  console.log('Connected to DB successfully');
  db.collection('Users').insertOne({
    firstName: 'gil',
    lastName: 'yavne',
    age: 28
  }, (err , result) => {
    console.log(JSON.stringify(result.ops , undefined, 2));
  });
  db.close();
});
