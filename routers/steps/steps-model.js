const db = require('../../database/dbConfig');

module.exports = {
    getSteps,
    addStep
}

function getSteps() {
    return db('instructions');
}

function addStep(step) {
    return db('instructions').insert(step, 'id');
}