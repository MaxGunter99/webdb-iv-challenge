const db = require('../../data/dbConfig.js');

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};

function find() {
    return db( 'recipes' )        
    .join("dishes", "recipes.dish_id", "=", "dishes.id")
    .select("recipes.id", "recipes.name", {
        dish: "dishes.name"
    });;
};

function findById( id ) {
    return db( 'recipes' )
        .where({  "recipes.id" : id })
        .first()
        .join("dishes", "recipes.dish_id", "=", "dishes.id")
        .select("recipes.id", "recipes.name", {
            dish: "dishes.name"
        });;
};



function add( dish ) {
    return db( 'recipes' )
        .insert( dish , 'id' )
        .then(([ id ]) => {
            return findById( id );
        });
};

function update( id , changes ) {
    return db( 'recipes' )
        .where({ id })
        .update( changes )
        .then( count => {
            if ( count > 0 ) {
                return findById( id );
            } else {
                return null;
            }
        });
};

function remove( id ) {
    return db( 'recipes' )
        .where({ id })
        .del();
};