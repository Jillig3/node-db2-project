const express = require("express");

const server = express();

const carsRouter = require('./cars/cars-router.js');
server.use(express.json());

server.use('*', (req, res, next) => {
    next({ status: 404, message: 'not found'})
})

server.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message
    })
})

server.unsubscribe('/api/cars', carsRouter);

module.exports = server;
