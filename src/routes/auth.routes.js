const express = require('express')

const route = express.Router()

const authController = require('../controllers/auth.controller')

route.get('/register', authController.register)    // todo controller in here ...

module.exports = route