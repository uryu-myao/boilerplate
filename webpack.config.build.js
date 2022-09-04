const path = require('path')

// copy and merge main config declartion
const { default: merge } = require('webpack-merge')
const config = require('./webpack.config')

module.exports = merge(config, {
  mode: 'production',

  output: {
    path: path.join(__dirname, 'public'),
  },
})
