const url = require('url');

// Shared Functions
const parsedUrl = (requrl) => ( url.parse(requrl) );

// Middleware
const routerMiddleware = (req, res, next) => {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  console.log("Request Body: ", req.body);
  next();
};

const Helpers = {
  parsedUrl,
  routerMiddleware
};

module.exports = Helpers;