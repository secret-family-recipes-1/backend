const db = require('../../database/dbConfig');

module.exports = {
    getIngredients,
    getById,
    addIngredient,
    editIngredient,
    deleteIngredient,
    addToRecipe
}

/* GET list of ingredients */
function getIngredients() {
    return db('ingredients');
}

/* GET ingredient by ingredient id */
function getById(id) {
    return db('ingredients')
        .where({ id });
}

/* POST to add an ingredient */
function addIngredient(ingred) {
    return db('ingredients').insert(ingred, 'id');
}

/* PUT to modify an ingredient */
function editIngredient(changes, id) {
    return db('ingredients')
        .where({ id })
        .update(changes)
}

/* DELETE an ingredient */
function deleteIngredient(id) {
    return db('ingredients')
        .where({ id })
        .del();
}

/* POST to add ingredient to recipe using bridge table */
function addToRecipe(ingredient) {
    return db('recipe_ingredients')
        .insert(ingredient);
}