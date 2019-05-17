const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/reservations',(request, response) => {
        pool.query('SELECT * FROM reservation', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/reservations/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM reservation WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/reservations', (request, response) => {
        const { startdate, enddate, idclient } = request.body

        pool.query('INSERT INTO reservation (startdate, enddate, idclient) VALUES ($1, $2, $3)', [startdate, enddate, idclient], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Reservation added with ID: ${results.insertId}`)
        })
    });

    app.put('/reservations/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const { startdate, enddate, idclient } = request.body

        pool.query(
            'UPDATE reservation SET startdate = $1, enddate = $2, idclient = $3 WHERE id = $4',
            [startdate, enddate, idclient, id],
            (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Reservation modified with ID: ${id}`)
            }
        )
    });


    app.delete('/reervations/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM reservation WHERE id = $1', [id], (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Reservation deleted with ID: ${id}`)
        })
    });

}