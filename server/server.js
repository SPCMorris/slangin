const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const express_enforces_ssl = require('express-enforces-ssl'); 
const contentLength = require('express-content-length-validator');

const db = require('./db/db.js');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use(morgan('combined'));
app.use(bodyParser.urlencoded({ extended: false }));

// Security
app.use(cors());
app.use(helmet());
app.use(helmet.noSniff());
app.use(helmet.ieNoOpen());
app.use(helmet.xssFilter());
app.use(helmet.frameguard());
app.use(helmet.hidePoweredBy());
const content_length = {max: 9999, status: 400, message: "Payload is too large!"};
app.use(contentLength.validateMax(content_length));

// Routes
const routes = require('./routes/routes.js');
app.use('/', routes);

app.use(express.static('../client/static'));
app.use(express.static(__dirname + '/../client/static'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('./client/static', 'index.html'));
});

// Server
app.set('port', process.env.PORT || 8001);

app.listen(app.get('port'), () => {
  db.build_Db();
  console.log("Server is listening on port " + app.get('port'));
});
