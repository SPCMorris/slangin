const db = require('../db/db.js');

const Users = module.exports;

// Create
Users.createUser = (request) => {
  return response = db('Users').where({
    username: request.username,
    password: request.password
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) );
};

// Read
Users.findUser = (request) => (
  db('Users').where({
    username: request.username,
    password: request.password
  })
  .limit(1)
  .then( (rows) => (rows) )
  .catch( (err) => (err) )
);

// Delete
Users.findUser = (request) => (
  db('Users').where({
    username: request.username,
    password: request.password
  })
  .del()
  .then( (response) => (response) )
  .catch( (err) => (err) )
);