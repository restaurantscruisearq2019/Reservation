const express = require("express");

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'developer',
  host: 'localhost',
  database: 'reservetable',
  password: 'whygodwhy',
  port: 5432
})


module.exports = app => {
    app.get('/clients',(request, response) => {
        pool.query('SELECT * FROM client ORDER BY id ASC', (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).json(results.rows)
        })
    }) 

    app.get('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
            if (error) {
            throw error
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/clients', (request, response) => {
        const { name, restaurant } = request.body

        pool.query('INSERT INTO client (name, restaurant) VALUES ($1, $2)', [name, restaurant], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Client added with ID: ${results.insertId}`)
        })
    });

    app.put('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)
        const { name, restaurant } = request.body

        pool.query(
            'UPDATE client SET name = $1, restaurant = $2 WHERE id = $3',
            [name, restaurant, id],
            (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`Client modified with ID: ${id}`)
            }
        )
    });


    app.delete('/clients/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM client WHERE id = $1', [id], (error, results) => {
            if (error) {
            throw error
            }
            response.status(200).send(`Client deleted with ID: ${id}`)
        })
    });

}