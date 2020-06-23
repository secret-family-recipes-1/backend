const express = require('express');

const Categories = require('./model.js');

const router = express.Router();

/* endpoints */

/* GET list of categories */
router.get('/', (req, res) => {
    Categories.getCategories()
        .then(cats => {
            res.status(200).json(cats);
        })
        .catch(err => {
            res.status(400).json({ error: 'The list of categories could not be retrieved.' });
        })
});

/* POST to create a category */
router.post('/', (req, res) => {

    const newCat = req.body;
    Categories.addCategory(newCat)
        .then(cat => {
            res.status(201).json({ success: 'category created', id: cat[0], ...newCat });
        })
        .catch(err => {
            res.status(400).json({ error: 'Category could not be created.' });
        })
});

/* PUT to update a category by id */
router.put('/:id', (req, res) => {

    const changes = req.body;
    const id = req.params.id;
    Categories.editCategory(changes, id)
        .then(updated => {
            res.status(200).json({ success: 'category edited', ...changes });
        })
        .catch(err => {
            res.status(400).json({ error: 'Category could not be edited.' });
        })
});

/* DELETE a category by id */
router.delete('/:id', (req, res) => {

    const id = req.params.id;
    Categories.deleteCategory(id)
        .then(del => {
            res.status(200).json({ success: 'category deleted' });
        })
        .catch(err => {
            res.status(400).json({ error: 'Category could not be deleted.' });
        })
});

module.exports = router;