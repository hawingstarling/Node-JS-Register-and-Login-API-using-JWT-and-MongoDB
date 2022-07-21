const mongoose = require('mongoose')

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/login_register_jwt_nodejs', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('connect successfull.');
    } catch (error) {
        console.log('connect failure.');
    }
}

module.exports = { connect }