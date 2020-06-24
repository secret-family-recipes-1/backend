const express = require('express');
const helmet = require('helmet');
const cors = require('cors')

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const recipesRouter = require('../routers/recipes/recipes-router')
// const categoriesRouter = require('../routers/categories/router')
// const ingredientsRouter = require('../routers/ingredients/ingredients-router')
// const stepsRouter = require('../routers/steps/steps-router')

const server = express();

server.use(helmet());
server.use(cors())
server.use(express.json());


server.use('/api/auth', authenticate, authRouter);
// server.use('/api/recipes', authenticate,  recipesRouter)
// server.use('/api/categories', authenticate, categoriesRouter)
// server.use('/api/ingredients', authenticate, ingredientsRouter)
// server.use('/api/steps', authenticate, stepsRouter )




server.get("/", (req, res) => {
    res.status(200).json({ api : "up"}).send("some message");
  });

module.exports = server;