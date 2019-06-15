const Pool = require('pg').Pool
const pool = new Pool({
  user: 'developer',
  host: 'db',
  database: 'reservationdb',
  password: 'whygodwhy',
  port: 5432
})

module.exports = {
  pool
}  