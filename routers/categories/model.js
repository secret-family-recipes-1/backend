const db = require('../../database/dbConfig');

module.exports = {
    getCategories,
    addCategory,
    deleteCategory,
    editCategory
}

function getCategories() {
    return db('categories');
}

function addCategory(category) {
    return db('categories').insert(category, 'id');
}

function editCategory(changes, id) {
    return db('categories')
        .where({ id })
        .update(changes)
}

function deleteCategory(id) {
    return db('categories')
        .where({ id })
        .del();
}