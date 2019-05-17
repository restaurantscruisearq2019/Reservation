const express = require("express");
const bodyParser = require('body-parser');
const db = require('../routes/client');

module.exports = app => {
    app.get("/", (req, res) => {
        res.send({
            message: "Hi",
            status: "success"
        });
    });

    app.use(bodyParser.json())
    app.use(
        bodyParser.urlencoded({
            extended: true,
        })
    )

};