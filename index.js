let express = require('express')
let server = express()
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))

//routes

let galaxyRoutes = require('./routes/galaxies')

server.use('/api/galaxies', galaxyRoutes)

//in case of errors

server.use('/api/*', (error, req, res, next) => {
  res.send(error)
})

server.use('*', (req, res, next) => {
  res.status(404).send('<h1>NO PAGE FOUND</h1>')
})



server.listen(port, () => {
    console.log('DA SPAAAACE....', port)
  })