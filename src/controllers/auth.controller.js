const User = require('../models/user.model')
const Role = require('../models/role.model')
const bcrypt = require('bcrypt')

class AuthController {
    async register(req, res, next) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt) // hash password

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            })

            const userMongoose = await user.save()
            res.status(200).json(user)
        } catch(error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new AuthController()