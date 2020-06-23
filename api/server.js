const express = require('express');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');

const server = express();

server.use(helmet());

server.use(express.json());


server.use('/api/auth', authRouter);


server.get("/", (req, res) => {
    res.status(200).json({ api : "up"});
  });

module.exports = server;