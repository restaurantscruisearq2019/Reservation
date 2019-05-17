const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/tables',(request, response) => {
        pool.query('SELECT * FROM restauranttable', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/tables/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM restauranttable WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/tables', (request, response) => {
        const { tableNumber } = request.body

        pool.query('INSERT INTO restauranttable (tableNumber) VALUES ($1)', [tableNumber], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Table added with ID: ${results.insertId}`)
        })
    });

    app.put('/tables/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const { tableNumber } = request.body

        pool.query(
            'UPDATE restauranttable SET tableNumber = $1 WHERE id = $2',
            [tableNumber, id],
            (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Table modified with ID: ${id}`)
            }
        )
    });


    app.delete('/tables/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM restauranttable WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Table deleted with ID: ${id}`)
        })
    });

}