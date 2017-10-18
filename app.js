const express = require('express')
const app = express()
const router = express.Router()

const users = require('./modules/Users/router')(router)

app.use('/users', users)

module.exports = app