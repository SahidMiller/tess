const path = require("path");
const WebpackModules = require("webpack-modules")
module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve("./dist"),
    assetModuleFilename: "[path][name][ext]",
    libraryTarget: "umd",
  },
  mode: process.env.NODE_ENV || "development",
  target: "web",
  optimization: {
    nodeEnv: false,
  },
  externals: {
    "preact/compat": "react",
    stream: "stream",
  },
  module: {
    rules: [
      {
        test: /\.m?js(x?)$/,
        include: [path.resolve(__dirname, "src")],
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"]
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // {
      //   test: /\.(png|jpe?g|gif|woff2|woff|mp3|ttf|svg|eot)$/,
      //   type: "asset/resource",
      // },
    ],
  }
};
