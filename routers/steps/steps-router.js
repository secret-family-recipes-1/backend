  
const express = require('express');

const Steps = require('./steps-model');

const router = express.Router();

/* endpoints */

/* GET list of steps */
router.get('/', (req, res) => {
    Steps.getSteps()
        .then(steps => {
            res.status(200).json(steps);
        })
        .catch(err => {
            res.status(400).json({ error: 'The list of steps could not be retrieved.' });
        })
});

/* POST to add a recipe */
router.post('/:id', (req, res) => {

    const id = req.params.id;
    newStep = { recipe_id: id, ...req.body };
    Steps.addStep(newStep)
        .then(step => {
            res.status(200).json({ success: 'step added', id: step[0], ...newStep });
        })
        .catch(err => {
            res.status(400).json({ error: 'Step could not be added.' });
        })
});

module.exports = router;