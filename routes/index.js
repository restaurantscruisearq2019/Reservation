const express = require("express");
const bodyParser = require('body-parser');

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