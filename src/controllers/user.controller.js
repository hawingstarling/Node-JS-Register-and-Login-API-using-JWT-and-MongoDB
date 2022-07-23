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

    async delete (req, res, next) {
        try {
            await User.deleteOne({ _id: req.params.id })
            .then(() => res.send(`delete succesfull with id ${req.params.id}`))
            .catch((error) => next(error))
            res.status(200).json('Delete succesfull.')
        } catch (error) {
            res.status(500).json(error)
        }
    }


}

module.exports = new UserController()