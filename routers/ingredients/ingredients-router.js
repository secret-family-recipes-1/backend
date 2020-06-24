const express = require('express');

const Ingredients = require('./ingredients-model');

const router = express.Router();

/* endpoints */

/* GET list of ingredients */
router.get('/', (req, res) => {
    Ingredients.getIngredients()
        .then(ingred => {
            res.status(200).json(ingred);
        })
        .catch(err => {
            res.status(400).json({ error: 'The list of ingredients could not be retrieved.' });
        })
});

/* GET ingredient by ingredient id */
router.get('/:id', (req, res) => {

    const id = req.params.id;

    Ingredients.getById(id)
        .then(ingred => {
            res.status(200).json(ingred);
        })
        .catch(err => {
            res.status(404).json({ error: 'ingredient could not be found' });
        })
});

/* POST to add a new ingredient */
router.post('/', (req, res) => {

    newIngred = req.body;
    Ingredients.addIngredient(newIngred)
        .then(ingred => {
            res.status(201).json({ success: 'new ingredient created', id: ingred[0], ...newIngred });
        })
        .catch(err => {
            res.status(400).json({ error: 'Ingredient could not be created.' });
        })
});

/* PUT to modify an ingredient */
router.put('/:id', (req, res) => {

    const id = req.params.id;
    const changes = req.body;
    Ingredients.editIngredient(changes, id)
        .then(edited => {
            res.status(200).json({ success: 'ingredient modified', id: id, ...changes })
        })
        .catch(err => {
            res.status(400).json({ error: 'ingredient could not be edited' });
        })
});

/* DELETE a recipe by recipe id */
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    Ingredients.deleteIngredient(id)
        .then(del => {
            res.status(200).json({ success: 'ingredient deleted' });
        })
        .catch(err => {
            res.status(400).json({ error: 'ingredient could not be deleted' });
        })
});

/* POST to add an ingredient to a recipe */
router.post('/recipes/:id', (req, res) => {

    const recipe_id = req.params.id;
    const newIngred = { recipe_id: recipe_id, ...req.body };
    Ingredients.addToRecipe(newIngred)
        .then(ingred => {
            res.status(201).json(ingred);
        })
        .catch(err => {
            res.status(400).json({ error: 'ingredient could not be added' });
        })
});

module.exports = router;