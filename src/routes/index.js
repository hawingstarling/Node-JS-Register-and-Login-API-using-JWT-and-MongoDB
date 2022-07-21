const authRoute = require('./auth.routes')

function route(app) {
    app.use('/', authRoute)

    app.get('/', (req, res) => {
        res.send('hello standard lord.')
    })
}

module.exports = route