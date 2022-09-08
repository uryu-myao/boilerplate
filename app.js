/**
 * Express configuration
 * @see https://expressjs.com/en/4x/api.html
 */

const express = require('express')
const app = express()
const path = require('path')
const port = 5000

app.locals.basedir = path.join(__dirname, 'views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/about', (req, res) => {
  res.render('about')
})

app.get('/contact', (req, res) => {
  res.render('contact')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
