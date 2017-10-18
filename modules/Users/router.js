const express = require('express')
const router = express.Router()

//Actions
const find = require('./actions/find')
const findOne = require('./actions/findOne')
const create = require('./actions/create')
const update = require('./actions/update')
const remove = require('./actions/remove')

const actions = ['find', 'findOne', 'create', 'update', 'delete']

//Controller


//Routes
const routes = [
   {
      method:'get',
      path: '/',
      action: find
   },
   {
      method:'get',
      path: '/:id',
      action: findOne
   },
   {
      method:'post',
      path: '/',
      action: create
   },
   {
      method:'put',
      path: '/:id',
      action: update
   },
   {
      method:'delete',
      path: '/:id',
      action: remove
   }
]

const createRoute = (route) => router[route.method](route.path, route.action)

const createRoutes = (routes) => routes.map(createRoute)

createRoutes(routes)

module.exports = router;