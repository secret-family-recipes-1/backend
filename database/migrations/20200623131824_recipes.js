exports.up = function (knex) {
    return knex.schema.createTable('categories', tbl => {
        // primary id for categories
        tbl.increments();

        // title
        tbl.string('title')
            .notNullable()
            .unique()
    }).createTable('recipes', tbl => {
        // primary recipe id
        tbl.increments();

        // recipe title (required)
        tbl.string('title')
            .notNullable()

        // recipe source
        tbl.string('source')


        // user id        
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    }).createTable('instructions', tbl => {
        // primary instruction id
        tbl.increments();

        // step number
        tbl.integer('step')
            .notNullable();

        // description
        tbl.string('description')
            .notNullable();

        // foreign key for recipe id
        tbl.integer('recipe_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onUpdate('CASCADE')
            .onDelete('CASCADE');
    }).createTable('ingredients', tbl => {
        // primary ingredient id
        tbl.increments();

        // ingredient name
        tbl.string('name')
            .notNullable()
            .unique()

        // description
        tbl.string('description')
    }).createTable('recipe_ingredients', tbl => {
         // quantity
         tbl.integer('quantity')
         .notNullable()

     // units
     tbl.string('units')
         .notNullable()

     // foreign key to recipe id
     tbl.integer('recipe_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('recipes')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

     // foreign key to ingredient id
     tbl.integer('ingredient_id')
         .unsigned()
         .notNullable()
         .references('id')
         .inTable('ingredients')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');

     tbl.primary(['recipe_id', 'ingredient_id']);
    })
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipes')
        .dropTableIfExists('categories');
};