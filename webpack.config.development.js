const path = require("path");

// copy and merge main config declartion
const { default: merge } = require("webpack-merge");
const config = require("./webpack.config");

module.exports = merge(config, {
  mode: "development",

  devtool: "inline-source-map",
  devServer: { devMiddleware: { writeToDisk: true } },
  output: {
    path: path.resolve(__dirname, "public"),
  },
});
