const db = require('../../database/dbConfig');

module.exports = {
    getRecipes,
    getById,
    addRecipe,
    editRecipe,
    deleteRecipe,
    getRecipeSteps,
    getRecipeIngredients
}

/* GET list of recipes */
function getRecipes() {
    return db('recipes');
}

/* GET recipe by recipe id */
function getById(id) {
    return db('recipes')
        .where({ id });
}

/* POST to add a recipe */
function addRecipe(recipe) {
    return db('recipes').insert(recipe, 'id');
}

/* PUT to modify a recipe */
function editRecipe(changes, id) {
    return db('recipes')
        .where({ id })
        .update(changes)
}

/* DELETE a recipe */
function deleteRecipe(id) {
    return db('recipes')
        .where({ id })
        .del();
}

/* GET list of steps for a particular recipe by recipe id */
function getRecipeSteps(id) {
    return db('instructions')
        .where('recipe_id', id)
}

/* GET list of ingredients for a particular recipe by recipe id */
function getRecipeIngredients(id) {
    return db('recipe_ingredients')
        .join('ingredients', 'ingredients.id', 'recipe_ingredients.ingredient_id')
        .select('ingredients.*', 'recipe_ingredients.quantity', 'recipe_ingredients.units')
        .where('recipe_ingredients.recipe_id', id);
}  