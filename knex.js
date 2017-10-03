const path = require('path');
require('dotenv').config();

module.exports = {

  db: {
    client: 'mysql',
    connection: {
      host: '50.62.209.148',
      user: process.env.db_username,
      password: process.env.db_password,
      database: 'slangin',
      charset: 'utf8'
    }
  }
};
