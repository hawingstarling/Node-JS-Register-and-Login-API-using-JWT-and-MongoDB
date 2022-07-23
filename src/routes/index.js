const authRoute = require('./auth.routes')
const userRoute = require('./user.routes')

function route(app) {
    app.use('/v1/auth', authRoute)
    app.use('/v1/auth', userRoute)

    app.get('/', (req, res) => {
        res.send('hello standard lord.')
    })
}

module.exports = route