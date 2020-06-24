# backend

Secret Family Recipes Cookbook API
Base URL: https://secret-family-recipes-1.herokuapp.com/
user:

{
    "id": 1,
    "username": "nick",
    "password": "test"
}
recipe category:

{
    "id": 1,
    "title": "lunch"
}
recipes:

{
    "id": 1,
    "title": "Mac & Cheese",
    "source": "Mother",
    "category_id": 1,
    "user_id": 1
}
ingredients:

{
    "id": 1,
    "name": "Package of Cheese",
    "description": "Cheese package"
}
recipe_ingredients:

{
    "recipe_id": 1,
    "ingredient_id": 1,
    "quantity": 1,
    "units": "box"
},


instructions:

{
   "id": 1,
   "step": 1,
   "description": "Boil a pot of water on the stove.",
   "recipe_id": 1 
}
Endpoints
The following endpoints serve all CRUD functionality.

Authentication
POST to register a new user
/api/auth/register

Required data for registering a new user:

Username (unique)
Password 
Returns newly created user id, username, and token.

POST to login with an existing account
/api/auth/login

Required data for logging in a user:

Username
Password
Returns user id, username, and token.

Recipe Management
GET a list of existing recipes
/api/recipes

Requires a valid token.

Returns list of all existing recipes.

GET a recipe by recipe id
/api/recipes/:id

Requires a valid token.

Returns a recipe based on the id parameter.

GET a list of existing ingredients
/api/ingredients

Requires a valid token.

Returns list of all existing ingredients.

GET an ingredient by ingredient id
/api/ingredients/:id

Requires a valid token.

Returns an ingredient based on the id parameter.

GET a list of existing categories
/api/recipes/categories

Requires a valid token.

Returns a list of all existing recipe categories.

GET a list of instructions for a particular recipe by recipe id
/api/recipes/:id/steps

Requires a valid token.

Returns a list of all steps / instructions for a recipe based on the recipe's id.

GET a list of ingredients for a particular recipe by recipe id
/api/recipes/:id/ingredients

Requires a valid token.

Returns a list of all ingredients for a recipe based on the recipe's id.

POST / Creation Actions
POST to create a new recipe
/api/recipes

Requires a valid token.

Required fields for creating a recipe:

title
source
category_id
user_id
data schema:

{
    "id": 1,
    "title": "cheeseburgers",
    "source": "aunt joy",
    "category_id": 1,
    "user_id": 1
}
Returns the created recipe.

POST to create a new recipe category
/api/categories

Requires a valid token.

Required fields for creating a recipe category:

title
data schema:

{
    "title": "breakfast"
}
Returns the created recipe category.

POST to add a new ingredient to the database
/api/ingredients

Requires a valid token.

Required fields for adding a new ingredient to the database:

name
description
data schema:

{
    "name": "cheese",
    "description": "pepperjack"
}
Returns the created ingredient.

POST to create a new instruction / step for recipes
/api/recipes/instructions

Requires a valid token.

Required fields for adding a new recipe instruction / step:

recipe_id
step #
description
{
    "step": 2,
    "description": "Preheat the oven",
    "recipe_id": 1
}
Returns the created instruction / step.

Edit / Modify / PUT Actions
PUT to modify a recipe by recipe id
/api/recipes/:id

Requires a valid token.

There are no required fields to modify a recipe. All fields can be edited.

data schema:

{
    "title": "chili",
    "source": "grandpa",
    "category_id": 2,
    "user_id": 1
}
Returns the updated recipe.

PUT to modify a recipe category by category id
/api/recipes/categories/:id

Requires a valid token.

Required fields for modifying / updating a recipe category:

title
{
    "title": "appetizers"
}
Returns the updated recipe category.

PUT to modify an ingredient by ingredient id
/api/ingredients/:id

Requires a valid token.

At least one of the following fields is required to modify and ingredient.

name
description
{
    "name": "beef",
    "description": "cubed"
}
DELETE Actions
DELETE to delete a recipe by recipe id
/api/recipes/:id

Requires a valid token.

There are no require fields for deleting a recipe.

DELETE to delete a recipe category by category id
/api/recipes/categories/:id

Requires a valid token.

There are no required fields for deleting a recipe category.

DELETE to delete an ingredient by ingredient id
/api/ingredients/:id

Requires a valid token.

There are no required fields for deleting an ingredient.

Returns deleted ingredient's id.