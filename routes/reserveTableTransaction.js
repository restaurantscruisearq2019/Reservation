const express = require("express");
const { pool } = require('../PostgreDB/connData')

module.exports = app => {

    app.get('/seeReservation/:name/:startDate',(req, res) => {
        const clientName = req.params.name;
        const startDate = req.params.startDate;
        let idClient;
        let idReservation;

        pool.query('SELECT $1 FROM client', [clientName],(error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
            idClient = res.json(results.rows).id;
        })

        pool.query('SELECT $1 FROM reservation', [idClient],(error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
            idReservation = res.json(results.rows).id;
        })

        pool.query('SELECT $1 FROM tablereserved', [idReservation],(error, results) => {
            if (error) {
                throw error
            }
            res.status(200).json(results.rows)
        })

    })

    app.post('/doReservation',(req, res, idClient, startDate, endDate, numberOfTables) => {
        const { idreservation, idtable } = req.body

        pool.query('INSERT INTO tablereserved (idreservation, idtable) VALUES ($1, $2)', [idreservation, idtable], (error, results) => {
            if (error) {
                throw error
            }
            response.status(201).send(`Table Reserved added with ID: ${results.insertId}`)
        })
    }) 
}