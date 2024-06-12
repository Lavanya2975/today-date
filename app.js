const express = require('express')

const app = express()

app.get('/', (request, response) => {
  let MyDate = new Date()
  response.send(
    `${MyDate.getDate()}-${MyDate.getMonth() + 1}-${MyDate.getFullyear()}`,
  )
})

module.exports = app
