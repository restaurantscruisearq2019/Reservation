const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/tablereserved',(request, response) => {
        pool.query('SELECT * FROM tablereserved', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/tablereserved/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM tablereserved WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/tablereserved', (request, response) => {
        const { idreservation, idtable } = request.body

        pool.query('INSERT INTO tablereserved (idreservation, idtable) VALUES ($1, $2)', [idreservation, idtable], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Table Reserved added with ID: ${results.insertId}`)
        })
    });

    app.put('/tablereserved/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const { idreservation, idtable } = request.body

        pool.query(
            'UPDATE tablereserved SET idreservation = $1, idtable = $2 WHERE id = $3',
            [idreservation, idtable, id],
            (error, results) => {
                if (error) {
                    throw error
                }
                response.status(200).send(`Table Reserved modified with ID: ${id}`)
            }
        )
    });


    app.delete('/tablereserved/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM tablereserved WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Table Reserved deleted with ID: ${id}`)
        })
    });

}