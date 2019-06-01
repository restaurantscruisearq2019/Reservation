const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/groups',(request, response) => {
        pool.query('SELECT * FROM "group"', (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/groups/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM "group" WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/groups', (req, response) => {

        pool.query('INSERT INTO "group" default values', (error) => {
            if (error) {
                console.log(error)
            }
            response.status(201).send(`Group Reserved added.`)
        })
    });

    app.delete('/groups/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM "group" WHERE id = $1', [id], (error) => {
            if (error) {
                console.log(error)
            }
            response.status(200).send(`Group Reserved with ID ${id} deleted`)
        })
    });

}