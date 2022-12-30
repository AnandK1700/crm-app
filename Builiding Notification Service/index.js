const dbConfig = require('./configs/db.config')
const mongoose = require("mongoose")
const express = require('express')

const app = express()
app.use(express.json())

mongoose.connect(dbConfig.DB_URL,
    () => { console.log("Connected to MongoDB") },
    err => { console.log("Error: ", err.message) })

app.listen(3030, () => {
    console.log("Application started on the port number 3030")
})