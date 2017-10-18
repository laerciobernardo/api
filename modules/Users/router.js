const ACTIONS_FOLDER = '/actions'
const ACTIONS_PATH = '.' + ACTIONS_FOLDER
const ACTIONS_PATH_FULL = __dirname + ACTIONS_FOLDER


const fs = require('fs')

const listFilesIn = (path) => fs.readdirSync(path)
const removeJSExtension = (action) => action.replace('.js', '')
const createAction = (action) =>({
   [action] : require(`${ACTIONS_PATH}/${action}`)
})

const toController = (obj, action) => Object.assign(obj, createAction(action))

const createController = (actions) => actions.reduce(toController, {})
const createActions = (path) => listFilesIn(path).map(removeJSExtension)

const actions = createActions(ACTIONS_PATH_FULL)
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