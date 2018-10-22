
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'Não estou entendendo muito bem'},
        {email: 'Isso seria o usuário?'},
        {email: 'Dúvida'}
      ]);
    });
};
