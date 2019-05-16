exports.up = function (knex, Promise) {
    // the tables must be created in the right order,
    // tables with FK are created after the referenced table is created
    return knex.schema
        .createTable("dishes", tbl => {
            tbl.increments(); // id auto incrementing

            tbl
                .string("name", 128)
                .notNullable() // constraints - required
                .unique();
        })

        .createTable("recipes", tbl => {
            // the tracks table must be created before this table is created
            tbl.increments();

            tbl
                .string("name", 128)
                .notNullable()
                .unique();

            tbl
                .integer("dish_id")
                .unsigned() // this is required for some other dbs on foreign keys
                .notNullable() // null is a valid data type, so if we say notNullable, we insure no errors
                .references("id") // what primary is this looking at
                .inTable("dishes") // where is the primary key table this is pointing at
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })

        .createTable("ingredients", tbl => {
            tbl.increments();

            tbl.string("name", 128).notNullable();
        })

        .createTable("recipe_ingredients", tbl => {
            // the students and cohorts tables must be created before this table is created
            tbl.increments();

            tbl
                .integer("recipe_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("recipes")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");

            tbl
                .integer("ingredient_id")
                .unsigned()
                .notNullable()
                .references("id")
                .inTable("ingredients")
                .onDelete("RESTRICT")
                .onUpdate("CASCADE");
        })
};

exports.down = function (knex, Promise) {
    // tables with FK must be removed before the referenced table is removed -- we do the deletions in the opposite order of our creations
    return knex.schema
        .dropTableIfExists("recipe_ingredients")
        .dropTableIfExists("ingredients")
        .dropTableIfExists("recipes")
        .dropTableIfExists("dishes");
};