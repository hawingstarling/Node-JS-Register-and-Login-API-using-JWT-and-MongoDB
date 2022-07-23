const User = require('../models/user.model')
const Role = require('../models/role.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

class AuthController {
    async register(req, res) {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt) // hash password

            const user = new User({
                username: req.body.username,
                email: req.body.email,
                password: hashed,
            })

            // save to mongodb
            const userMongoose = await user.save()
            res.status(200).json(userMongoose)
        } catch(error) {
            res.status(500).json(error)
        }
    }

    async login(req, res) {
        try {
            const user = await User.findOne({ username: req.body.username })
                if (!user) {
                    res.status(404).json('Username not exist.')
                }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                res.status(404).json('Wrong password.')
            }

            if (user && validPassword) {
                const accessToken = jwt.sign({
                    id: user.id,
                    role: user.roles
                }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '30s' })
                res.status(200).json({ accessToken })
            }

        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = new AuthController()