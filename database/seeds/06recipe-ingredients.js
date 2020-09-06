exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          quantity: 1,
          units: "box",
          recipe_id: 1,
          ingredient_id: 1,
          
        },
        {
          quantity: 2,
          units: "eggs",
          recipe_id: 2,
          ingredient_id: 4,
          

        },
        {
          quantity: 1,
          units: "cup",
          recipe_id: 3,
          ingredient_id: 3,
          
        }
      ]);
    });
};