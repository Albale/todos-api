// const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/Todos', (err, db) => {
  if (err){
    return console.log('Failed to connect to MongoDB');
  }
  console.log('Connected to DB successfully');
  // deleteMany
    // db.collection('todos').deleteMany({text:"Eat lunch"}).then((results) => {
    //   console.log(results);
    // });
  //deleteOne
    // db.collection('todos').deleteOne({text:"Eat lunch"}).then((results) => {
    //   console.log(resul\ts);
    // })
  //fineOneAndDelete
    // db.collection('todos').findOneAndDelete({text:"Eat lunch"}).then((results) => {
    //   console.log(results);
    // })
  // db.close();
});
