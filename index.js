const express = require('express')
const bodyParser = require('body-parser')
const db = require('./queries')

const app = express()
const port = 5000

app.use(bodyParser.json())

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
})

app.get('/clients', db.getClient)
app.get('/clients/:id', db.getClientById)
app.post('/clients', db.createClient)
app.put('/clients/:id', db.updateClient)
app.delete('/clients/:id', db.deleteClient)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})