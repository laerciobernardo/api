const express = require('express')
const app = express()
const router = express.Router()

const users = require('./modules/Users/router')(router)
const products = require('./modules/Products/router')(router)


app.use('/products', products)
app.use('/users', users)

module.exports = app