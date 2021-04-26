const express = require('express')
const mysql = require('mysql')
const app = express()
const port = process.env.PORT ? process.env.PORT : 3000
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD
})

app.get('/', (req, res) => {
    db.connect()
    db.query(
        'SELECT id, module FROM modules ORDER BY module ASC',
        (err, rows, fields) => {
            if (err) throw err
            res.send({
                modules: rows
            })
        }
    )
    db.end()
})

app.listen(port, () => {
    console.log(`Desafio 01 PFA rodando na porta em http://localhost:${port}`)
})