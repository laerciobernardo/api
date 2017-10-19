const express = require('express')
const app = express()
const users = require('./modules/Users/router')(express.Router())
const products = require('./modules/Products/router')(express.Router())
const clients = require('./modules/Clients/router')(express.Router())


app.use('/products', products)
app.use('/users', users)
app.use('/clients', clients)

module.exports = app