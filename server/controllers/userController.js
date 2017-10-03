const Helpers = require('../helpers.js');
const Users = require('../models/userModel.js');

const userRoutes = {};

const GET = (req, res) => {
  const url = Helpers.parsedUrl(req.url);
  console.log('In GET in User!', url)

  const user = {
    username: url.query,
    password: 1234
  }
  
  Users.findUser(user)
    .then( (response) => {
      console.log('FIND USER: ', response);
      res.status(200).send(response);
    })
}
const POST = (req, res) => {
  console.log('In PUT in User', req.url)
};
const PUT = (req, res) => {
  console.log('In PUT in User', req.url)
};
const DELETE = (req, res) => {
  console.log('In DELETE in User', req.url)
};

userRoutes['/login'] = {
  GET, 
  POST,
  PUT,
  DELETE
};

module.exports = userRoutes;
