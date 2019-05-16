
exports.seed = function(knex, Promise) {
  return knex('recipe_dishes').del()
    .then(function () {
      return knex('recipe_dishes').insert([
        { recipe_id: 'FrenchToast', dish_id: 1},
        { recipe_id: 'AmericanToast' , dish_id: 1},
        { recipe_id: 'Burnt' , dish_id: 2}
      ]);
    });
};
