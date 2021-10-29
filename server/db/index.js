const {Pool} = require('pg')
require('dotenv').config()

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT

})

module.exports = {
    // query data menggunakan pool
    async query(text, params) {
        const startQuery = Date.now()
        const result = await pool.query(text, params)
        const duration = Date.now() - startQuery

        // result of query with duration and row
        console.log('executed query', { text, duration, rows: result.rowCount })
        return result
    }
}