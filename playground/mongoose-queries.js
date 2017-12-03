const {ObjectID} = require('mongodb');


const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');
const {User} = require('./../server/models/user');

id = '5a23cd13c82b2226e5d7cf6c';

Todo.findOne({
  _id:id
}).then((todos) => {
  console.log('findOne' , todos);
});

User.findById(id).then((user) => {
  if (!user){
    return console.log('Unable to find user');
  }
  console.log(JSON.stringify(user, undefined , 2));
} , (e) => {
  console.log(e);
});
