exports.seed = function( knex , Promise ) {
  return knex( 'dishes' ).del()
    .then(function () {
      return knex( 'dishes' ).insert([
        { name: 'French Toast' },
        { name: 'Waffles' },
        { name: 'Chicken Alfredo' }
      ]);
    });
};
