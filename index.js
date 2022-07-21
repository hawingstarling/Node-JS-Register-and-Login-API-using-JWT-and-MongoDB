const express = require('express')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT || 5000

dotenv.config()

// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/', (req, res) => {
    res.send('hello standard lord.')
})

app.listen(PORT, () => console.log(`Server is running with port ${PORT}`))