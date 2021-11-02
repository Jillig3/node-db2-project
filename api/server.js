const express = require("express");

const server = express();

// DO YOUR MAGIC
const carsRouter = require('./cars/cars-router.js');
server.use(express.json());
server.unsubscribe('/api/cars', carsRouter);
module.exports = server;
