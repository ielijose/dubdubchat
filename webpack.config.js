const HtmlWebpackPlugin = require("html-webpack-plugin");
const WebpackPwaManifestPlugin = require("webpack-pwa-manifest");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "app.[contenthash].js",
    publicPath: "/"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      favicon: "src/assets/favicon.ico"
    }),
    new WebpackPwaManifestPlugin({
      name: "DubDubChat",
      shortname: "Rick & Morty Chat Generator 🦚",
      description:
        "Create the craziest conversations with the phrases of Rick and Morty.",
      background_color: "#efe8de",
      theme_color: "#81c140",
      icons: [
        {
          src: path.resolve("src/assets/icon.png"),
          sizes: [96, 128, 192, 256, 384, 512]
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            "https://rickandmortyapi.com/api/character/avatar/(.*).jpeg"
          ),
          handler: "CacheFirst",
          options: {
            cacheName: "avatars"
          }
        },
        {
          urlPattern: new RegExp("https://rickandmortyapi.com/"),
          handler: "NetworkFirst",
          options: {
            cacheName: "characters-api"
          }
        },
        {
          urlPattern: new RegExp(
            "https://rickandmorty-quotes.ielijose.now.sh/"
          ),
          handler: "NetworkFirst",
          options: {
            cacheName: "quotes-api"
          }
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-styled-components"]
          }
        }
      }
    ]
  }
};
