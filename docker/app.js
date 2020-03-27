const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()
const port = 8000
const f = 'results.json'

// serve results.json to the React frontend
app.get(`/${f}`, (req, res) => {
  fs.readFile(f, (err, data) => {
    if (err) {
      console.error(err)
      res.status(500).send(`Error reading ${f} `)
      return
    }
    let json = JSON.parse(data)
    res.header('Access-Control-Allow-Origin', '*') // allow CORS
    res.json(json)
  })
})

app.use(express.static(path.join(__dirname, 'build')))

// catch-all for all other routes
app.get('/*', (req, res) => {
  res.json({})
})

app.listen(port, () => {
  console.log(`\n\nMKIT Running - browse to http://localhost:${port}\n\n`)
})
