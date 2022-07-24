const jwt = require('jsonwebtoken')

const authMiddleWare = {
    verifyToken: (req, res, next) => {
        const token = req.headers.token
        if (token) {
            const accessToken = token.split(' ')[1] // Authentication: Bearer + accessToken
            jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
                if (error) {
                    res.status(403).json('Token is not valid.')
                }
                req.user = user
                next()
            })
        } else {
            res.status(401).json('You\'re not authentication.')
        }
    }
}

module.exports = authMiddleWare