const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {
    app.get('/reservedgroups',(req, res) => {
        pool.query('SELECT * FROM reservedgroup', (error, results) => {
            if (error) {
                console.log(error)
            }
            res.status(200).json(results.rows)
        })
    }) 

    app.get('/reservedgroups/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('SELECT * FROM reservedgroup WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).json(results.rows)
        })
    });

    app.post('/reservedgroups', (request, response) => {
        const { groupid, restaurantid, startdate, enddate } = request.query

        pool.query('INSERT INTO reservedgroup (groupid, restaurantid, startdate, enddate) VALUES ($1,$2,$3,$4)', [groupid, restaurantid, startdate, enddate], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(201).send(`Reserved Group added!`)
        })
    });

    app.put('/reservedgroups/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const { groupid, restaurantid, startdate, enddate } = req.query

        pool.query(
            'UPDATE reservedgroup SET groupid = $1, restaurantid = $2, startdate = $3, enddate = $4 WHERE id = $5',
            [groupid, restaurantid, startdate, enddate, id],
            (error) => {
            if (error) {
                console.log(error)
            }
            res.status(200).send(`Reserved Group with ID ${id} modified`)
            }
        )
    });


    app.delete('/reservedgroups/:id', (request, response) => {
        const id = parseInt(request.params.id)

        pool.query('DELETE FROM reservedgroup WHERE id = $1', [id], (error, results) => {
            if (error) {
                console.log(error)
            }
            response.status(200).send(`Reservation with ID ${id}  deleted`)
        })
    });

}