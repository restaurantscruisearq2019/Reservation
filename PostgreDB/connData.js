const Pool = require('pg').Pool;
const dbHost = require('../api/dbRoutes');

const pool = new Pool({
  user: 'developer',
  host: dbHost,
  database: 'reservationdb',
  password: 'whygodwhy',
  port: 5432
})

module.exports = {
  pool
}  