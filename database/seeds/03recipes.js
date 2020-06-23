exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          title: "Mac & Cheese",
          source: "Mother",
          id:1,
          
          user_id: 1
        },
        {
          title: "Eggs",
          source: "Aunt",
          
          user_id: 1,
          id:2
        },
        {
          title: "Ramen Noodles",
          source: "Highschool",
          
          user_id: 1,
          id:3
        }
      ]);
    });
};