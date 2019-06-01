const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/clients',(req, response) => {
        pool.query('SELECT * FROM client ORDER BY id ASC', (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/clients', (request, response) => {
        const { name, groupid } = request.query

        pool.query('INSERT INTO client (name, groupid) VALUES ($1, $2)', [name, groupid], (error) => {
            if (error) {
                console.log(error)
            }
            response.status(201).send('Client added.')
        })
    });

    app.put('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const { name, groupid } = request.query

        pool.query(
            'UPDATE client SET name = $1, groupid = $2 WHERE id = $3',
            [name, groupid, id],
            (error, results) => {
                if (error) {
                    console.log(error)
                }
                response.status(200).send(`Client with ID ${id} modified`)
            }
        )
    });


    app.delete('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM client WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).send(`Client with ID ${id} deleted`)
        })
    });

}