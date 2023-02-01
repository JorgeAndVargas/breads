const express = require('express')
const breads = express.Router()

// INDEX
breads.get('/', (req, res) => {
  res.send(Bread)
})

// SHOW
breads.get('/:arrayIndex', (req, res) => {
    res.send(Bread[req.params.arrayIndex])
  })
  
module.exports = breads
