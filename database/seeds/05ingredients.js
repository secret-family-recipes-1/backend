exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          name: "Noodles",
          description: "Mac Noodles",
          id:1
        },
        {
          name: "Package of Cheese",
          description: "Cheese package",
          id:2
        },
       
        {
          name: "Ramen Noodles",
          description: "Cup of noodle form",
          id:3
        },
        {
          name: "Eggs",
          description: "Cage free",
          id:4
        }
      ]);
    });
};