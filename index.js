const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cors = require('cors')
const db = require('./src/config/db.config')
const route = require('./src/routes')

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config() // config variable eviroment.
db.connect()    // connect mongoose
route(app)  // config route

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))


app.listen(PORT, () => console.log(`Server is running with port ${PORT}`))