const express = require('express')

const route = express.Router()

const userController = require('../controllers/user.controller')

route.get('/users', userController.getAllUser)
route.delete('/delete/:id', userController.delete)

module.exports = route