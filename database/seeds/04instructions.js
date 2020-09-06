exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('instructions').del()
    .then(function () {
      // Inserts seed entries
      return knex('instructions').insert([
        {
          step: 1,
          description: "Boil a pot of water on the stove.",
          recipe_id: 1,
          id:1
        },
        {
          step: 2,
          description: "Add noodles to water.",
          recipe_id: 1,
          id:2
        },
        {
          step: 3,
          description: "Strain the noodles.",
          recipe_id: 1,
          id:3
        },
        {
          step: 4,
          description: "Mix it all together and serve!",
          recipe_id: 1,
          id:4
        },
        {
          step: 1,
          description: "Crack eggs into pan.",
          recipe_id: 2,
          id:5
        },
        {
          step: 2,
          description: "Let cook until you need to flip",
          recipe_id: 2,
          id:6
        },
        {
          step: 3,
          description: "Add to plate when done cooking.",
          recipe_id: 2,
          id:7
        },
        {
          step: 1,
          description: "Unwrap the cup of noodles.",
          recipe_id: 3,
          id:8
        
        },
        {
          step: 2,
          description: "Put it in the microwave.",
          recipe_id: 3,
          id:9
        },
        {
          step: 3,
          description: "Eat noodles.",
          recipe_id: 3,
          id:10
        }
      ]);
    });
};
