const ACTION_PATH = './actions'

//Actions
const find = require('./actions/find')
const findOne = require('./actions/findOne')
const create = require('./actions/create')
const update = require('./actions/update')
const remove = require('./actions/remove')

const actions = ['find', 'findOne', 'create', 'update', 'remove']

const createAction = (action) =>({
   [action] : require(`${ACTION_PATH}/${action}`)
})
//Controller
const toController = (obj, action) => Object.assign(obj, createAction(action))

const createController = (actions) => actions.reduce(toController, {})

const Controller = createController(actions)

//Routes
const routes = [
   {
      method:'get',
      path: '/',
      action: Controller.find
   },
   {
      method:'get',
      path: '/:id',
      action: Controller.findOne
   },
   {
      method:'post',
      path: '/',
      action: Controller.create
   },
   {
      method:'put',
      path: '/:id',
      action: Controller.update
   },
   {
      method:'delete',
      path: '/:id',
      action: Controller.remove
   }
]

const createRoute = (router) => (route) => router[route.method](route.path, route.action)

const createRoutes = (router, routes) => {
   routes.map(createRoute)
   return router
}

module.exports = (router) => createRoutes(router, routes);