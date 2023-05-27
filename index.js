const jsonServer = require('json-server')
const server = jsonServer.create()
const path = require('path')
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults()
require("dotenv").config()

server.use(middlewares)

server.use(jsonServer.rewriter({
    '/freelancers': '/users'
}))


server.use(router)

server.listen(process.env.port, () => {
  console.log('JSON Server is running on '+process.env.port)
})