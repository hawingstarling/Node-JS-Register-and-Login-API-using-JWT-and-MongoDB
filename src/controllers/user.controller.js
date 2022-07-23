const User = require('../models/user.model')

class UserController {
    async getAllUser (req, res, next) {
        try {
            await User.find({})
                .then((user) => res.json({ user }))
                .catch((error) => next(error))
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = new UserController()