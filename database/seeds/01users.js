

const bcrypt = require('bcryptjs');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'nick',
          password: bcrypt.hashSync('test', 8),
          id: 1
        }
       
      ]);
    });
};