const express = require('express')
const authMiddleWare = require('../middleware/auth.middleware')
const route = express.Router()

const userController = require('../controllers/user.controller')

route.get('/users', authMiddleWare.verifyToken, userController.getAllUser)
route.delete('/delete/:id', userController.delete)

module.exports = route