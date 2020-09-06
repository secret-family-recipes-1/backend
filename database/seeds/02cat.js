exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          title: "Breakfast",
          id: 1
        },
        {
          title: "Lunch",
          id:2
        },
        {
          title: "Dinner",
          id:3
        },
        {
          title: "Snacks",
          id:4
        }
      ]);
    });
};