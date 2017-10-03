const config = require('../../knex.js');
const knex = require('knex')(config['db']);

const build_Users_Table = knex.build_Users_Table = () => {
  return knex.schema.hasTable('Users')
    .then( (exists) => {
      if(exists) {
        console.log('Users table is already alive and kicking!');
      } else {
        knex.schema.createTable('Users', (table) => {
          table.increments('id').primary();
          table.string('username', 15);
          table.string('password', 20);
        })
        .then( (table) => {
          console.log('Users table is now live!', table);
        })
      }
    })
};

knex.build_Db = () => {
  const promiseArr = [];
  promiseArr.push(build_Users_Table());

  return Promise.all(promiseArr);
};

module.exports = knex;
