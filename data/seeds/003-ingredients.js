
exports.seed = function( knex , Promise ) {
  return knex( 'ingredients' ).del()
    .then(function () {
      return knex( 'ingredients' ).insert([
        { name: 'Bread, Eggs, Milk' },
        { name: 'Flour, Syrup, Eggs' },
        { name: 'Chicken, Alfredo' }
      ]);
    });
};
