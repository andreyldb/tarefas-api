
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {email: 'Andar com meu cachorrinho hoje'},
        {email: 'Fazer a atividade de Minora'},
        {email: 'Estudar para a matéria de Dani'},
        {email: 'Pular na piscina segunda'},
      ]);
    });
};
