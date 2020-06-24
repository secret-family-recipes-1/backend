const express = require('express');

const Recipes = require('./recipes-model');

const router = express.Router();

/* endpoints */

/* GET list of recipes */
router.get('/', (req, res) => {
    Recipes.getRecipes()
        .then(recipes => {
            res.status(200).json(recipes);
        })
        .catch(err => {
            res.status(400).json({ error: 'The list of recipes could not be retrieved.' });
        })
});

/* GET recipe by recipe id */
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Recipes.getById(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(404).json({ error: 'recipe could not be found' });
        })
});

/* POST to add a recipe */
router.post('/', (req, res) => {

    newRecipe = req.body;
    Recipes.addRecipe(newRecipe)
        .then(recipe => {
            res.status(200).json({ success: 'recipe added', id: recipe[0], ...newRecipe });
        })
        .catch(err => {
            res.status(400).json({ error: 'Recipe could not be created.' });
        })
});

/* PUT to modify a recipe */
router.put('/:id', (req, res) => {

    const id = req.params.id;
    const changes = req.body;
    Recipes.editRecipe(changes, id)
        .then(edited => {
            res.status(200).json({ success: 'recipe modified', id: id, ...changes })
        })
        .catch(err => {
            res.status(400).json({ error: 'recipe could not be edited' });
        })
});

/* DELETE a recipe by recipe id */
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    Recipes.deleteRecipe(id)
        .then(del => {
            res.status(200).json({ success: 'recipe deleted' });
        })
        .catch(err => {
            res.status(400).json({ error: 'recipe could not be deleted' });
        })
});

/* GET a list of steps for a particular recipe by recipe id */
router.get('/:id/steps', (req, res) => {

    const id = req.params.id;
    Recipes.getRecipeSteps(id)
        .then(steps => {
            res.status(200).json(steps);
        })
        .catch(err => {
            res.status(400).json({ error: 'list of recipe steps could not be retrieved.' });
        })
});

/* GET a list of ingredients for a recipe by recipe id */
router.get('/:id/ingredients', (req, res) => {

    const id = req.params.id;
    Recipes.getRecipeIngredients(id)
        .then(recipe => {
            res.status(200).json(recipe);
        })
        .catch(err => {
            res.status(200).json({ error: 'list of ingredients could not be retrieved.' });
        })
});

module.exports = router;