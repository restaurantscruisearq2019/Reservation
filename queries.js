
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'developer',
  host: 'localhost',
  database: 'reservetable',
  password: 'whygodwhy',
  port: 5432
})

const getClient = (request, response) => {
    pool.query('SELECT * FROM client ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const getClientById = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('SELECT * FROM client WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).json(results.rows)
    })
}

const createClient = (request, response) => {
    const { name, restaurant } = request.body

    pool.query('INSERT INTO client (name, restaurant) VALUES ($1, $2)', [name, restaurant], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`Client added with ID: ${results.insertId}`)
    })
}

const updateClient = (request, response) => {
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
}


const deleteClient = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM client WHERE id = $1', [id], (error, results) => {
        if (error) {
        throw error
        }
        response.status(200).send(`Client deleted with ID: ${id}`)
    })
}

module.exports = {
    getClient,
    getClientById,
    createClient,
    updateClient,
    deleteClient
}