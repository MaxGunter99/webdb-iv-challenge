
exports.seed = function( knex , Promise ) {
  return knex( 'recipes' ).del()
    .then(function () {
      return knex( 'recipes' ).insert([
        { name: 'FrenchToast', dish_id: 1 }, // 1
        { name: 'AmericanToast', dish_id: 1 }, // 2
        { name: 'NorthAmericanToast', dish_id: 1 }, // 3
        { name: 'FrenchWaffles', dish_id: 2 }, // 4
        { name: 'ButtermilkWaffles', dish_id: 2 }, // 5
        { name: 'HoneySweetCreamWaffles', dish_id: 2 }, // 6
        { name: 'FriedChicken', dish_id: 3 }, // 7
        { name: 'GrilledChicken', dish_id: 3 }, // 8
        { name: 'ChickenAlfredo', dish_id: 3 }, // 9
      ]);
    });
};
