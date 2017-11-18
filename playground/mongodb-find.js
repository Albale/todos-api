// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
  if (err){
    return console.log('Failed to connect to MongoDB');
  }
  console.log('Connected to DB successfully');
  db.collection('Users').find({
    firstName: 'gil'
  }).toArray().then((docs) => {
    console.log('todos');
    console.log(JSON.stringify(docs , undefined , 2));
  }, (err) => {
    console.log("unable to fetch docs",err );
  });
  // db.close();
});
