/**
 * Set env by dotenv
 * @see https://www.npmjs.com/package/dotenv
 */
require('dotenv').config()
console.log(process.env.PRISMIC_ENDPOINT, process.env.PRISMIC_CLIENT_ID)

/**
 * Express configuration
 * @see https://expressjs.com/en/4x/api.html
 */
const express = require('express')
const app = express()
const path = require('path')
const port = 5000

/**
 * Prismic
 * @see https://prismic.io/docs/technologies/express-overview
 */
app.locals.basedir = path.join(__dirname, 'views')
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/details', (req, res) => {
  res.render('detail')
})

app.get('/details/detail/:uid', (req, res) => {
  res.render('details/detail')
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
