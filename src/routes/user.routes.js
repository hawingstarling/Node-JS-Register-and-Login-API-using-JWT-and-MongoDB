const express = require('express')

const route = express.Router()

const userController = require('../controllers/user.controller')

route.get('/users', userController.getAllUser)

module.exports = route