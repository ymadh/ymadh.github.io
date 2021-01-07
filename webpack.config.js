const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    }
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    port: 9000
  },
  mode: "development",
  devtool: "source-map"
};
