// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
  if (err){
    return console.log('Failed to connect to MongoDB');
  }
  console.log('Connected to DB successfully');

  db.collection('Users').findOneAndUpdate({
    firstName:'john'
  },{
    $set: {
      firstName:'Gil'
    }
  },{
    returnOriginal:false
  }).then((results) => {
    console.log(results);
  });
});
