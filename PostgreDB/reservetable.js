const Pool = require('pg').Pool
const pool = new Pool({
  user: 'developer',
  host: 'localhost',
  database: 'reservetable',
  password: 'whygodwhy',
  port: 5432
})

export default pool; 