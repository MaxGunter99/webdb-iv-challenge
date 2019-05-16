
exports.seed = function(knex, Promise) {
  return knex('dishes').del()
    .then(function () {
      return knex('dishes').insert([
        { name: 'French Toast' }, //1
        { name: 'Waffles' }, //2
        { name: 'Chicken Alfredo' } //3
      ]);
    });
};
