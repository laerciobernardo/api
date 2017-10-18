const express = require('express')
const app = express()

const users = require('./modules/Users/router')

app.use('/users', users)

module.exports = app