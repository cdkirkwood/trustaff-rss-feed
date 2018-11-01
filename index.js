const Express = require('express')
const morgan = require('morgan')
const app = Express()
const bodyParser = require('body-parser')
const PORT = 8080
const db = require('./db')
module.exports = app

app.use(morgan('dev'))

app.use(bodyParser.json())

 // error handling endware
 app.use((err, req, res, next) => {
  console.error(err)
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})

db.sync()
  .then(() => {
    app.listen(PORT, () => (console.log('Server is alive!')))
  })

